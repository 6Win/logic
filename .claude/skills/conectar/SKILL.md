---
name: conectar
description: >
  Liga esta instalação local da Logic ao painel online (logic-saas.vercel.app),
  guardando o token de sync do usuário. Depois de conectado, /diag, /plano,
  /leads e /casos SÓ mandam o resultado pro painel quando o usuário pedir
  explicitamente (ex. "manda pro painel") — nunca sozinhos no fim do comando.
  Use quando o usuário disser "conectar", "/conectar",
  "ligar ao painel", "colar o token", ou colar algo que pareça um token vindo
  do site (uma string sem espaço, tipo "cm..." ou um id de workspace).
---

# /conectar — ligar ao painel online

A Logic roda 100% local e de graça (isso não muda). `/conectar` é opcional: só
serve pra quem quer ver os resultados também no painel online, em vez de só nos
arquivos locais (`clientes/<empresa>/*.md`) e no painel local (`/painel`).

## O que fazer

1. **Se o usuário já colou um token** (junto com o pedido, ou como a própria
   mensagem): pular direto pro passo 3.
2. **Se não colou ainda, pedir:** *"Entra em **logic-saas.vercel.app**, faz
   login (ou cria conta), e na Visão geral tem um cartão 'Como conectar sua
   conta Claude' com um token — cola ele aqui."*
3. **Salvar o token.** Criar (ou sobrescrever) `scripts/sync.config.json`:
   ```json
   { "url": "https://logic-saas.vercel.app", "token": "<o token colado>" }
   ```
   (Esse arquivo é local e ignorado pelo git — nunca sobe pro repositório.)
4. **Confirmar com um teste leve, sem inventar dado:** se já existir algum
   `clientes/<empresa>/casos.md` ou resultado salvo, perguntar se quer
   sincronizar agora; senão, só confirmar a conexão e seguir. Não criar caso
   fake só pra testar.
5. **Avisar o que muda:** *"Conectado. A Logic continua rodando 100% local — só
   mando algo pro painel online quando você pedir (ex. 'manda pro painel' depois
   de um `/diag`, `/plano`, `/leads` ou `/casos`). Nada some sozinho no seu
   painel online sem você mandar."*

## Se der erro

- **Token inválido (401 "Token de sync inválido")**: o token pode ter sido
  copiado incompleto, ou é de outro workspace. Pedir pra colar de novo direto
  do painel.
- **Sem internet / painel fora do ar**: avisar que ficou salvo local
  (`clientes/`) mesmo assim — nada se perde, só a cópia online que não foi.
  Sugerir rodar `/conectar` de novo depois, ou `node scripts/sync.mjs
  clientes/<empresa>/diagnostico.json` (se o JSON já tiver sido gerado) quando
  a conexão voltar.

## Desconectar

Se o usuário pedir pra desconectar/parar de mandar pro painel: apagar
`scripts/sync.config.json`. Sem esse arquivo (e sem as env vars
`LOGIC_API_URL`/`LOGIC_SYNC_TOKEN`), a Logic volta a rodar só local.
