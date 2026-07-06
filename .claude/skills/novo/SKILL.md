---
name: novo
description: >
  Cria o contexto de uma empresa nova no Logic — o primeiro comando de qualquer
  fluxo. Form mínimo (só o nome é obrigatório), cria a pasta clientes/<empresa>/ e
  o cliente.md. Use quando o usuário disser "novo cliente", "/novo",
  "quero analisar a empresa X", ou no começo de qualquer estudo.
---

# /novo — cria o contexto

Primeiro comando do fluxo. Serve só pra criar o contexto correto — leve, sem
fricção (princípio facilitador).

> **Roda sozinho, não só no `/novo`.** O usuário quase nunca vai digitar `/novo`.
> Sempre que ele começar a falar de uma empresa concreta (a dele ou a de um cliente) —
> "minha loja é a X", "tenho uma barbearia no Recreio e tô com problema de recompra" —
> **crie o contexto na hora, por dentro, sem pedir permissão nem esperar o comando.**
> Não interrompa a conversa com formulário: pega o que já foi dito, cria a pasta e o
> `cliente.md`, confirma curto ("Anotei a **<empresa>** ✓") e segue anotando cada dado
> novo que ele contar. Perguntar "quer que eu cadastre?" é o erro — ele já disse que é o
> negócio dele; a Logic organiza sozinha.

## Campos (preencher só o que tiver)
- **Nome da empresa** — obrigatório
- Cidade / Estado — ajuda a coleta e desempata homônimos
- Site — opcional
- Instagram — opcional
- Nicho — opcional
- CNPJ — opcional (só pra desempatar empresas de nome igual)

Não interrogar o usuário. Pedir os campos de uma vez, deixar claro que só o nome é
obrigatório — **mas avisar que quanto mais completo o cadastro, mais preciso fica o
diagnóstico e o plano** (e menos perguntas repetidas depois).

## O que fazer
1. Criar a pasta `clientes/<slug-da-empresa>/` (slug em minúsculas, sem acento).
2. Criar `clientes/<slug>/cliente.md` a partir de `_nucleo/templates/cliente.md`,
   preenchendo o que veio.
3. Criar a subpasta `clientes/<slug>/fontes/`.
4. (Opcional) Confirmar rapidamente com uma busca de identidade se a empresa foi
   achada — `WebSearch` "<nome> <cidade>" — e perguntar *"é esta?"* se houver
   dúvida. Sem transformar isso em diagnóstico ainda.
5. **Emendar direto no diagnóstico (etapa 1):** criado o contexto, **já rodar a etapa 1
   do `/diag`** (pesquisa pública) — sem perguntar, é o que o usuário quer ver. Avisar
   curto ("Contexto criado, já vou fazer o diagnóstico inicial…") e seguir o fluxo do
   `/diag` etapa 1. No fim, oferecer aprofundar (etapa 2/3).

Não perguntar sobre memória nem nada além disso. Rápido e direto.
