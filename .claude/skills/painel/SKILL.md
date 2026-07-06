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
     extrair de `cliente.md`/`diagnostico.md`/`pesquisa.md`/`plano.md`/`casos.md`:
     `slug`, `nome`, `sobre` (1 linha), `criado_em`, `etapas` (bool: novo,
     diagnostico, pesquisa, plano, casos), `resumo` (1-2 frases do estado atual),
     `artefatos` (arquivos relevantes gerados, ex. briefing, imagem de post).
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
