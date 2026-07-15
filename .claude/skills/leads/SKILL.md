---
name: leads
description: >
  Acha clientes ideais no mercado — empresas reais por cidade/região e nicho, filtra as
  que têm oportunidade (sem site, digital fraco) e devolve uma lista priorizada de leads
  qualificados, na quantidade que o usuário pedir. Como o Kaptar, sem o disparo. Use
  quando o usuário disser "prospecção", "/leads", "acha clientes pra mim", "quero
  leads de [nicho] em [cidade]".
---

# /leads — encontrar clientes qualificados

Resolve a dor nº1 de quem vende serviço: **achar gente boa pra abordar.** Não é volume,
é qualidade do lead. Fala claro (regra nº1 da rubrica) e é eficiente com chamadas/tokens.

**É o carro-chefe da Logic** — a lacuna que o Mazy não cobre (ele é todo inbound; a
Logic faz o outbound qualificado). O que bate o Kaptar: o Kaptar dispara em massa num
raio, sem filtro. A Logic **filtra por oportunidade real** (sem site, sem Instagram /
Instagram parado, digital fraco) e entrega **gancho de abordagem** por lead.

**Coleta pesada → subagente `coletor-prospeccao`.** Varrer vários bairros, enriquecer
dezenas de lugares e conferir site/Instagram um a um é trabalho pesado. Dispare o
subagente **`coletor-prospeccao`** (passando nicho + lugar + filtro + quantidade) — ele
volta só com a lista limpa e qualificada, mantendo o contexto principal leve e
economizando token. Você (agente principal) recebe a lista e escreve, pra cada lead, um
**mini-diagnóstico** que vai no campo `gancho` (é o que o painel mostra no detalhe do
lead) com duas partes curtas:
1. **A leitura do negócio** (1-2 linhas): o que é, como parece funcionar, o furo digital
   pra explorar — o mesmo raciocínio de um `/diag`, só que no tamanho de um lead, não o
   raio-X completo.
2. **Uma sugestão de abordagem** (1-2 linhas): um ângulo/gancho concreto de abertura pra
   esse lead específico, citando o furo digital dele (ex.: *"Vi que vocês têm ótima nota
   no Google mas não achei Instagram — hoje é onde a maioria pesquisa negócio local
   antes de decidir."*). É uma **sugestão de partida**, não um script engessado pra
   copiar e colar sem pensar — mas tem que ser específico daquele lead, nunca uma frase
   genérica que serviria pra qualquer negócio (isso sim é cara de spam). O cara lê,
   entende o ângulo e usa do jeito dele.

## O gancho, mais fundo (metodologia — não é frase pronta)

Prospecção é o canal de **outreach frio** do crescimento — um dos 4 jeitos de ganhar
cliente ([[tres-alavancas-e-core-four]]) e a lacuna que o Mazy (inbound) não cobre. Como
o lead é **frio**, ele quase sempre está no **nível 1-2 de consciência**
([[niveis-de-consciencia]]): não sabe que tem o problema, ou sente a dor mas não liga com
solução. Isso muda TUDO na abordagem:

- **O gancho move UM degrau, não vende.** Nível 1-2 foge de pitch. O trabalho do gancho é
  levar de *"não sei que tenho problema"* pra *"peraí, isso me afeta"* — por isso
  curiosidade > oferta. Ex.: NÃO *"faço site por R$X"* (isso é nível 5, ele nem chegou
  lá), e SIM *"muita gente pesquisa 'X aqui perto' antes de decidir — e vocês não
  aparecem"* (acorda pro problema).
- **Ancora num achado ESPECÍFICO daquele lead** (o furo que a coleta pegou) — é o que
  prova que não é disparo em massa e dá autoridade na abertura.
- **Aponta o futuro, não o entregável** ([[vender-o-futuro-nao-o-presente]]): o gancho
  mostra o que ele PERDE/GANHA (cliente que some pra quem aparece, dinheiro na mesa), não
  "eu faço site/gestão de tráfego".

> **A nota é calculada, não chutada** (igual a régua do diagnóstico): sai da pontuação
> **0-100** de `[[nota-do-lead-a-plus-a-d]]` (6 fatores pesados → letra A+/D), e o lead
> carrega os dois — *"87/100 — A+"* — pra o usuário auditar. E a **mesma** lente de níveis
> de consciência que guia o conteúdo/anúncio no /plano guia aqui a abordagem fria:
> diagnóstico, plano e leads falam a mesma língua.

## O que perguntar (curto)
Prospecção de **empresas locais** (loja, clínica, restaurante, barbearia…). Perguntar:
- **Nicho · cidade/região · raio** (opcional) **· quantos** (padrão 10).
- **O que procurar** (o filtro que qualifica a lista): sem site · site fraco/parado ·
  **sem Instagram / Instagram parado** · avaliação baixa · sem contato claro. Pode
  combinar. Padrão: "sem site / digital fraco".
- **Que serviço o usuário vende** — calibra o "como abordar".

_(Foco em negócio local. O filtro de Instagram — sem perfil ou perfil parado — é
first-class: é sinal forte de oportunidade pra quem vende marketing, e é exatamente o
que o Kaptar não deixa filtrar.)_

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
   É isso que confirma o filtro "sem site" (o OSM sozinho não garante). **Sempre olhar a
   ficha do Google Maps também** ("<nome> <cidade> maps") — mesmo sem chave, a listagem
   pública quase sempre mostra telefone. Achou lá? Isso **é** o `telefone` do lead, mesmo
   que não tenha site nem Instagram — não descarta achando que "só veio do Maps".
5. **Varrer sub-áreas e acumular** sem repetir até a quantidade pedida.
Avisar de leve: grátis é melhor-esforço (OSM não cobre tudo no BR); a chave do Google
entrega a lista completa de uma vez.

## Depois (nos dois caminhos)

### Filtrar por OPORTUNIDADE (o coração)
**Aplicar o filtro que o usuário pediu** (ex.: só quem NÃO tem site). Se ele descrever
um **ICP em linguagem natural**, traduza pros filtros que os DADOS suportam — site
(tem/não), nota, nº de avaliações, nicho, região, telefone — e **avise o que NÃO dá pra
filtrar** (idade da empresa, faturamento, nº de funcionários, tipo de público: o Google
não tem esse dado). Nunca finja que filtrou por um critério que a fonte não fornece. E **cruzar os dois
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

**Regra dura, sem exceção — contato mínimo:** todo lead entregue precisa ter **pelo
menos 1** valor real em `telefone`, `site` ou `instagram`. Na prática, pra negócio
local, o telefone é o mais fácil de achar — **e o Google Maps é a fonte mais confiável
dele** (a ficha pública mostra o número mesmo sem site nem Instagram, ver seção acima).
Então antes de descartar por "não tem contato", **checa o Maps** — se tem telefone lá,
usa ele. Sem WhatsApp (telefone), sem site e sem Instagram mesmo depois de checar o
Maps = **descarta sempre**, não interessa quão boa seja a oportunidade (rating alto,
nicho certo etc.) — lead que não dá pra abordar não é lead, é lixo, e o usuário gasta
token à toa revisando ele. O painel (`/api/sync`) já rejeita qualquer lead assim, então
nem adianta mandar — mas o certo é nem deixar chegar nessa lista: descarta na hora que
confirmar que não tem nenhum dos três, não espera o servidor recusar.

**O valor tem que ser o contato de verdade, não um status.** "Instagram ativo" é uma
observação pra você decidir a nota do lead — não é o que vai no campo `instagram`. O
que vai no campo é o `@handle` ou a URL do perfil que você achou na busca. Mesma coisa
pra site (a URL) e telefone (o número). Se você confirmou "tem Instagram" mas não anotou
o handle/link em algum momento da coleta, **isso não conta como contato capturado** —
volte e pegue o valor, ou trate como "não achei" mesmo. Nunca escreva "ativo", "tem",
"sim" ou "parado" sozinho no lugar do valor: isso passa despercebido pra você (parece um
lead bom) mas chega vazio no `/api/sync` e todo o lote é rejeitado — foi exatamente esse
o bug que gerou a reclamação de "lead com Instagram ativo sendo recusado".

### Priorizar e cortar
Ordenar por oportunidade (sem site primeiro, depois digital fraco), mantendo só negócios
ativos. Cortar na **quantidade pedida**.

### Entregar a lista
Formato por lead (linguagem clara, direto ao ponto):
```
## Leads — [nicho] em [cidade]  ·  [N] qualificados

1. [Nome]
   Endereço · Telefone · [Google Maps: link]
   Site: NÃO TEM  ·  Instagram: @nome_do_perfil (parado, últ. post há ~8 meses)  ·  ⭐ 4.6 (312 avaliações)
   Leitura do negócio: negócio movimentado (312 avaliações = tem cliente e caixa), mas
   sem site e com Instagram abandonado — invisível pra quem pesquisa "estética no bairro"
   no Google. Vive de quem já conhece; some pra quem procura. É aí que dá pra entrar.
   Gancho de abordagem: "Vi que vocês têm nota 4.6 no Google mas o Instagram parou há uns
   8 meses — muita gente pesquisa 'estética aqui perto' antes de marcar horário."
```
A leitura é curta (2–3 linhas): o que é, como parece funcionar, e o furo digital — mais
o gancho de abordagem (1-2 linhas, específico daquele lead, não genérico). Nada de
raio-X (isso é o `/diag`); esse par leitura+gancho é o que vai no campo `gancho` do
sync (ver "Qualificar" acima).
Fechar com um resumo: quantos sem site, quantos sem/parado no Instagram, quantos com
digital fraco. Se o usuário usa o Mazy, terminar com a ponte: *"esses leads sem
Instagram são material pronto pro `/carrossel` e `/seo` do teu Mazy."*
Salvar em `leads/[nicho]-[cidade]-[data].md`.

**Enxuto (não é diagnóstico):** o `/leads` é pra **contato rápido** — por lead: nome,
contato, tem site?, nota, e **UMA linha** sobre o negócio (o suficiente pra chegar já
entendendo). Nada de raio-X. Isso também economiza token.
**Eficiência:** só faça `Place Details` do shortlist que vai pra lista (não de todos), não
repita busca, não leia o site de cada um — o mínimo pra qualificar. O `/painel` monta a
aba Leads a partir dessa lista.

## Enviar pro painel online (manual — só se o usuário pedir)
A Logic é local por padrão: **não** envia sozinha pro painel online no fim do `/leads`,
mesmo com `/conectar` já feito. Só monta e manda o sync se o usuário pedir na hora,
com algo como "manda pro painel", "sincroniza isso", "sobe os leads pro painel". Sem
esse pedido, entrega só local (`clientes/`, `/painel` local) e não menciona sync.

Quando o usuário pedir: se existir `scripts/sync.config.json`, montar o JSON `tipo: "leads"` seguindo
`_nucleo/integracoes/painel-online.md` — `telefone`/`site`/`instagram` como valor de
verdade (não booleano; viram link clicável no painel — `telefone` vira WhatsApp),
`linkMaps` se tiver o link do Maps (não conta como contato, é só o "achar o lugar"),
nota `A_PLUS|A|B|C|D` + os 5 critérios 0-10 (estimados a partir do que já foi
levantado) — e rodar `node scripts/sync.mjs <arquivo>`. Sem esse arquivo, pular — a
Logic continua 100% local.

**Antes de rodar o sync, confira o JSON que você mesmo montou** (não confie que "já
qualifiquei, então tá certo"): pra cada lead, `telefone` ou `site` ou `instagram`
precisa ter um valor de verdade (string com número/URL/handle) — não vazio, não
`null`, e não uma palavra de status tipo "ativo"/"parado". Achou um lead assim no seu
próprio JSON? Não é o `/api/sync` que vai filtrar pra você — corrija o valor (volte e
pegue o handle/link certo) ou tire o lead da lista antes de mandar. Se o sync voltar
com erro 400 de "lead sem contato" mesmo depois dessa conferência, pare, mostre o erro
pro usuário com o(s) lead(s) problemático(s) e pergunte — não fique tentando formato às
cegas numa API de produção.

## Regras
- **Eficiência:** limite os campos do Details, não faça WebFetch do site de todos —
  só do shortlist se precisar confirmar "site fraco".
- **Honestidade:** se a API retornar erro (chave sem Places API ativa, cota, etc.),
  dizer o erro claro e como resolver — não inventar leads.
- **Nunca inventar** empresa, telefone ou dado. Só o que veio da API.
- Não fazer disparo/mensagem em massa — a Logic entrega a lista qualificada; a abordagem
  é do usuário.
