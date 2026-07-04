# Logic — Documento de Fundação

> Este é o documento-mãe do produto. Define **o que é**, **como se organiza** e
> **qual a barra de qualidade** antes de qualquer linha de código. Tudo o que for
> construído (skills, painel, método) responde a este arquivo.

---

## 1. O que é o Logic

Uma **camada de inteligência especializada** que roda dentro do Claude para
**estudar empresas a fundo, gerar estratégia e organizar a execução**.

Não é uma plataforma. Não tem servidor, nem banco de dados central. O Claude é o
motor; os arquivos são a memória; o painel só organiza. Cada usuário roda na
própria máquina, e cada instalação aprende localmente.

**O diferencial não é encontrar a empresa nem coletar dado.** É transformar dado
público em **conclusão estratégica não-óbvia** — a ponto do usuário pensar
*"caramba, eu não teria chegado nisso sozinho."* Se a primeira entrega for
genérica, o produto morre. Qualidade é o produto.

---

## 2. Princípio que manda em tudo: somos FACILITADOR

Toda decisão de produto passa por este filtro:

> **Isso adiciona atrito pro usuário? Se sim, o valor compensa o atrito?**

- Nada de exigir cartão de crédito, conta em serviço externo ou configuração
  técnica no MVP.
- A coleta de dados usa o que o Claude já tem de graça (`WebSearch` / `WebFetch`).
- Se em algum momento algo precisar de setup (ex.: Google Maps para busca por
  raio), entra como **opcional**, nunca como obrigatório pra usar o produto.

O usuário tem que agregar valor em **todos** os aspectos possíveis, sem nunca
esbarrar em complexidade que a gente poderia ter absorvido por ele.

---

## 3. Os 3 usos que o produto atende (um fluxo só)

O Logic é **um fluxo único** que para onde o usuário quiser. Os três casos de uso
são a mesma esteira, interrompida em pontos diferentes:

| # | Uso | Quem | Entrega | Para em |
|---|-----|------|---------|---------|
| 1 | **Pré-venda** | freelancer/agência abordando prospect | diagnóstico externo → chega já entendendo o negócio → **mais conversão** | `/diagnostico` etapa 1 |
| 2 | **Venda ampliada** | quem já vende serviço (site, tráfego, CRM…) | serviço **+ estratégia + plano** → cobra mais → **mais margem** | `/plano` |
| 3 | **Uso próprio** | o dono do próprio negócio | diagnóstico + plano pra escalar ou se manter | ciclo completo + `/casos` |

Consequência de design: **cada etapa entrega valor sozinha.** Ninguém é obrigado
a ir até o fim. "Pare quando quiser" é regra, não gentileza.

---

## 4. Arquitetura técnica

```
GitHub  →  usuário importa no Claude  →  /instalar  →  painel local criado
                                                              │
        toda a inteligência acontece dentro do Claude  ───────┘
                    (o painel apenas organiza)
```

- **Sem servidor. Sem banco central. Sem infra pesada.**
- **Coleta (MVP):** `WebSearch` + `WebFetch` nativos do Claude. Grátis, zero setup.
- **Coleta (fase 2, opcional):** adaptador Google Places/Geocoding atrás de API
  key opcional — só pra busca por raio / mapa / concorrente local.
- **Camada de coletor abstrata desde já:** as skills chamam "o coletor", não o
  Google direto. Trocar a fonte no futuro não quebra nada.

### Limite honesto da coleta (documentado, não escondido)
Instagram/Facebook bloqueiam scraping — o `WebFetch` nem sempre lê o feed
completo. Na etapa 1 (pública) a análise de rede social é "o que dá pra ver de
fora". Isso já basta pra abordagem comercial. O detalhe fino vem quando o próprio
dono manda print do Insights (etapa 3).

---

## 5. Estrutura de pastas

```
Logic-Produto/
├── ARQUITETURA.md         → este documento (a fundação)
├── README.md              → pitch + instalação
├── CLAUDE.md              → regras de comportamento do sistema Logic
├── .claude/skills/
│   ├── novo-cliente/      → cria o contexto (form mínimo)
│   ├── diagnostico/       → as 3 etapas independentes
│   ├── pesquisa/          → concorrentes / mercado
│   ├── plano/             → horizonte + execução
│   └── casos/             → resultados pós-execução
├── _nucleo/               → O CÉREBRO (verdade do PRODUTO — você evolui)
│   ├── metodo/            → frameworks de análise (o diferencial)
│   ├── base-conhecimento/ → notas atômicas (reaproveitado do SYS Scan)
│   ├── rubricas/          → as barras de qualidade / anti-genérico
│   ├── coletor/           → regras de coleta (hoje WebSearch; amanhã Google)
│   └── templates/         → formato dos entregáveis
├── clientes/              → A MEMÓRIA (verdade de CADA negócio — o user evolui)
│   ├── _template/
│   └── <empresa>/
│       ├── cliente.md
│       ├── diagnostico.md
│       ├── pesquisa.md
│       ├── plano.md
│       ├── casos.md
│       └── fontes/        → prints, PDFs, exports que o user subir
└── painel/
    └── index.html         → dashboard regenerado a cada mudança
```

**Separação-chave:** `_nucleo` = verdade do produto (o Logic evolui). `clientes` =
verdade de cada negócio (o usuário evolui). São as suas "duas evoluções", separadas
fisicamente — atualizar o produto nunca toca dados do cliente, e vice-versa.

---

## 6. O fluxo de comandos

### `/novo_cliente` — cria o contexto
Form mínimo (facilitador): **Nome da empresa** (obrigatório) · Cidade · Estado ·
Site · Instagram · Nicho · CNPJ (opcional, só pra desempatar homônimos).
Preenche só o que tiver. Cria a pasta `clientes/<empresa>/` com `cliente.md`.

### `/diagnostico` — 3 etapas independentes
- **Etapa 1 — Pesquisa Pública** (a camada NOVA, outside-in). O Logic coleta tudo
  que der publicamente e entrega um raio-X inicial. **Já gera valor sozinha** →
  serve o Uso 1 (pré-venda).
- **Etapa 2 — Perguntas Inteligentes.** Só o que ainda falta, não questionário
  gigante. Aprofunda com dado de dentro.
- **Etapa 3 — Arquivos.** Pede só o necessário (Insights, Ads, CRM, planilhas).
  Diagnóstico completo.

Cada etapa é opcional e para onde o usuário quiser.

### `/pesquisa` — concorrentes e mercado
Empresa local: concorrentes na região, presença/posicionamento local.
Empresa digital: concorrentes nacionais/internacionais, referências, tendências.
Foco em **qualidade, não quantidade**. (Busca por raio geográfico = fase 2, Google.)

### `/plano` — vira execução
Usuário escolhe horizonte (10/30/60/90/180 dias, 12 meses). Entrega plano
estratégico + tático + operacional, cronograma, prioridades, métricas,
entregáveis. Tudo ancorado no diagnóstico. → serve o Uso 2.

### `/casos` — registra resultado
Pós-execução: resultados, ROI, métricas, aprendizados, erros, melhorias.
Personaliza o Logic pra aquele negócio ao longo do tempo. → serve o Uso 3.

---

## 7. O método — HÍBRIDO (reaproveitar + melhorar significativamente)

O cérebro do SYS Scan já é maduro e foi **reaproveitado** (`_nucleo/`): 4 Fits,
funil matemático, 4 pilares, LTV/CAC, níveis de consciência, painel /10, formato
de saída. Nada disso se joga fora.

**O que muda / melhora:**

1. **Camada nova "outside-in" (etapa 1).** O SYS Scan atual assume dados de dentro
   ("sem número vira achismo"). O Logic precisa tirar conclusão estratégica só com
   dado público. É uma lente nova: como ler oferta, posicionamento, presença e
   gargalos prováveis **de fora**, marcando o que é evidência vs. hipótese.
2. **Troca de sujeito.** Hoje o método fala "cliente da LOGIC" (o seu negócio). No
   produto, fala "qualquer empresa que o usuário está estudando". Adaptação de
   linguagem em todo o cérebro.
3. **Melhoria de profundidade.** Reforçar cada framework com exemplos, gatilhos de
   conclusão não-óbvia e conexão explícita entre etapas (público → perguntas →
   arquivos afunila pro método completo).
4. **Rigor de coleta embutido** (ver seção 8): a skill força busca em camadas, não
   uma busca só.

**Como as etapas se encaixam no método:**
Etapa 1 (público) → lente outside-in nova. Etapas 2 e 3 (perguntas + arquivos) →
alimentam o SYS Scan completo já existente (funil, 4 Fits, LTV/CAC). O usuário
sobe as etapas e vai entrando cada vez mais fundo no método testado.

---

## 8. Rubrica de qualidade — o anti-genérico (a peça mais importante)

Toda entrega passa por esta barra **antes** de ser mostrada. Se falhar, reescreve.

1. **Evidência obrigatória.** Toda afirmação cita a fonte ("3 posts em 60 dias no
   Instagram → frequência morta"). Sem fonte, é achismo — corta.
2. **Específico > genérico.** Teste: "isso serviria pra qualquer empresa do nicho?"
   Se sim, não presta. Tem que ser desta empresa.
3. **Número sempre que possível.** Taxa, frequência, contagem — mede, não chuta.
4. **Evidência vs. hipótese marcadas.** Na etapa 1 (pública) muita coisa é
   inferência. Marcar honestamente o que é fato observado e o que é suposição a
   confirmar. Isso constrói confiança e serve de gancho pra etapa 2.
5. **Coleta em camadas.** Nunca uma busca só: site + rede social + avaliações +
   reclamações + concorrentes. Ler as fontes (`WebFetch`), não só o snippet.
6. **Conclusão não-óbvia.** A entrega tem que ter pelo menos um insight que o dono
   não veria sozinho. É o "caramba". Sem isso, a entrega não sai.

---

## 9. Painel

`painel/index.html` — arquivo **autossuficiente** (dados embutidos) que o Claude
regenera a cada mudança. Abre com duplo-clique, sem `localhost`, sem instalação.
Lista: clientes, histórico, diagnósticos, pesquisas, planos, casos, progresso.

**Vídeo Loom** (3–5 min: instalar, usar, fluxo, comandos): embed via `<iframe>` no
`index.html`. Zero custo, reduz curva de aprendizado. Recomendado.

---

## 10. Roadmap de construção (qualidade antes de quantidade)

1. **Fundação** ✅ (este documento + estrutura + cérebro reaproveitado)
2. **Adaptar o cérebro** — troca de sujeito + melhorias (seção 7)
3. **Construir `/diagnostico` etapa 1 até o fim, com qualidade máxima** — a lente
   outside-in + rubrica. **Testar em 3 empresas reais.** Refinar até dar o "caramba".
4. Replicar o padrão: etapas 2/3, depois `/pesquisa`, `/plano`, `/casos`.
5. `/novo_cliente` + painel + `/instalar`.
6. README + vídeo Loom.

> Regra: não adicionar função nova enquanto a entrega anterior não passar a rubrica
> da seção 8. O maior risco é qualidade, não quantidade de comandos.
