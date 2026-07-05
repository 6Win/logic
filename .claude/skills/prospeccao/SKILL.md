---
name: prospeccao
description: >
  Acha clientes ideais no mercado — empresas reais por cidade/região e nicho, filtra as
  que têm oportunidade (sem site, digital fraco) e devolve uma lista priorizada de leads
  qualificados, na quantidade que o usuário pedir. Como o Kaptar, sem o disparo. Use
  quando o usuário disser "prospecção", "/prospeccao", "acha clientes pra mim", "quero
  leads de [nicho] em [cidade]".
---

# /prospeccao — encontrar clientes qualificados

Resolve a dor nº1 de quem vende serviço: **achar gente boa pra abordar.** Não é volume,
é qualidade do lead. Fala claro (regra nº1 da rubrica) e é eficiente com chamadas/tokens.

## O que perguntar (curto)
- **Nicho** (ex.: barbearia, restaurante, clínica) — obrigatório
- **Cidade / região** (ex.: Santa Cruz, RJ) — obrigatório
- **Quantos leads** quer na lista (padrão: 10)
- (opcional) que serviço ele vende — pra calibrar o "ângulo de abordagem"

## A chave do Google (o que faz funcionar bem)
Ler `google_key` em `_config.json`.
- **Com chave** → usa a API do Google Places (dados reais e estruturados). É o modo bom.
- **Sem chave** → avisar que a qualidade cai bastante e oferecer: (a) o usuário cola a
  chave (e você salva em `_config.json`), ou (b) modo básico via `WebSearch` (melhor que
  nada, menos confiável). Enabling: no Google Cloud, ativar **Places API** + **Geocoding API**.

## Workflow (modo Google — o principal)

### 1. Buscar candidatos — Places Text Search
`WebFetch` nesta URL (montar a query com nicho + cidade, url-encoded):
```
https://maps.googleapis.com/maps/api/place/textsearch/json?query=<NICHO>+em+<CIDADE>&region=br&language=pt-BR&key=<KEY>
```
Prompt do WebFetch: *"extraia todos os estabelecimentos: nome, place_id, endereço,
rating, número de avaliações (user_ratings_total), business_status."*
Se precisar de mais que ~20 resultados, repetir com o `next_page_token` retornado.

### 2. Enriquecer os candidatos — Place Details
Só pros candidatos que vão pra lista (não todos, pra economizar). Pra cada `place_id`:
```
https://maps.googleapis.com/maps/api/place/details/json?place_id=<PID>&fields=name,website,formatted_phone_number,rating,user_ratings_total,url&language=pt-BR&key=<KEY>
```
Prompt: *"pegue: tem website? (qual), telefone, rating, nº de avaliações, link do Google Maps."*

### 3. Filtrar por OPORTUNIDADE (o coração)
O lead ideal pra quem vende site/marketing = **negócio ativo, mas fraco no digital.**
Sinais de oportunidade (quanto mais, melhor o lead):
- **Sem website** → oportunidade forte (é exatamente o que ele pode vender)
- Rating baixo (<4,0) ou **poucas avaliações** (<20) → gestão/presença fraca
- (se valer a pena checar 1 lead) `WebSearch` "<nome> <cidade> instagram" → sem
  Instagram ou parado = mais oportunidade
- **Mas tem que ser negócio real/ativo:** ter algumas avaliações mostra que tem cliente
  (tem dinheiro). Um lugar com 0 avaliação e 0 presença pode ser fantasma — descartar.

### 4. Priorizar e cortar
Ordenar por oportunidade (sem site primeiro, depois digital fraco), mantendo só negócios
ativos. Cortar na **quantidade pedida**.

### 5. Entregar a lista
Formato por lead (linguagem clara, direto ao ponto):
```
## Leads — [nicho] em [cidade]  ·  [N] qualificados

1. [Nome]
   Endereço · Telefone · [Google Maps: link]
   Site: NÃO TEM  ·  ⭐ 4.6 (312 avaliações)
   Por que é bom lead: negócio movimentado (312 avaliações) mas sem site nenhum.
   Como abordar: "vi que vocês têm ótima reputação mas não achei site — tá deixando
   cliente na mesa pra quem pesquisa no Google."
```
Fechar com um resumo: quantos sem site, quantos com digital fraco.
Salvar em `prospeccao/[nicho]-[cidade]-[data].md`.

## Regras
- **Eficiência:** limite os campos do Details, não faça WebFetch do site de todos —
  só do shortlist se precisar confirmar "site fraco".
- **Honestidade:** se a API retornar erro (chave sem Places API ativa, cota, etc.),
  dizer o erro claro e como resolver — não inventar leads.
- **Nunca inventar** empresa, telefone ou dado. Só o que veio da API.
- Não fazer disparo/mensagem em massa — a Logic entrega a lista qualificada; a abordagem
  é do usuário.
