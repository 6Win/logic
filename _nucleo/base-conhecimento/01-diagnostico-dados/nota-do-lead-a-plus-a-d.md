---
dominio: 01-diagnostico-dados
pilar: aquisicao
fonte: DADOS (V2 — sistema de qualificação de lead) + método Logic
---
# A nota do lead (A+ → D) — não basta achar, tem que estimar a qualidade

Achar empresa é fácil. O que separa o Logic do disparo em massa (Kaptar) é **estimar
quão bom cada lead é** — e **dizer o porquê**. Cada lead ganha uma nota de **A+ a D** a
partir de sinais **públicos** (o que dá pra ver sem pedir nada a ninguém). A nota não é
enfeite: ela **prioriza o tempo** do usuário (ver [[valor-do-tempo-e-roi-da-hora]]) — ele
ataca os A+ primeiro e ignora os D.

## Os fatores (só o que o dado público sustenta)
Pesar **apenas** o que a fonte fornece. Nunca pontuar por faturamento, nº de funcionários
ou idade da empresa se não veio no dado — isso é chute, e chute quebra a regra da
transparência. Fatores reais:

1. **Fit com o ICP** — bate com o cliente-alvo do usuário (nicho, porte aparente, região)?
   É o filtro que mais pesa: lead fora do ICP é D por definição.
2. **Sinal de dinheiro / negócio ativo** — tem cliente e caixa? Proxy: nº de avaliações no
   Maps (muitas avaliações = movimento), tempo de casa aparente, catálogo/preço visível.
   0 avaliação + 0 presença = pode ser fantasma → derruba a nota.
3. **Oportunidade digital** (o que dá pra vender) — quanto mais furo, **melhor** o lead pra
   quem vende marketing: sem site > site parado/fraco > sem Instagram / Instagram
   abandonado > sem Google Business > sem WhatsApp/contato claro.
4. **Urgência / dor visível** — sinais de que a dor dói agora: avaliação baixa (<4,0) com
   reclamações recentes, concorrente do lado anunciando forte, sazonalidade batendo.
5. **Facilidade de contato** — tem telefone/WhatsApp/DM aberto e decisor acessível? Um
   lead ótimo mas inalcançável vale menos na prática. **Piso, não só peso:** se depois de
   tentar (Maps, OSM, Facebook, site) o lead não tem NENHUM canal de contato — nem
   telefone, nem Instagram, nem site com formulário — ele **não entra na lista**, mesmo que
   os outros 4 fatores pontuem alto. Sem contato não tem como abordar; não é um lead "fraco
   em contato", é um lead que não existe pra fins práticos.
6. **Concorrência pela atenção dele** — ele já é bombardeado por agência? (muitos já
   mexeram no digital dele = mais difícil entrar). Menos disputado = nota melhor.

## Fontes que alimentam a pontuação (nenhuma exige chave paga)
- **Google Maps** — nº de avaliações, nota, categoria, telefone (modo grátis via OSM/busca,
  ou preciso via Places com chave — ver `enriquecimento-sem-chave.md`).
- **CNPJ (BrasilAPI/ReceitaWS)** — dado **público e oficial do governo**, sem chave, e
  rende mais do que só idade: `data_inicio_atividade` (idade real), `situacao_cadastral`,
  `porte` (MEI/ME/EPP), **`capital_social`** (proxy de dinheiro mais preciso que contar
  avaliação do Maps), **`cnae_fiscal_descricao`** (confirma se o nicho bate de verdade,
  não só pelo nome do negócio) e, quando vier preenchido, **telefone/email cadastrado** —
  isso pode virar o único canal de contato de um lead que não tem site nem Instagram, então
  sempre vale a pena puxar mesmo que o Maps/OSM já tenha telefone. Substitui o "achismo" de
  idade/porte por fato. Crava o fator "sinal de dinheiro" e ajuda a fechar "facilidade de
  contato" quando outras fontes falham.
- **Meta Ad Library** — **pública, sem precisar de chave/token** pra consulta básica: entra
  no site, pesquisa o nome da empresa, aparece se ela tem campanha ativa e qual o anúncio.
  Alimenta dois fatores: **urgência** (concorrente anunciando forte = mercado aquecido) e,
  no lead em si, se **ele já anuncia** (nesse caso é sinal de dinheiro, mas também de que já
  investe em mídia — pode já ter agência, o que baixa a facilidade de fechar).
- **Leitura técnica do site** (sem chave) — tem pixel? Sem pixel = nunca fez remarketing =
  oportunidade digital alta.

## A pontuação (0 a 100) — de onde vem a letra
A letra sozinha parece chute. Por isso ela nasce de uma **pontuação de 0 a 100**, somando
os 6 fatores acima com peso — assim a nota é rastreável (dá pra apontar exatamente de onde
veio cada ponto), não um "achismo com nome bonito":

| Fator | Peso máx. | O que rende os pontos |
|---|---|---|
| Fit com o ICP | 25 | bate nicho + porte + região do que o usuário vende → 25; parcial → 10-15; fora → 0 |
| Sinal de dinheiro (Maps/CNPJ) | 25 | muitas avaliações + CNPJ ativo há anos → 20-25; poucas/recente → 8-15; fantasma → 0 |
| Oportunidade digital | 30 | sem site → 30; site fraco/sem pixel → 15-22; Instagram parado → +5-8; tudo resolvido → 0-5 |
| Facilidade de contato | 10 | telefone/WhatsApp claro e decisor acessível → 10; difícil → 0-5 |
| Urgência | 10 | nota baixa/reclamação recente ou concorrente anunciando forte → 6-10; nada disso → 0-3 |
| **Total** | **100** | soma dos 5 acima (o 6º fator, concorrência pela atenção, ajusta ±5 no resultado final) |

**Faixas (a pontuação decide a letra, não o contrário):**
| Pontuação | Nota | Leitura |
|---|---|---|
| 90–100 | **A+** | raro de propósito — só o "topzão": fit perfeito, dinheiro confirmado, oportunidade máxima e contato fácil ao mesmo tempo. Ver regra abaixo. |
| 72–89 | **A** | ótimo lead, com 1 ponto abaixo do ideal — a maioria dos "muito bons" para aqui |
| 50–71 | **B** | dá venda, exige mais trabalho de convencimento |
| 30–49 | **C** | só se sobrar tempo |
| 0–29 | **D** | descarta |

**A+ é exceção, não "A com nota melhor":** 90+ de soma não basta sozinho — exige também
que os **4 fatores centrais** (fit, dinheiro, oportunidade, contato) estejam **cada um
acima de 70% do seu peso máximo**. Um lead pode somar 90 com oportunidade no talo (30/30)
e fit mediano (18/25 = 72%, passa) — mas se o fit fosse 15/25 (60%), vira **A**, não A+,
porque fit fraco é um risco real: nada garante que a qualificação vire venda se o fit não
for pleno. **Urgência fica de fora dessa exigência de piso** — ela é bônus, não requisito:
um negócio saudável (a melhor cor de lead) naturalmente tem baixa urgência (poucas
reclamações, nota boa), então exigir urgência alta pra A+ penalizaria exatamente os leads
mais sólidos. A+ é reservado pro lead forte em **fit + dinheiro + oportunidade + contato**
ao mesmo tempo — é isso que o torna "pegar dinheiro do chão" de verdade, não só "parece bom
no papel". Na prática, a maioria das buscas vai ter 0 ou 1 lead A+ — é esperado, não é bug.

Quando faltar dado pra pontuar um fator (ex.: não achou CNPJ), **não zera** — usa o proxy
disponível (avaliações) e marca `[estimativa]`; só zera quando o fator genuinamente não
tem sinal nenhum (ex.: fit fora do ICP é 0 de verdade, não estimativa).

## Do score pro dinheiro — projetar a conversão da lista
A nota qualifica o lead; ela **não garante venda**. Pra ajudar o usuário a decidir quanto
tempo investir em prospecção (não só em quem abordar), aplique — **numa leva realista de
30-50 leads**, nunca numa lista pequena de exemplo (n baixo não sustenta taxa) — os
benchmarks de conversão de prospecção qualificada (fonte: DADOS/MazyOS):
`leads fortes (A+/A) → ~30-40% respondem → ~70% dessas viram conversa → ~20-30% das
conversas fecham venda`. Cruzar com o ticket médio do usuário dá o **faturamento esperado
daquela leva** — é isso que transforma "aqui está sua lista" em "aqui está o que essa lista
vale". Sempre rotular como benchmark/estimativa, nunca como garantia.

## Como abordar (ângulo, não script pronto)
A Logic não entrega mensagem de spam pronta (rubrica de comunicação), mas **pode e deve**
sugerir o **ângulo de abertura** por perfil de lead — a pergunta ou observação que abre a
conversa sem parecer venda:
- **Lead sem presença digital nenhuma** (o A+/A típico): abrir reconhecendo o que já
  funciona (avaliações, tempo de casa) e perguntar se ele sabe quanto cliente perde pra
  quem aparece no Google — gera curiosidade, não pitch.
- **Lead com site/perfil fraco**: comentar algo específico que a coleta encontrou (ex.:
  "o site não carrega bem no celular") — prova que não é mensagem em massa.
- **Lead que já anuncia**: perguntar como está o retorno do anúncio atual antes de
  oferecer qualquer coisa — abre espaço pra ele mesmo apontar a dor.

**Mostrar a pontuação, não só a letra:** o lead carrega os dois — "87/100 — A+" — pra o
usuário poder auditar o cálculo, não só confiar cegamente na letra.

## Sempre explicar a nota (1 linha)
A nota sem o porquê é opinião. Toda nota carrega **a razão em uma frase**, ligada a um
sinal concreto:
> **A+** — 312 avaliações (tem caixa) + sem site + Instagram parado há 8 meses: invisível
> pra quem pesquisa no Google, vive de indicação. Furo grande, negócio real. Ataca esse.

> **C** — só 3 avaliações e nenhum sinal de movimento: pode não ter caixa pra pagar. Fit ok,
> mas risco de perder tempo.

## Aplicação LOGIC (no /leads)
Depois de filtrar por oportunidade, **atribuir A+→D a cada lead** e **ordenar pela nota**.
A lista entrega no topo os A+/A (onde está o dinheiro rápido) e marca os C/D pra ele saber
que são o fundo da fila. Fechar com a contagem por nota. Rotular como `[estimativa]` quando
a nota depender de proxy (ex.: "caixa" inferido de avaliações), nunca vender proxy como
fato. Barato: a nota sai do dado que já foi coletado — não exige nova chamada.

Relacionado: [[valor-do-tempo-e-roi-da-hora]] · [[quatro-perguntas-fundacao]] · [[cac-cpl-e-o-custo-de-vender]] · [[pescar-no-proprio-aquario]] · [[whatsapp-sem-bloqueio]]
