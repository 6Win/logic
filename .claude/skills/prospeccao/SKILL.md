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

## Primeiro: local ou digital? (muda as perguntas)
Perguntar o tipo de alvo antes de tudo:
- **Empresa local** (loja, clínica, restaurante, barbearia…) → fluxo por região.
  Perguntar: **nicho · cidade/região · raio** (opcional) **· quantos**.
- **Negócio digital / perfil de rede social** (prestador online, criador, infoproduto…) →
  fluxo social. Perguntar: **nicho/segmento · plataforma** (Instagram, TikTok…) **·
  localização** (opcional, pode ser nacional) **· faixa de seguidores** (opcional) **· quantos**.

Em qualquer caso, perguntar também:
- **O que procurar** (o filtro de oportunidade — é o que qualifica a lista): sem site ·
  sem rede social · site/perfil fraco ou parado · avaliação baixa · sem forma clara de
  contato. Pode combinar ("sem site E sem Instagram"). Se não disser, usar "sem site /
  digital fraco" como padrão.
- **Que serviço o usuário vende** — calibra o "como abordar".

Padrão de quantidade: 10.

## Detecta o modo sozinho (com ou sem chave)
Ler `google_key` em `_config.json`. **Os dois modos funcionam** — nunca obrigar a ter chave.
- **Tem chave → Modo Google:** dados reais e estruturados, controle de **raio**, e o mapa
  aparece no painel. Mais preciso.
- **Não tem chave → Modo Busca:** usa `WebSearch`/`WebFetch` (nosso buscador). Entrega lista
  de verdade — só é menos estruturado. É o padrão grátis, **não** um plano B fraco.

## Modo Google (com chave)
### 1. Centro + raio (Geocoding)
`https://maps.googleapis.com/maps/api/geocode/json?address=<CIDADE/REGIÃO>&key=<KEY>` →
pegar lat,lng. **Raio automático:** se o usuário não disser, escolher pelo alvo (bairro
~2 km · cidade ~4 km · região ampla ~8 km); se ele pedir ("num raio de 5 km"), usar o dele.

### 2. Buscar por raio — Nearby Search
`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=<LAT>,<LNG>&radius=<METROS>&keyword=<NICHO>&language=pt-BR&key=<KEY>`
→ extrair nome, place_id, endereço, rating, nº de avaliações.
**Limite e volume (AVISAR o usuário):** cada área devolve **até ~60** (3 páginas de 20 via
`next_page_token`). Pra números maiores (ex.: 100 numa cidade), **varrer vários bairros/
pontos e juntar removendo repetidos**. Deixar claro pro usuário: teto ~60 por área, e
volume alto consome mais da cota da chave dele — priorizar **qualidade** do lead, não só bater o número.

### 3. Enriquecer — Place Details (só o shortlist, pra economizar)
`.../place/details/json?place_id=<PID>&fields=name,website,formatted_phone_number,rating,user_ratings_total,url&language=pt-BR&key=<KEY>`
→ tem website? telefone, link do Maps.

## Modo Busca (sem chave) — como tirar o MÁXIMO
Fonte principal grátis e estruturada: **OpenStreetMap (Overpass API)** — sem chave.

1. **Enumerar via OSM (Overpass):** `WebFetch` em
   `https://overpass-api.de/api/interpreter?data=<QUERY>`, com uma query do nicho na área
   (mapear o nicho pra tag OSM: carro→`shop=car`, barbearia→`shop=hairdresser`,
   restaurante→`amenity=restaurant`, academia→`leisure=fitness_centre`…). Ex. de query:
   `[out:json][timeout:25];area[name="Rio de Janeiro"]->.a;node["shop"="car"](area.a);out center tags 100;`
   Prompt do WebFetch: *"liste cada negócio com nome, endereço, telefone e website (se houver tag)."*
   ⚠️ **Cobertura BR é irregular** e a tag `website` costuma faltar → **tag ausente ≠ não tem
   site**. Por isso o passo 4 (conferir) é obrigatório.
2. **Caçar onde o "sem site" vive** (complemento): OLX, Facebook, Instagram, Maps —
   "<nicho> <bairro> facebook/olx/instagram". Quem só aparece lá e não tem domínio = lead.
3. **Desambiguar o lugar** (estado + zona; excluir homônimo) e **cortar portais**
   (`blocked_domains`: vivareal, webmotors, olx… quando quiser os negócios, não os agregadores).
4. **Conferir cada candidato:** "<nome> <cidade> site" → tem domínio próprio? tem Instagram?
   É isso que confirma o filtro "sem site" (o OSM sozinho não garante).
5. **Varrer sub-áreas e acumular** sem repetir até a quantidade pedida.
Avisar de leve: grátis é melhor-esforço (OSM não cobre tudo no BR); a chave do Google
entrega a lista completa de uma vez.

## Modo Digital (redes sociais) — EXPERIMENTAL
> ⚠️ **Avisar o usuário antes de rodar:** o caminho digital tem **eficiência baixa** e é
> experimental. Motivo: o Instagram/TikTok **bloqueiam raspagem** e não têm busca grátis;
> o Google só indexa marketplaces e contas grandes — então os pequenos "sem site" que
> interessam **quase não aparecem**. Entrega poucos leads e com buracos. O forte da
> prospecção é o **modo local** (ainda mais com a chave do Google). Se o usuário topar o
> limite, seguir; senão, sugerir o local.

Redes bloqueiam raspagem, então é **best-effort via o que o Google indexa**.
1. `WebSearch`: "<nicho> <plataforma> <localização>", "melhores <nicho> no <plataforma>",
   perfis por hashtag/termo → montar lista de **@perfis reais**.
2. Pra cada perfil: `WebSearch`/`WebFetch` → bio (tem **link/site**? forma de contato?),
   faixa de seguidores, se posta com frequência.
3. Oportunidade no digital: **sem link/site na bio · sem contato claro · presença
   parada · muitos seguidores mas sem conversão aparente**. Ativo e mal aproveitado = bom lead.

## Depois (nos dois caminhos)

### Filtrar por OPORTUNIDADE (o coração)
**Aplicar o filtro que o usuário pediu** (ex.: só quem NÃO tem site). E **cruzar os dois
lados pra qualificar de verdade** — as pesquisas se ajudam:
- Empresa local → checar também se tem **rede social** (WebSearch "<nome> instagram").
- Perfil digital → checar também se tem **site** (link na bio / busca do nome).
Assim o lead sai realmente qualificado, não só "apareceu na busca".

O lead ideal pra quem vende site/marketing = **negócio ativo, mas fraco no digital.**
Sinais de oportunidade (quanto mais, melhor o lead):
- **Sem website** → oportunidade forte (é exatamente o que ele pode vender)
- Rating baixo (<4,0) ou **poucas avaliações** (<20) → gestão/presença fraca
- (se valer a pena checar 1 lead) `WebSearch` "<nome> <cidade> instagram" → sem
  Instagram ou parado = mais oportunidade
- **Mas tem que ser negócio real/ativo:** ter algumas avaliações mostra que tem cliente
  (tem dinheiro). Um lugar com 0 avaliação e 0 presença pode ser fantasma — descartar.

### Priorizar e cortar
Ordenar por oportunidade (sem site primeiro, depois digital fraco), mantendo só negócios
ativos. Cortar na **quantidade pedida**.

### Entregar a lista
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
