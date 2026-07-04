---
name: painel
description: >
  Atualiza o painel visual do Logic (painel/index.html) com os dados atuais dos
  clientes. Regenera só o bloco de dados embutido, sem tocar no design. Use quando o
  usuário disser "atualiza o painel", "/painel", ou depois de qualquer comando que
  mudou o estado de um cliente (diagnóstico, pesquisa, plano, casos, novo cliente).
---

# /painel — mantém o dashboard atualizado

O painel é um HTML **self-contained** (sem servidor). Como o navegador não lê os
arquivos da pasta sozinho, é o Claude que **regenera o bloco de dados** embutido
sempre que algo muda. Só os dados — o design (CSS/HTML/JS) permanece intacto.

## O que fazer
1. Ler os clientes em `clientes/*/` (pular `_template`). Para cada um, extrair de
   `cliente.md`, `diagnostico.md`, `pesquisa.md`, `plano.md`, `casos.md`:
   - `nome`, `nicho`, `cidade`
   - `etapas` — quais estão prontas (diagnostico/pesquisa/plano/casos)
   - `gargalo` — a frase do gargalo (curta)
   - `insight` — o insight-âncora do diagnóstico
   - `scores` — as 6 notas do Painel /10 (Oferta&Preço, Posicionamento, Aquisição,
     Conversão, Reputação/Retenção, Presença/Conteúdo)
2. Montar a `timeline` — histórico completo e detalhado, cada evento com
   `{data, tipo, tit, tx}` (data ISO, tipo curto ex. "Diagnóstico", título e detalhe).
3. **Substituir APENAS** o objeto `const DADOS = {…}` dentro de
   `painel/index.html` (entre os marcadores de comentário). **Não alterar** o CSS,
   o HTML, as funções JS, nem a referência da logo (`logo.png`).

> Os marcadores que o usuário adiciona no calendário ficam no **localStorage do
> navegador dele** (não no arquivo) — regenerar o `DADOS` não apaga esses marcadores.
4. Confirmar ao usuário: *"Painel atualizado — abre `painel/index.html`."*

## Regras
- Frases curtas (gargalo/insight cabem num card/modal).
- Só dado REAL dos arquivos. Se um cliente não tem diagnóstico, `etapas.diagnostico=false`
  e sem scores.
- Nunca inventar. Sem dado = campo vazio, não preenchimento fictício.
- Manter o padrão preto/branco/vermelho, sem emoji (o design já cuida disso).
