# Logic System — Documento de Fundação

> O documento-mãe do produto. Define **o que é**, **os dois produtos**, **como se
> orquestra com o Mazy** e **a barra de qualidade**. Tudo que for construído
> (skills, agentes, método) responde a este arquivo. A Logic lê ele no início de
> toda sessão.

---

## 1. O que é a Logic

A **inteligência estratégica** que roda dentro do Claude e mostra onde está o
dinheiro num negócio. Ela estuda a empresa a fundo e entrega, em linguagem de
gente: o ponto forte pra explorar, o gargalo que trava (o ponto fraco), **quanto
dá pra faturar a mais** arrumando, e clientes qualificados pra abordar.

Não é plataforma, não tem servidor nem banco central. O Claude é o motor; os
arquivos são a memória; cada usuário roda na própria máquina e cada instalação
aprende localmente. Roda de graça, sem cartão, sem setup.

**O diferencial não é achar a empresa nem coletar dado — é virar dado em conclusão
que faz o dono pensar *"eu não teria chegado nisso sozinho"*.** Genérico = o
produto morre. Qualidade é o produto, e **comunicação é metade dela** (o conteúdo
mais fundo do mundo não vale nada se o cara não entende).

---

## 2. Os DOIS produtos

A Logic entrega valor por dois caminhos independentes — cada um vale sozinho:

### Produto 1 — Leads (prospecção qualificada)
Acha clientes reais por **nicho + lugar + filtro + quantidade**, e entrega cada
lead **pronto pra abordar**: contato, se tem site/Instagram, e o **gancho**
(entende o negócio do lead o suficiente pra chegar com diferencial). É o *outbound*
que o Mazy não tem. Bate o Kaptar porque **filtra por oportunidade** (sem site,
sem Instagram, digital fraco) em vez de disparar no escuro.

> **Não roda diagnóstico completo em cada lead** — se o cara pede 50 leads, seria
> pesado e inútil. A lista sai enxuta (contato + gancho). O diagnóstico entra
> **quando ele escolhe um lead** pra ir mais fundo (antes de uma reunião, ou pra
> entregar como isca).

### Produto 2 — Diagnóstico → Estratégia → Briefing
Estuda uma empresa a fundo, acha o gargalo, projeta o faturamento (previsibilidade)
e **decide o rumo**. Se o usuário quiser, vira plano e **briefing pronto pra
execução**. O diagnóstico roda em **qualquer empresa**: a do próprio usuário **ou**
um lead que ele está prospectando.

---

## 3. Princípio que manda em tudo: FACILITADOR

> **Isso adiciona atrito pro usuário? Se sim, o valor compensa?**

- Nada de cartão, conta externa ou setup técnico obrigatório.
- Coleta usa o que o Claude já tem de graça (`WebSearch`/`WebFetch`, OpenStreetMap).
- Se algo precisa de chave (ex.: Google Maps pra busca por raio), é **opcional** e
  **auto-detectado** — o usuário cola a chave no chat e a Logic passa a usar; sem
  ela, roda no modo grátis.
- A Logic **não faz encanamento** (não conecta conta, não monta dashboard ao vivo).
  Ela lê o que já existe e vira inteligência.

---

## 4. Logic + Mazy — a orquestração (o coração do produto)

A Logic roda **sozinha**. Mas o Mazy é "o SO do negócio no Claude Code" — ele
**executa** (conteúdo, SEO, ads, orgânico, operação). Juntos: a Logic é a **cabeça**
(decide o quê e por quê), o Mazy é a **mão** (executa). **Nunca competem.**

**A chave que resolve tudo:** Logic e Mazy são **o mesmo Claude, lendo os mesmos
arquivos, na mesma máquina.** Não existe API entre eles. O handoff é **arquivo + o
mesmo assistente trocando de chapéu.**

Como funciona, na prática:
1. **Detecção.** A Logic acha a pasta do Mazy (no diretório atual, pai ou irmã) e
   entra no modo integrado.
2. **Lê o dado real.** Em vez de pedir print, a Logic lê a memória do negócio que
   já está no Mazy (`_memoria/empresa.md`, `estrategia.md`), os relatórios de ads
   que o Mazy gerou e os cases. **Com Mazy, o diagnóstico já começa quase pronto** —
   a Logic só complementa o que falta.
3. **Decide o rumo (antes do tático).** A Logic responde o que o Mazy nunca pergunta:
   *"ad faz sentido agora, ou o dinheiro tá vazando antes?"*.
4. **Escreve o briefing** — um arquivo: *"executa isso e isso, com esse ângulo,
   nessa ordem; NÃO gasta em ad ainda porque o furo é a página."*
5. **O Mazy executa.** O usuário roda o comando do Mazy (`/seo`, `/carrossel`,
   `/anuncio-google`); ele **lê o briefing do arquivo** e executa a tática em cima.
6. **Aprende.** O resultado volta, `/casos` registra, a Logic aprende o padrão.

> Não existe "fazer o Mazy responder". É o mesmo Claude: a Logic deixa o briefing
> escrito, o comando do Mazy o encontra. A ponte é um **arquivo**, não uma API.

---

## 5. O fluxo na prática (a ordem perfeita)

```
/leads            → acha clientes (nicho+lugar+filtro+quantidade)  [Produto 1]
   ↓ (escolhe um lead, ou usa o próprio negócio)
/diag             → raio-X completo: gargalo + previsibilidade      [Produto 2]
   ↓ (com Mazy: já lê o dado real e complementa; sem Mazy: público + o que o cara colar)
Logic decide o rumo e ENTREGA
   ↓ (se o usuário quiser execução)
/plano + briefing → tráfego pago e/ou orgânico, sob demanda
   ↓
Mazy executa a tática
   ↓
/casos            → registra e a Logic aprende o mercado
```

**Diagnóstico e plano andam juntos e fluidos:** a Logic lê tudo, decide e entrega.
O briefing se molda ao que o usuário pede — *"quero tráfego pago"*, *"só o meu
orgânico"*, ou os dois. Se ele não pedir execução, para no diagnóstico (que já vale
sozinho). A Logic **lidera** — entrega o completo, não fica pedindo licença a cada
passo.

---

## 6. Os agentes (encanamento invisível — não é bicho de sete cabeças)

Pro usuário, é simples: pede lead, pede diagnóstico, pede plano. Por baixo, poucos
**subagentes** fazem o trabalho pesado e voltam só com o resultado limpo — isso
economiza token e mantém o contexto principal leve:

| Agente | Faz | Dispara |
|---|---|---|
| **Coletor de prospecção** | varre bairros, confere site/Instagram, monta a lista | `/leads` |
| **Coletor de pesquisa** | busca pesada de concorrentes/mercado | `/diag`, `/pesquisa` |
| **Analista de tráfego pago** | lê o dado real + o diagnóstico e decide se/como investir; escreve o briefing pago | sob demanda |
| **Analista de orgânico** | mesmo, pro orgânico (SEO/conteúdo/social); escreve o briefing orgânico | sob demanda |
| **Auto-estudo (padrão Hermes)** | destila o padrão do nicho a cada `/casos`; a Logic fica mais fina com o uso | após `/casos` |

Os analistas **não mexem em campanha** (isso é do Mazy) — eles decidem o **rumo** e
entregam o briefing. Cada um é opcional: o cara chama o que quer.

---

## 7. O método — o Motor (fundo, não raso)

O diagnóstico não é "4 caixinhas + nota /10". É um motor com **camadas de
profundidade** que puxa só o que o caso pede:

- **Dimensões:** aquisição, ativação, retenção, receita, indicação, posicionamento,
  oferta, funil, economia (LTV/CAC), operação, e demanda de busca/GEO.
- **Biblioteca grande, entrega enxuta:** `_nucleo/base-conhecimento/` guarda os
  frameworks; a Logic consulta só o que a empresa pede.
- **Previsibilidade:** projeta o cenário com o gargalo resolvido, com número
  (*"arruma X → +R$Y/mês, sem gastar mais em tráfego"*). Estimativa é rotulada.
- **Auto-estudo:** cada diagnóstico e caso ensina o padrão do nicho; o próximo
  diagnóstico daquele nicho começa mais fundo. Com trava (backup + reversão).

---

## 8. Comunicação — metade do valor (a falha nº1 do MVP antigo)

- **Fale claro:** linguagem de gente. Termo técnico só com explicação na hora, de
  preferência entre parênteses ao lado (*CAC = quanto custa ganhar 1 cliente*). Sem
  abusar: nada de mar de parênteses.
- **Organizado e nítido:** a entrega bate o olho e se entende em 30 segundos — o que
  está forte, o que está fraco, onde está o dinheiro. Padrão "painel", não "textão".
- O cara tem que **sentir** que recebeu algo fundo e bem entregue.

---

## 9. Rubrica anti-genérico (a peça mais importante — herdada, não muda)

Toda entrega passa por `_nucleo/rubricas/qualidade.md` antes de sair. Se falhar,
reescreve. Em resumo: evidência com fonte · específico > genérico · número sempre
que der · fato vs. hipótese marcados · coleta em camadas · **conclusão não-óbvia**
(o "caramba", obrigatório).

---

## 10. Arquitetura técnica e pastas

```
Logic-Produto/
├── ARQUITETURA.md   → este documento (a fundação)
├── CLAUDE.md        → regras de comportamento da Logic
├── .claude/skills/  → instalar · novo · leads · diag · pesquisa · plano · casos · painel
├── _nucleo/         → O CÉREBRO (verdade do PRODUTO; a Logic evolui)
│   ├── metodo/ · base-conhecimento/ · rubricas/ · coletor/ · templates/
├── clientes/<empresa>/ → A MEMÓRIA (verdade de CADA negócio; o usuário evolui)
│   └── cliente.md · diagnostico.md · pesquisa.md · plano.md · casos.md · fontes/
└── painel/          → dashboard (em revisão; não é foco agora)
```

- **Sem servidor, sem banco central, sem infra pesada.**
- **Separação-chave:** `_nucleo` = verdade do produto · `clientes` = verdade de cada
  negócio. Atualizar o produto nunca toca dados do cliente, e vice-versa.
- Quando o Mazy está presente, a Logic também lê a pasta dele (memória, relatórios,
  cases) — mas nunca escreve por cima; entrega briefing, não invade.

---

## 11. Regra de construção

Não adicionar função nova enquanto a anterior não passar a rubrica da seção 9. O
maior risco é qualidade e clareza, não quantidade de comandos. Poucos agentes
afiados > muitos agentes fracos.
