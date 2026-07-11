# Enriquecimento sem chave — capacidades públicas que a Logic já tem

> Extensão do [coletor](websearch.md). Tudo aqui roda **via `WebFetch`/`WebSearch`
> nativos, sem chave, sem conta, sem custo** — endpoints públicos e leitura própria.
> É a camada que dá músculo ao `/diag`, `/leads` e `/pesquisa` sem quebrar a regra 4.
>
> **Padrão adaptador:** cada capacidade tem um *modo sem chave* (o que está aqui) e,
> quando fizer sentido, um *modo com chave* mais preciso (Places, Firecrawl, PageSpeed
> com cota alta…) que pluga na mesma capacidade — a skill não muda, só fica melhor.

## Filtro de entrada (antes de ligar qualquer capacidade)
Só usar a capacidade que **muda uma decisão**. Se o dado não altera a nota do lead, o
gargalo do diagnóstico ou a recomendação, **não colete** — vira peso e token à toa.
Sempre **anotar a fonte** e marcar inferência como `[estimativa]`/`[hipótese]`.

---

## 1. Leitura técnica do site (estilo Wappalyzer/BuiltWith, sem chave)
`WebFetch` na home (e 1–2 páginas-chave). A partir do HTML/comportamento, **inferir**:
- **Está no ar? HTTPS?** — site fora do ar ou sem cadeado já é sinal de descuido.
- **Plataforma/CMS** por assinatura: `wp-content`→WordPress · `cdn.shopify`→Shopify ·
  `wix.com`/`_wix`→Wix · `squarespace`→Squarespace · Next/React nos bundles → site custom.
- **Tem pixel/analytics?** procurar `gtag`/`google-analytics`, `connect.facebook.net`
  (Meta Pixel), `hotjar`, `clarity`. **Sem pixel = não mede nada = oportunidade** (não dá
  pra fazer remarketing).
- **Parece mobile/responsivo?** meta viewport presente? layout adaptativo?
- **Clareza da oferta e CTA** — dá pra entender o que vende e como comprar em 5 segundos?
Usar a tabela de assinaturas em `_nucleo/integracoes/fingerprints-tecnologia.md` (destilada
do Wappalyzer, open source) pra sair de "acho que é WordPress" pra detecção real.
**Alimenta:** o filtro "digital fraco" do `/leads` (fortalece a nota A+→D — ver
`base-conhecimento/01-diagnostico-dados/nota-do-lead-a-plus-a-d.md`) e a camada 2 do
`/diag`. **Limite honesto:** o `WebFetch` entrega conteúdo processado, nem sempre o HTML
cru — inferência de stack é `[estimativa]`. Modo com chave (BuiltWith/Wappalyzer) crava.

## 2. robots.txt + sitemap.xml (estrutura e SEO, sem chave)
`WebFetch` em `https://<dominio>/robots.txt` e `/sitemap.xml`.
- **Tamanho e estrutura do site** — quantas páginas, tem `/blog`? (sinal de esforço de SEO/
  conteúdo), tem loja/catálogo?
- Sitemap gigante e organizado = investimento em conteúdo; ausência = site parado/fraco.
**Alimenta:** diagnóstico de SEO/conteúdo no `/diag` e `/pesquisa`.

## 3. Histórico do site — Wayback Machine (sem chave)
`WebFetch` em `http://archive.org/wayback/available?url=<dominio>` (JSON com o snapshot
mais recente) e, se precisar, a timeline. Serve pra:
- **Idade/estabilidade** — há quanto tempo o negócio existe online.
- **Reposicionamento** — como o site era antes vs. agora (mudou de oferta? de público?).
**Alimenta:** `/diag` (maturidade) e `/pesquisa` (movimento estratégico do concorrente).

## 4. Reputação e voz do cliente (sem chave)
- **Reclame Aqui / Google** via `WebSearch` (já no coletor base) — nota, volume, temas.
- **Reddit** — `WebSearch` "<marca/produto> reddit" ou `WebFetch` em
  `https://www.reddit.com/search.json?q=<termo>` (JSON público) — opinião crua, sem filtro.
- **Reclamações = ouro:** revelam o gargalo real de operação/conversão em palavras do cliente.
**Alimenta:** camada 4 do coletor, e o "onde dói" do `/diag`.

## 5. Mercado e contexto (sem chave)
- **Wikipedia/Wikidata** via `WebFetch` na API pública — fatos de empresa/setor.
- **GitHub API** (`https://api.github.com/...`, keyless com limite) — pra concorrente SaaS:
  atividade, releases, roadmap público, issues.
- **Notícias/tendências** via `WebSearch` — movimentos, investimentos, sazonalidade.
**Alimenta:** `/pesquisa` (mercado, concorrência, tendência).

## 6. Local / mapa (sem chave) — já vive no /leads
- **OpenStreetMap (Overpass API)** — enumerar negócios por área/nicho sem chave (recipe
  completa na skill `leads`).
- **Nominatim** (`https://nominatim.openstreetmap.org/search?q=<lugar>&format=json`) —
  **geocoding sem chave**: transforma cidade/bairro em lat,lng pra centrar a busca por raio
  no modo grátis (é o substituto keyless do Geocoding do Google). Respeitar o uso justo
  (1 req/s, User-Agent).
Modo com chave (Google Places) é o adaptador mais preciso.

## 7. CNPJ / dados de empresa BR (sem chave) — ouro pra Brasil
Pra empresa brasileira, dá pra puxar dado **oficial e estruturado** sem chave via
**BrasilAPI** (`https://brasilapi.com.br/api/cnpj/v1/<CNPJ>`) ou ReceitaWS
(`https://receitaws.com.br/v1/cnpj/<CNPJ>`, keyless com limite):
- **Porte, situação cadastral, data de abertura** (idade real da empresa — não estimativa),
  **CNAE** (atividade), capital social, sócios, endereço.
- Serve pra **cravar o "sinal de dinheiro"** da nota do lead com dado real (porte/idade em
  vez de proxy), e pra desambiguar homônimo no `/diag`.
- Precisa do CNPJ: achar via site/rodapé/`WebSearch "<nome> <cidade> cnpj"`. Se não achar,
  seguir com os proxies (avaliações) — sem inventar.

## 8. Anúncios ativos (Meta Ad Library) — pública, NÃO pede chave
A **Meta Ad Library** (`facebook.com/ads/library/?active_status=all&ad_type=all&country=BR&q=<nome>`)
mostra **os anúncios ativos** de qualquer página, de forma **100% pública — sem
login, sem token, sem chave** pra consulta básica (a API oficial com token só é
necessária pra volume/automação pesada; a busca no site já entrega o essencial de graça).
Serve pra **dois usos**, um em cada trilho:
- **Prospecção (`/leads`):** o lead já anuncia? Isso entra na pontuação — sinal de
  dinheiro, mas também de que ele já pode ter agência (baixa a facilidade de fechar).
- **Diagnóstico (`/diag`):** antes de sugerir tráfego pago, ver **o que o cliente (ou o
  concorrente dele) já está rodando** — ângulo, oferta, volume. Vira sinal forte tipo
  "todo mundo do nicho já anuncia X e você está fora" ou "ninguém anuncia ainda, dá pra
  ser o primeiro". Muito mais forte que sugerir tráfego pago no escuro.
Sempre entregar o **link direto da busca** junto com o achado, pra o usuário conferir
com um clique.

---

## Como as skills chamam isto
Não precisa de comando novo. Quando a skill (`/diag`, `/leads`, `/pesquisa`) precisar do
sinal, ela usa a capacidade correspondente **do shortlist que importa** (não de tudo, pra
economizar). Ex.: no `/leads`, ao confirmar "site fraco" de um lead promissor, rodar a
**leitura técnica (1)** só nele. No `/diag`, a **leitura técnica + histórico + reputação**
compõem o raio-X. Sempre pelo filtro de entrada: só o que muda a decisão.

## Roadmap de adaptadores com chave (plugam nas mesmas capacidades)
Quando o usuário fornecer a chave (salva em `_config.json`, nunca commitada, nunca exibida
de volta), estes trocam o "sem chave" pelo "preciso" **sem mexer nas skills**. Regra de
ouro: **só ligar o que muda uma decisão** — chave que só adiciona dado sem melhorar a
recomendação fica de fora (custo + complexidade à toa). Menu, por ordem de impacto:

| Capacidade | Sem chave (agora) | Com chave (melhor) — link da doc |
|---|---|---|
| Local / mapa (leads) | OSM Overpass + Nominatim | **Google Places** (`developers.google.com/maps`) |
| Leitura técnica de site | WebFetch + inferência | **Wappalyzer** (projectdiscovery/wappalyzergo) · **BuiltWith** |
| Performance / SEO técnico | inferência básica | **PageSpeed / Lighthouse** (`developers.google.com/speed/docs/insights/rest`) |
| Site inteiro (crawl) | WebFetch home+chave | **Firecrawl** · **Crawl4AI** (unclecode/crawl4ai) |
| Anúncios do concorrente | busca pública na Ad Library | **Meta Ad Library API** (`facebook.com/ads/library/api`) |
| Tendências | busca | **Google Trends / PyTrends** (pypi.org/project/pytrends) |
| Notícias | WebSearch | **GNews** (`gnews.io`) · **NewsAPI** (`newsapi.org`) |
| Busca web premium | WebSearch nativo | **Tavily** (github.com/tavily-ai) · **Brave** · **Serper** |
| Dados de empresa | BrasilAPI/CNPJ (keyless) | **OpenCorporates** · **Clearbit** (global) |
| Câmbio / macro | — | **ExchangeRate-API** · **FRED** · **Alpha Vantage** |
| Próprios do cliente | — | **Search Console** · **Analytics Data API** · **YouTube Data** · **Google Ads API / TikTok Ads API** (só com o login/chave dele — dado da PRÓPRIA campanha, nunca de terceiro; diferente da Ad Library do Meta, essas APIs não têm consulta pública de anúncio alheio) |

**Componentes visuais do painel** (fix dos "componentes que erram", tudo embutível, sem
backend): **Chart.js / ECharts** (painéis de nota e funil do `/diag`), **Leaflet** (mapa
dos leads no modo Google), **Lucide** (ícones). Entram no `site/` quando forem elevar a
leitura — não por enfeite.

### O que NÃO entra (e por quê — proteger o produto)
A Logic **já é o agente** (Claude + subagentes + skills + memória em arquivos). Então
frameworks de agente/memória/infra da lista **não encaixam** e só somariam peso e setup:
LangGraph, CrewAI, AutoGen, OpenHands (a orquestração já é nativa); Mem0, Chroma, Qdrant,
Graphiti (a memória é o filesystem `clientes/` + `base-conhecimento/`); LlamaIndex,
Haystack (RAG desnecessário — o cérebro é markdown consultável); LiteLLM, DSPy, BAML,
Instructor (o modelo já é o Claude); Playwright/Puppeteer, Tesseract/PaddleOCR (o Claude
lê print/PDF nativo); Supabase, Appwrite, n8n, Meilisearch, Langfuse (backend/infra que a
Logic não roda). Se algum dia um caso real exigir um, a gente reavalia — mas o default é
**não inflar**.
