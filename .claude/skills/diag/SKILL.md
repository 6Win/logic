---
name: diag
description: >
  O motor de diagnóstico do Logic — o raio-X estratégico de uma empresa. Roda em 3
  etapas que se aprofundam, cada uma entrega valor sozinha: (1) Pesquisa
  Pública, análise outside-in só com dado público via WebSearch — já gera valor
  sozinha, serve pra pré-venda; (2) Perguntas Inteligentes, só o que faltou; (3)
  Arquivos, pra diagnóstico completo. Acha o GARGALO e entrega Painel /10 + quick
  wins. Use quando o usuário disser "diagnóstico", "/diag", "analisa a
  empresa X", ou trouxer uma empresa pra estudar.
---

# /diag — o raio-X estratégico

O comando que decide o produto. Transforma dado público (e depois interno) numa
conclusão estratégica que o dono não teria sozinho. **A qualidade aqui é tudo** —
se sair genérico, o Logic fracassou. Antes de entregar, passe SEMPRE pela
`_nucleo/rubricas/qualidade.md`.

> **FALE CLARO (regra nº1).** Este é o comando que a galera mais usa e o que mais
> sofre com "corporativês". Escreva cada achado em linguagem de gente: nada de
> "ataca a causa-raiz de 64%"; e sim "a maioria das reclamações é porque o cliente
> não sabe onde está o pedido — avisar por WhatsApp resolve boa parte". Explique
> qualquer termo técnico na hora. Se um iniciante não entenderia, reescreva.

## Antes de rodar
- Confirmar que existe um cliente ativo (`clientes/<empresa>/cliente.md`). Se não,
  rodar `/novo` primeiro (ou coletar nome + cidade na hora).
- Ler: `_nucleo/metodo/lente-outside-in.md`, `_nucleo/coletor/websearch.md`,
  `_nucleo/rubricas/qualidade.md`.

## Princípio
Padrão no **processo** (mesmo rigor, mesmos filtros, mesma barra de qualidade),
personalizado na **entrega** (nenhuma empresa é igual). Consultar só os frameworks
da `base-conhecimento/` que **aquele** caso pede — nunca despejar todos.

---

## ETAPA 1 — Pesquisa Pública (outside-in) · já entrega valor

Entrega fechada por si só — serve a pré-venda: abordar o prospect já entendendo o
negócio dele. Mesmo assim, a Logic **lidera** pro diagnóstico completo (etapas 2 e 3);
não empurra a parada, puxa pra frente.

### Passo 1 — Coletar em camadas
Seguir `_nucleo/coletor/websearch.md`: identidade → site → redes → reputação →
concorrentes → mercado. **Ler as fontes** (`WebFetch`), não só snippets. Anotar a
fonte de cada dado. Salvar achados relevantes em `clientes/<empresa>/fontes/`.

**Economia de token (importante — o `/diag` é o maior gasto):**
- **Coleta pesada → subagente `coletor-pesquisa`.** Dispare o subagente
  **`coletor-pesquisa`** (passando a empresa): as várias buscas + leitura de fontes
  rodam nele e voltam só com os achados já citados; o contexto principal fica leve pro
  cérebro analisar fundo. A análise (gargalo, previsibilidade, insight) é sua, não dele.
- **Com Mazy: leia o dado real, não re-colete.** Se o Mazy está presente, o negócio
  já está na memória dele (`_memoria/`), com relatórios e cases — o diagnóstico começa
  quase pronto e a Logic só **complementa o que falta**. Economia enorme.
- **Auto-estudo reduz custo:** se já existe padrão do nicho salvo, reaproveita em vez
  de coletar do zero. Salve o diagnóstico completo em arquivo e mostre só o resumo
  nítido no chat — não despeje tudo na conversa.

### Passo 2 — Ler as 6 dimensões
Preencher cada dimensão da `lente-outside-in.md` com **evidência citada**. O que
não achou = lacuna → marca `[hipótese]` (vira pergunta da etapa 2).

### Passo 3 — Cruzar com o método
Puxar da `base-conhecimento/` só o que o caso pede (funil, precificação, níveis de
consciência, retenção…). Achar **o gargalo** — o que mais trava o crescimento, em
1 frase. Costuma estar na **conversão/meio do caminho**, não em "falta tráfego".

Frameworks úteis pra achar o gargalo certo (puxar só o que o caso pede): a empresa vende
**característica ou futuro**? ([[vender-o-futuro-nao-o-presente]]) · tem **método/oferta com
nome e escada** ou é commodity? ([[discurso-metodo-e-escada-de-ofertas]]) · depende de
**anúncio direto** ou tem **aquário próprio**? ([[pescar-no-proprio-aquario]],
[[conteudo-antes-do-anuncio]]) · o **CAC** cabe no ticket/LTV? ([[cac-cpl-e-o-custo-de-vender]]) ·
preço ancorado em **custo ou valor**? ([[precificar-pelo-valor-percebido]]).

### Passo 4 — Montar o output
```
# Diagnóstico Logic — [empresa]  ·  Etapa 1 (pública)

## 📊 Painel do negócio
🟢 Oferta & Preço          8/10
🟡 Posicionamento/Marca    5/10
🔴 Aquisição               3/10   ← 🚨 GARGALO
🔴 Conversão               3/10
🟡 Reputação/Retenção      6/10
🟢 Presença/Conteúdo       7/10

Gargalo em 1 frase: [o maior problema, direto]

── COMO APRESENTAR (a comunicação é metade do valor — regra de ouro) ──
O cara bate o olho e ENTENDE, sem adivinhar nada. Método comprovado: **Pirâmide de
Minto / BLUF** — começa pela resposta, depois o porquê, depois a prova.
- **Abre com a resposta.** A 1ª coisa é O problema, em UMA frase de gente.
- **Zero jargão sem tradução.** Todo termo técnico traz a explicação do lado (ex.:
  *gargalo = o ponto que mais trava o crescimento*; *CAC = quanto custa ganhar 1
  cliente*). NADA de "quick wins", "insight" solto, "arena", "CEO" — tudo em português.
- **Zero frase vaga.** "Um demo impecável" não diz nada — escreva O QUE é, concreto. Se
  o cara pode perguntar "como assim?", reescreve até ele não precisar perguntar.
- **É uma metodologia, não um textão.** Guia o cara passo a passo: onde está o problema
  → o que está bom → o que fazer → quanto vale. Cada seção se explica sozinha.
- **Transparente:** o que você tem, você usa; o que não tem, você DIZ que não tem e
  trabalha com o que há (marca `[fato]` vs `[hipótese]`, cita a fonte).

── a ordem da entrega (do mais importante pro detalhe) ──
0. 🧠 O PONTO PRINCIPAL — a conclusão mais importante (UMA só, o "caramba"), em
   linguagem de gente. ABRE a entrega.
1. Quem é a empresa + de onde veio cada informação (as fontes)
1b. 🎯 A PERSONA — pra QUEM a empresa vende: quem é essa pessoa, as DORES específicas
    dela, e o quanto ela já sabe que tem o problema (nível de consciência). É a BASE de
    toda estratégia (orgânico, pago, oferta). Sem persona clara, o resto não tem direção.
2. O painel + as dimensões — com evidência e número [fato] vs. [hipótese]
3. O QUE MAIS TRAVA (o gargalo) — o quanto dá pra confiar em cada conclusão + 💸 quanto
   isso vale em dinheiro + 🔮 a projeção (o que esperar arrumando)
4. Você × os concorrentes — tabela simples de força e fraqueza
5. O que o mercado valoriza de verdade — o que a empresa acha que é o forte dela vs. o
   que o mercado reconhece de fato (o trunfo que ela não está usando)
6. O que dá pra fazer JÁ — 2–3 ações de alto impacto pra ESSA semana (hoje + o resto da
   semana). NÃO é o plano de 30/90 — isso é o `/plano`, e só se o cara pedir.
7. 💰 Onde está o dinheiro pra você — serviços a oferecer + como chegar no cliente
8. Pra ir mais fundo → o plano completo (`/plano`, se pedir) ou a etapa 2 (suposições viram perguntas)
```
Regras do Painel: menor nota = gargalo (🚨); empate → a que trava o funil mais
cedo. Notas saem da análise, não do achismo.

**Formato obrigatório (ver `rubricas/qualidade.md` itens 7–10):**

- **Evidência quantificada.** Sempre que possível, número/amostra, não adjetivo
  ("~65% das reclamações são logística", não "reclamações recorrentes"). Amostra
  aproximada = rotular `[estimativa]`.
- **Fonte por insight.** Cada conclusão marca de onde saiu: `[Site]` `[Instagram]`
  `[Reclame Aqui]` `[Google]` `[Mercado]`.
- **Escada de Confiança** no gargalo — encadear as conclusões com % de confiança,
  do fato à inferência mais arriscada:
  ```
  Escada de confiança
  95% → [fato mais sólido]
  70% → [inferência de peso]
  40% → [aposta mais arriscada]
  ```

**5. 💰 Oportunidade Comercial** (incluir quando o uso é venda de serviço):
- **Serviços recomendados**, priorizados e **justificados pelo gargalo** — nunca
  checklist genérico. Cada serviço aponta qual problema do diagnóstico ele resolve
  e o fit (alto/médio). Se a empresa já é forte em algo (ex.: presença), NÃO
  empurrar serviço dessa área — mirar o furo.
- **Como abordar** — a frase de abertura da reunião, ancorada no gargalo e na
  ameaça concreta. Ex.: *"Vocês construíram uma marca forte na região, mas achei um
  ponto específico que fica mais crítico com a chegada da Obramax…"*

**As seções de elite (o que põe o Logic muito acima):**

**🎯 A persona (a base de tudo):** antes de qualquer estratégia, defina PRA QUEM a
empresa vende — não "público geral", mas a pessoa concreta (ex.: *"dona de clínica de
estética, 30–45, que atende quase sozinha e perde dinheiro com paciente que falta"*).
Liste as **dores específicas** dela e o **nível de consciência** (ela sabe que tem o
problema? conhece que existe solução?). Todo o resto — conteúdo, anúncio, oferta — ataca
UMA dessas dores. É o que dá direção; sem isso, é tiro pra todo lado.

**🧠 O ponto principal** (ABRE a entrega, no topo): UMA conclusão só — a mais
importante, o "caramba" que todo o resto sustenta. Não é lista; é a conclusão mais afiada e
não-óbvia do diagnóstico inteiro, em 2–3 linhas. Se houver dois candidatos, escolher
o que conecta mais pontos. Todo o resto do diagnóstico existe pra provar essa frase.

**💸 Quanto isso vale em dinheiro** (dentro do gargalo): traduzir o problema em dinheiro
SEM inventar cifra. Raciocínio econômico:
- o custo pro CLIENTE dele (ex.: obra parada 1 dia = mão de obra ociosa; ele culpa o
  fornecedor);
- frequência/recorrência (um profissional compra dezenas de vezes/ano);
- o que se perde de verdade: não uma venda — o LTV (anos de recompra) + a indicação.
Faixa ilustrativa, se usar, marcar `[ilustrativo]`.

**🔮 Previsibilidade** (o que faz o dono pagar — projeção, não retrovisor): pegue o
funil (real da etapa 2, ou estimado e rotulado `[estimativa]`) e projete o cenário
**com o gargalo resolvido**. Mostre a conta, em 3 linhas:
- **Hoje:** [X leads/visitas por mês] → [taxa atual] → [Y vendas] → [R$ Z/mês].
- **Arrumando o gargalo:** levando [a métrica travada] de [atual] pra [alvo realista —
  benchmark do nicho, ou a etapa mais forte do próprio funil] → [Y' vendas] → [R$ Z'].
- **Ganho projetado:** ~[R$ Z' − Z]/mês, **sem gastar 1 real a mais em tráfego** (é
  eficiência de conversão, não volume).
Regras: nunca invente número; toda estimativa é rotulada `[estimativa]` com a suposição
à mostra. O alvo tem que ser realista (dobrar a conversão, não multiplicar por 10). É
isso que transforma "diagnóstico bonito" em decisão com número e porquê.

**Números reais deixam a projeção precisa.** Se o usuário tiver dados de tráfego pago
(Meta/Google) ou orgânico (Instagram/Facebook) — um print do Gerenciador, um export, o
Insights, ou o `relatorio-ads` do Mazy — a Logic **lê o que ele já tem** (capacidade
nativa: print, CSV, PDF) e usa pra cravar a projeção em vez de estimar. **Nunca** peça
pra ele conectar conta, gerar token ou fazer setup — a Logic não faz encanamento, o Mazy
que conecta os canais. Coleta/leitura pesada de export vai pra subagente.

**Você × os concorrentes**: mini-tabela com 2–3 concorrentes reais no formato
`| Empresa | Força | Fraqueza |` — visual, bate o olho e entende. Deixa claro o
campo onde a empresa é imbatível e onde está exposta. Fonte por linha.

**O que o mercado valoriza de verdade** (assinatura da Logic): a diferença entre o que a
empresa ACHA que é o diferencial dela e o que o MERCADO reconhece de fato — o trunfo que
ela tem e não está usando. Formato: *"A empresa aposta
em [X]. Mas o que o mercado reconhece é [Y]."* Ancorar em evidência. É o que faz o
dono parar.

**O que dá pra fazer já** (são as ações imediatas — **NÃO é "o plano"**; o plano completo
de 30/60/90 dias é o `/plano`, só se o cara pedir): 2–3 ações de alto impacto pra ESSA
semana, decisão de dono, não tática de agência.
- **🔥 Hoje** — a ação imediata que ataca a raiz do problema (+ o gesto de dono, ex.:
  ligar pros clientes-chave).
- **📅 No resto da semana** — a próxima ação que dá pra fazer sem esperar.
Nada de 30/90 dias aqui (confunde com o `/plano`). Feche o diagnóstico oferecendo, sem
empurrar: *"quer o plano completo de 30, 60 ou 90 dias em cima disso? é só pedir."*
Decisão de dono, não tática de agência.

### Passo 5 — Rubrica
Rodar o output contra `_nucleo/rubricas/qualidade.md`. Se falhar em qualquer um
dos 6 testes (principalmente o "conclusão não-óbvia"), **reescrever**. Só então
salvar em `clientes/<empresa>/diagnostico.md` e entregar.

### Passo 6 — Puxar pra frente (liderando, sem pedir licença)
A etapa 1 já é entrega fechada. **Não pergunte "quer continuar?".** Conduza: aponte o
que os números vão cravar e peça direto o que falta. Ex.: *"Isso já te dá o raio-X pra
abordar. Pra eu cravar a projeção de faturamento e fechar o gargalo, me confirma 3
coisas: ticket médio, quantos leads chegam por mês, e quantos viram venda."* Se o
usuário parar, tudo bem — mas a Logic lidera o próximo passo, não implora por ele.

---

## ETAPA 2 — Perguntas Inteligentes

Só se o usuário quiser aprofundar. **Não é questionário gigante.** Pegar as
`[hipótese]` da etapa 1 e transformá-las nas perguntas mínimas que faltam.
Exemplos típicos: ticket médio, tamanho da equipe, canais de aquisição, objetivo
principal, gargalos que o dono já percebe, diferenciais internos, números do funil
(leads → contato → fechamento).

Com as respostas: recalcular o Painel, calcular as **taxas do funil** se houver
número, atualizar o gargalo. Atualizar `diagnostico.md`. Se o usuário não quiser
responder, segue só com o que já tem — sem problema.

---

## ETAPA 3 — Arquivos

Só se ainda faltar. Pedir **somente o necessário**: print do Instagram Insights,
Meta/Google Ads, exports de CRM, planilha de vendas, briefing, PDF institucional.
Salvar em `clientes/<empresa>/fontes/`. Com isso, diagnóstico completo: gargalos,
oportunidades, riscos, prioridades, pontos fortes e fracos — agora com dado de
dentro cruzado com o método completo da Logic.

Atualizar `diagnostico.md` e o painel (`painel/index.html`).

---

## Comandos irmãos
- `/pesquisa` — aprofunda concorrentes e mercado
- `/plano` — transforma o diagnóstico em execução (serve a venda ampliada)
- `/casos` — registra o resultado depois da execução
