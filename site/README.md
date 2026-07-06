# Painel da Logic

Não é site de divulgação — é o **painel administrativo** que organiza o que a Logic
já fez: empresas estudadas, leads coletados, status da chave do Google. Lê tudo de
`data/*.json`.

## A ponte chat ↔ painel
Não tem API viva. A ponte é **arquivo**: quando você roda `/novo`, `/diag`, `/leads`,
`/plano` etc. no chat, eu (Logic) atualizo os JSONs em `data/` (`empresas.json`,
`leads.json`, `config.json`). O painel só lê esses arquivos — não inventa dado, não
finge conexão que não existe. Rodando local, a atualização é instantânea (mesma
pasta). Publicado no Railway, precisa **subir de novo** (`git push`) pra refletir.

## Como abrir
Rode `/painel` no chat — ele regenera os dados e sobe o servidor local sozinho.
Manual, se precisar:
```bash
cd site
npm start        # http://localhost:3000
```
O painel faz polling dos JSONs a cada poucos segundos — depois de aberto uma
vez, fica atualizando sozinho. Não precisa de deploy pra usar no dia a dia.

## Arquivos
- `index.html` — o painel (Visão geral / Empresas / Leads / Config).
- `data/empresas.json`, `data/leads.json`, `data/config.json` — os dados que eu atualizo pelo chat.
- `logo.png` — wordmark.
- `server.js` / `package.json` — servidor estático mínimo, sem dependência.
