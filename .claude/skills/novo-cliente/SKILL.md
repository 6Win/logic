---
name: novo-cliente
description: >
  Cria o contexto de uma empresa nova no Logic — o primeiro comando de qualquer
  fluxo. Form mínimo (só o nome é obrigatório), cria a pasta clientes/<empresa>/ e
  o cliente.md. Use quando o usuário disser "novo cliente", "/novo_cliente",
  "quero analisar a empresa X", ou no começo de qualquer estudo.
---

# /novo_cliente — cria o contexto

Primeiro comando do fluxo. Serve só pra criar o contexto correto — leve, sem
fricção (princípio facilitador).

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
5. Fechar oferecendo o próximo passo: *"Contexto criado. Rodo o /diagnostico?"*

Não perguntar sobre memória nem nada além disso. Rápido e direto.
