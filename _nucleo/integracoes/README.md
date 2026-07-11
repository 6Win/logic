# Integrações — as capacidades externas da Logic

> Onde mora tudo que conecta a Logic ao mundo: leitura de site, dados públicos, APIs.
> Princípio: **capacidade sem chave primeiro** (roda já, de graça), **adaptador com chave
> depois** (mesma capacidade, mais preciso — pluga sem mexer nas skills).

## Organização
| Arquivo / lugar | O que é |
|---|---|
| `../coletor/websearch.md` | coleta base em camadas (WebSearch/WebFetch) |
| `../coletor/enriquecimento-sem-chave.md` | capacidades públicas sem chave + roadmap de adaptadores |
| `fingerprints-tecnologia.md` | assinaturas de stack (destilado do Wappalyzer, open source) |

## Regra de entrada (inegociável)
Só entra integração que **muda uma decisão** (a nota do lead, o gargalo, a recomendação).
Dado que só enfeita = fora (custo + token + complexidade à toa). É o mesmo filtro que o
usuário definiu: *"essa integração melhora uma decisão estratégica?"*

## Copiar open source pra cá (quando fizer sentido)
Bibliotecas open source entram **destiladas**, não inteiras: copia-se o **valor que muda a
decisão** (ex.: as assinaturas do Wappalyzer, não o binário; os checks do Lighthouse, não o
runner). Sempre creditar a fonte no arquivo. Isso mantém a Logic leve e rápida — a regra de
eficiência vale aqui também.

## O que NÃO entra (proteção do produto)
A Logic **já é o agente** (Claude + subagentes + skills + memória em arquivos). Frameworks de
agente/memória/RAG/infra (LangGraph, CrewAI, Mem0, Chroma, LlamaIndex, Supabase-as-brain,
n8n, LiteLLM, Playwright, Tesseract…) **não entram como dependência** — a orquestração, a
memória e a leitura de mídia já são nativas. Detalhe e porquês em `enriquecimento-sem-chave.md`.
