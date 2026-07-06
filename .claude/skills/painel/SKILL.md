---
name: painel
description: >
  Abre e atualiza o painel local da Logic (site/) — organiza empresas, leads e
  config num painel visual. Regenera os dados em site/data/*.json a partir dos
  arquivos reais e sobe o servidor local. Use quando o usuário disser "painel",
  "/painel", "abre o painel", ou depois de /novo, /diag, /pesquisa, /plano,
  /casos, /leads (pra refletir o que mudou).
---

# /painel — o painel visual da Logic

Painel administrativo local (`site/index.html`) — não é site de divulgação. Mostra
o que já foi feito (empresas, leads, config) pra quem usa a Logic enxergar tudo
organizado num lugar só, ajudando o fluxo. Fica em `site/`, servido local — **não
precisa deploy** pra usar no dia a dia.

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
     <div class="fdrop">↓ 8% viram lead</div><div class="fstep" style="width:80%">…</div>…
     </div>` — cada `fstep` mais estreito que o de cima (afunila), com o `fdrop` da
     perda entre eles. Bonito e claro.
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

2. **Subir o servidor local** (se não estiver rodando):
   ```bash
   cd site && npm start
   ```
   Roda em `http://localhost:3000`. Se a porta já estiver ocupada (servidor
   anterior ainda de pé), não precisa subir de novo — só abrir o navegador.

3. **Abrir no navegador** — `http://localhost:3000`.

4. O painel **se atualiza sozinho**: ele faz polling dos JSONs a cada poucos
   segundos, então depois de aberto uma vez, qualquer novo `/diag`, `/leads`
   etc. aparece ali sem precisar rodar `/painel` de novo. Rodar `/painel` outra
   vez só garante que o servidor está de pé e os dados foram regenerados — não
   precisa fechar nada.

5. Confirmar ao usuário: *"Painel aberto — http://localhost:3000"*.

## Regras
- Preto/cinza/branco, sem outra cor de destaque — segue a identidade em
  `IDENTIDADE.md` (símbolo modular, Satoshi, paleta preta/branca). No header do
  painel, só o símbolo — sem o wordmark "Logic".
- Nunca empresa/lead de exemplo. Só dado real do que a Logic já processou.
- O painel só lê — nunca escreve de volta no `clientes/` (a via é sempre chat → arquivo → painel).
