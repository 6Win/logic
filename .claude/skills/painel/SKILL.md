---
name: painel
description: >
  Abre e atualiza o painel visual da Logic (site/) — organiza empresas, leads e
  config. Regenera os dados em site/data/*.json a partir dos arquivos reais e
  abre direto na conversa (Artifact) — sem servidor, sem navegador. Use quando o
  usuário disser "painel", "/painel", "abre o painel", ou depois de /novo, /diag,
  /pesquisa, /plano, /casos, /leads (pra refletir o que mudou).
---

# /painel — o painel visual da Logic

Painel administrativo (`site/index.html`) — não é site de divulgação. Mostra o
que já foi feito (empresas, leads, config) pra quem usa a Logic enxergar tudo
organizado num lugar só, ajudando o fluxo. **Não precisa deploy nem servidor**
pra usar no dia a dia — o padrão é abrir como Artifact, direto na conversa.

## O que fazer

1. **Regenerar os dados** em `site/data/`:
   - `empresas.json` — ler `clientes/*/` (pular `_template`). Pra cada empresa,
     extrair de `cliente.md`/`diagnostico.md`/`plano.md`/`casos.md`:
     `slug`, `nome`, `sobre` (1 linha), `criado_em`, `etapas` (bool: novo,
     diagnostico, plano, casos — **não existe etapa `pesquisa`**: a pesquisa de
     mercado/concorrência vive DENTRO do diagnóstico, então entra como uma seção do
     conteúdo do `diagnostico`, nunca como etapa à parte), `resumo` (1-2 frases do
     estado atual, só pro cabeçalho do cartão), `etapas_conteudo` (ver abaixo — o
     coração do painel), `artefatos` (arquivos relevantes gerados).

   **`etapas_conteudo` — mostrar o COMPLETO, bonito, nunca resumo.** A regra é:
   *o painel mostra a mesma entrega que foi pro chat, na íntegra.* Nada de "2-4
   frases". Pra CADA etapa já feita, gere o conteúdo **completo** daquele arquivo
   (`diagnostico.md`, `plano.md`, `casos.md`) como **HTML** usando a biblioteca de
   componentes do painel (as classes já existem no `index.html`, dentro de
   `.stage-box.lg`). Etapa não feita **não entra** no objeto — o painel já mostra o
   aviso de "ainda não feito" sozinho.

   Componentes disponíveis (use os que o conteúdo pedir, nunca force todos):
   - Texto: `<h4>`, `<p>`, `<ul><li>` — já estilizados.
   - **Painel de notas /10** (`diag`): `<div class="lg-nota"><div class="row"><span
     class="k">Aquisição</span><span class="bar"><i style="width:40%"></i></span><span
     class="v">4</span></div>…</div>` (a largura da barra = nota×10%).
   - **Funil visual** (sempre que a etapa falar de funil): `<div class="lg-funil">
     <div class="fstep" style="width:100%"><span class="fl">Visitantes</span><span
     class="fn">1.000</span><div class="fd">quem chega no perfil</div></div>
     <div class="fdrop">8% viram lead</div><div class="fstep" style="width:80%">…</div>…
     </div>` — cada `fstep` mais estreito que o de cima (afunila), com o `fdrop` da
     perda entre eles (só o texto da perda; o conector visual é do CSS). Bonito e claro.
   - **Tiles de número** (projeção de faturamento, métricas): `<div class="lg-kpi">
     <div class="t"><div class="n">R$ 18k</div><div class="l">faturamento projetado</div>
     </div>…</div>`.
   - **Callout** (o gargalo, a aposta central): `<div class="lg-flag"><div class="t">O
     gargalo</div><p>…</p></div>`.
   - **Passos numerados** (`plano`): `<div class="lg-steps"><div class="s"><div
     class="num">1</div><div class="body"><b>Título do passo</b>detalhe + a métrica</div>
     </div>…</div>`.
   Cada etapa começa com um `<h4>` de título (ex.: "Diagnóstico completo"). Escreva
   o HTML já preenchido com o dado real da empresa — nunca placeholder. Aspas dentro
   do HTML: use `\"` no JSON. **Se o chat entregou fundo, o painel mostra fundo.**
   - `leads.json` — ler a prospecção mais recente salva (se houver pasta `leads/`
     ou resultado salvo em `clientes/<empresa>/`): `{nicho, lugar, data, total,
     itens:[...]}`.
   - `config.json` — ler `_config.json`: `google_key_conectada` = `true` se o
     campo `google_key` não estiver vazio.
   - **Nunca inventar dado.** Empresa sem diagnóstico = `etapas.diagnostico:
     false`, sem enfeite. Se não achar nada, `empresas.json` e `leads.json`
     ficam `[]` — o painel já mostra o estado vazio certo.

2. **Abrir direto no Claude, como Artifact** (padrão — se a ferramenta Artifact
   estiver disponível neste ambiente). Não sobe servidor nem abre navegador:
   gera um HTML autocontido (dados embutidos, sem fetch) a partir de
   `site/index.html` e publica com a ferramenta Artifact.

   a. **Fonte (Satoshi):** o `<link>` do Fontshare não funciona dentro de um
      Artifact (CSP bloqueia CDN externo). Já tem cache em
      `site/.fonte-cache/satoshi-{400,700,900}.b64` (gitignored) — usar direto
      se existir. Só baixar de novo se o cache não existir: pegar as URLs de
      `@font-face` que a API do Fontshare devolve pra `satoshi@400,700,900`,
      baixar os `.woff2`, converter cada um pra base64 e salvar nesses 3
      arquivos. Substituir o `<link>` por três `@font-face` com
      `src:url(data:font/woff2;base64,<...>)`, um por peso.
   b. **Dados:** embutir o conteúdo de `data/empresas.json`, `data/leads.json`
      e `data/config.json` direto como `const DATA = {...}` no script, e trocar
      a função `j(path)` (que fazia `fetch`) por uma que lê de `DATA`. Remover
      o `setInterval(refreshAll, 4000)` — é um snapshot, não precisa de
      polling (rodar `/painel` de novo gera um snapshot atualizado).
   c. **Mapa da aba Config:** o iframe do OpenStreetMap é um frame externo,
      também bloqueado pelo CSP do Artifact — trocar por um card estático
      (texto explicando Modo Google × Modo Busca, sem iframe).
   d. **Esqueleto:** a ferramenta Artifact já envolve o arquivo em
      `<!doctype>/<html>/<head>/<body>` sozinha — o HTML que a Logic monta
      **não pode conter** essas tags (nem a de fechamento). Só o miolo: meta
      viewport, title, `<style>`, `<header>`/`<main>`/`<footer>`, `<script>`.
   e. Publicar com a ferramenta Artifact: `favicon: "⬛"` (combina com o
      símbolo geométrico preto/branco da marca), descrição curta.
   f. Confirmar ao usuário com o link que a ferramenta devolver.

3. **Se a ferramenta Artifact não estiver disponível** (fallback — ambiente sem
   essa capacidade): volta pro modo antigo, servidor local:
   ```bash
   cd site && npm start
   ```
   Roda em `http://localhost:3000` (se já tiver um servidor de pé, não precisa
   subir de novo). Abrir no navegador e confirmar: *"Painel aberto —
   http://localhost:3000"*. Nesse modo o painel faz polling dos JSONs sozinho;
   no modo Artifact não — rodar `/painel` de novo gera um snapshot novo.

## Regras
- **Sem emoji e sem símbolo decorativo** (nada de ✓, ↓, →, 🚀…) em nenhum lugar do
  painel nem no `etapas_conteudo`. Estado e hierarquia se mostram pelos **componentes**
  (as classes CSS: barras, quadradinho de status, conector do funil), nunca por caractere.
- Preto/cinza/branco, sem outra cor de destaque — segue a identidade em
  `IDENTIDADE.md` (símbolo modular, Satoshi, paleta preta/branca). No header do
  painel, só o símbolo — sem o wordmark "Logic".
- Nunca empresa/lead de exemplo. Só dado real do que a Logic já processou.
- O painel só lê — nunca escreve de volta no `clientes/` (a via é sempre chat → arquivo → painel).
