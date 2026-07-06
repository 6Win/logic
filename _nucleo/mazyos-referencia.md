# MazyOS — referência do que ele faz (pra Logic nunca descrever errado)

> Trava de segurança. A Logic **cita e faz handoff** pro MazyOS o tempo todo. Este arquivo
> registra o que o MazyOS **realmente executa**, pra Logic nunca subestimá-lo nem inventar
> uma função que ele não tem. Se o dono ler a descrição da Logic sobre o Mazy, tem que
> pensar "isso, é exatamente o que ele faz" — não "como assim, a gente faz mais que isso".

## O que o MazyOS é
O **"sistema operacional do negócio no Claude"** — a **mão que executa**. Roda como skills
no Claude Code, lendo a memória do negócio (`_memoria/`), a identidade (`identidade/`) e
gerando as peças. É forte e completo na **execução do funil**.

## O que ele executa (base: a aula "Enchendo o Funil" — Tráfego + Prospecção)
1. **Conteúdo estratégico** — cria os posts (ex.: "Carrosséis Magnéticos": explicativo /
   transformação / contraste), otimiza bio, monta destaques e stories. É quem **escreve a
   copy e renderiza o visual**, lendo a identidade da marca.
2. **Tráfego pago (Meta Ads)** — estrutura campanhas de topo/meio/fundo de funil,
   segmentação por nível de consciência, orçamento enxuto (ex.: R$30/dia), e acompanha as
   **métricas** (CPM, CPC, custo por lead, conversão) — o `relatorio-ads`.
3. **Automação de atendimento** — script de qualificação no Direct (ex.: ManyChat, ~8
   blocos), palavra-chave, tags de lead. Automatiza o operacional do atendimento.
4. **Prospecção ativa — mas de lead QUENTE** — reativa quem **já demonstrou interesse**
   (salvou post, viu story, seguiu mas não interagiu) via DM. É explícito na metodologia
   dele: *"prospecção ativa não é pra ENCONTRAR leads, é pra REATIVAR quem já demonstrou
   interesse."*
5. **Estratégia híbrida** — combina inbound (anúncio+conteúdo) + reativação + automação num
   funil integrado, com cronograma de implementação.

Skills típicas mencionadas: `/carrossel`, `/seo`, `/anuncio-google`, `/relatorio-ads`,
`/publicar-tema`. (Confirmar os nomes exatos na instalação do Mazy do usuário.)

## A LACUNA que a Logic preenche (não sobrepõe)
- **Prospecção FRIA (cliente novo):** o Mazy trabalha quem já te conhece; a `/leads` da
  Logic acha **empresa nova que nunca te viu**, por região/nicho/filtro. Etapas diferentes.
- **Diagnóstico antes do gasto:** o Mazy executa o funil; a Logic decide **se o funil é o
  problema** — acha o gargalo (oferta? preço? recompra?) antes de gastar em ad.
- **Previsibilidade:** o Mazy roda e reporta; a Logic **projeta o futuro** com número.
- **Estratégia acima da execução:** Logic = o quê e por quê; Mazy = o como.

## Como falar do Mazy (regras)
- Nunca dizer que o Mazy "não prospecta" (ele reativa quente) nem "só faz inbound" de forma
  que soe como se ele fosse limitado. Dizer a **etapa** que ele cobre.
- Handoff é **arquivo**, não API: a Logic escreve o briefing (persona, ângulo, o que
  priorizar) em `clientes/<empresa>/briefing-maz.md`; o comando do Mazy lê e executa.
- A Logic **não executa** conteúdo/ads/automação quando o Mazy está presente — passa a bola.
