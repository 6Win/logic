---
name: plano
description: >
  Transforma o diagnóstico em execução — um plano estratégico/tático/operacional
  no horizonte que o usuário escolher (10/30/60/90/180 dias, 12 meses). Prioriza
  por impacto × esforço, define métrica pra cada ação. Use depois do /diag,
  quando o usuário disser "plano", "/plano", "monta o plano de ação".
---

# /plano — do diagnóstico à execução

Serve a venda ampliada: quem vende um serviço entrega junto a estratégia + plano,
e cobra mais. Só roda com diagnóstico feito.

> **Este é o lugar do plano COMPLETO** (30/60/90+ dias). O `/diag` só entrega "o que
> fazer essa semana"; quando o cara quer horizonte maior, vem pra cá. Por isso o plano
> aqui tem que ser **fundo** — não um resuminho. Herda a apresentação da rubrica
> (`_nucleo/rubricas/qualidade.md`, item 12): comece pela resposta, linguagem de gente,
> zero frase vaga, nomes de seção simples.

## Antes
Ler `clientes/<empresa>/diagnostico.md` (o gargalo + quick wins) e, se houver,
`pesquisa.md`. O plano ataca o gargalo primeiro.

## Passos
1. **Escolher o horizonte** com o usuário: 10 / 30 / 60 / 90 / 180 dias ou 12
   meses. (Se não disser, sugerir 30 dias como padrão — cabe no ciclo de validação.)
2. **Priorizar por impacto × esforço.** Atacar o vermelho do Painel primeiro.
   Nada de lista de 40 tarefas — poucas ações que movem o ponteiro.
3. **Três camadas:**
   - Estratégico — a aposta central (onde vamos ganhar).
   - Tático — as frentes (o quê).
   - Operacional — as tarefas com responsável e prazo (como/quando).
4. **Cronograma** por semana/quinzena dentro do horizonte.
5. **Métrica por ação** — como saber se funcionou (a rubrica exige número).
6. **Entregáveis** claros por etapa.

## Padrão de qualidade (herda do /diag)
> **FALE CLARO (regra nº1):** cada ação escrita em linguagem de gente, como você
> explicaria pra um amigo. Sem jargão sem explicar, sem frase de efeito. Diagnóstico
> e Plano são o que o usuário mais usa — é aqui que a clareza mais importa.

O plano sai no mesmo nível de elite do diagnóstico:
- **Abre com a aposta-âncora** — a UMA jogada central (espelha o insight do diagnóstico).
- **Cada ação com métrica e horizonte** (🔥 Hoje / 📅 30 / 📈 90), não lista solta.
- **Impacto econômico** de cada frente (o que essa ação faz pelo dinheiro).
- **Confiança + fonte** onde a ação depende de uma hipótese do diagnóstico.
- Prioridade explícita: ataca o gargalo (o vermelho do Painel) antes de tudo.
- **Ações EXECUTÁVEIS, não conceitos.** Cada ação é um passo que alguém faz amanhã:
  verbo + responsável + rotina/prazo. Não "rastreio da transportadora", e sim:
  *"nomear um responsável pelo OTIF · definir SLA com a transportadora · implantar
  rotina diária de acompanhamento · criar alerta automático de atraso"*. Se dá pra
  perguntar "ok, mas o que EU faço segunda de manhã?", ainda está conceitual demais.

## Executar via Mazy — o briefing (inteligente, não robótico)
Quando o cara quer partir pra execução — e ele PEDE, com as palavras dele: *"quero fazer
o orgânico"*, *"tava querendo abrir o Instagram"*, *"quero rodar tráfego pago"* — a Logic
vira o consultor que decide o QUÊ e entrega a ordem pronta pro Mazy executar. Comporta-se
assim (é metodologia que apoia e ensina, não um executor cego):

**1. Captura a intenção, mesmo fora do plano.** O cara não lembra de tudo no diagnóstico.
Se ele solta *"tava querendo postar no Instagram"*, isso é intenção de orgânico — **pega e
trabalha em cima**, mesmo que não estivesse no plano. NUNCA responda "não tá no plano";
incorpora e entrega um excelente trabalho. Captar o que ele diz solto é a inteligência.

**2. Recomenda e alerta antes de montar.**
- Decide o rumo: faz sentido AGORA, ou tem coisa antes? Ex.: quer **pago** mas não tem
  orgânico nenhum nem sabe subir campanha → **alerta o risco** ("pagar pra levar gente pra
  um Instagram vazio queima dinheiro") e recomenda arrumar orgânico/página primeiro.
- Ensina de leve: explica o porquê em linguagem de gente.

**3. Pede só a informação que muda a decisão.** Ex.: *"tenho R$300 mas não sei subir
campanha"* → como está o orgânico? tem oferta e pra onde mandar o clique? Pergunta o
mínimo que falta pra recomendar certo. Não chuta.

**4. Só então monta o briefing** — sob demanda, pago e/ou orgânico:
- *Orgânico* → briefing **detalhado** pras skills `/seo`, `/carrossel`, `/publicar-tema`
  do Mazy. Não é só o tema — inclui:
  - **Ancorado na PERSONA (do diagnóstico):** pra quem, e as dores dela. Todo conteúdo
    ataca UMA dor específica dessa persona — é o que dá direção. Cada peça pinta o **quadro
    do futuro** da persona ([[vender-o-futuro-nao-o-presente]]), não descreve o produto; e o
    ângulo segue o **nível de consciência** dela ([[conteudo-antes-do-anuncio]]).
  - **Base primeiro (passo 0):** o que falta pra ter presença — logo? bio? perfil
    completo? Se falta, entra como primeira coisa.
  - **Por plataforma, cada uma do seu jeito, COM o porquê:** Instagram, TikTok/Reels,
    Facebook, Twitter/X — recomenda o formato certo de cada uma **e diz por que** (*"reels
    mostrando a automação PORQUE alcança dono novo que não te conhece"*). Nunca o mesmo
    post pra todas. Foca na principal; monta pras outras só se o cara pedir.
  - **Amarrado ao objetivo e ao prazo:** construir caso é uma estratégia; vender rápido é
    outra. Segue o que o cara quer e o tempo que ele tem.
  - **O PORQUÊ, não a copy pronta.** A Logic entrega persona + ângulo + por que cada
    formato. A **copy e o visual são do Mazy** (ele escreve e renderiza lendo a
    `identidade/` e a `_memoria/` dele) — não duplica o que ele já faz. A copy sai no
    `/carrossel` do Mazy, ou aqui só se o cara pedir.
- *Pago* → briefing pras skills `/anuncio-google`, `/relatorio-ads` do Mazy (público,
  oferta, ângulo, o que priorizar). A Logic **não monta campanha** — dá o rumo.

**5. Entrega e faz a ponte (e explica pro cara como funciona):**
- Salva o briefing em `clientes/<empresa>/briefing-maz.md` (a ponte é arquivo, não API).
- **Se as skills do Mazy estão neste mesmo lugar** (mesma pasta/workspace), oferece rodar
  DIRETO: *"quero já disparar o `/carrossel` do Mazy com esse briefing?"* → o mesmo Claude
  roda o comando do Mazy lendo o arquivo, sem o cara recolar nada.
- **Se o Mazy está separado**, diz claro: *"briefing salvo — abre o teu Mazy e roda
  `/carrossel` que ele lê isso."*
- Lidera a ponte, mas **nunca finge que conectou** se as skills do Mazy não estão ali.

## Entrega
Plano enxuto, sequenciado, cada ação com métrica. Passar pela
`_nucleo/rubricas/qualidade.md`. Salvar em `clientes/<empresa>/plano.md`.
Sem Mazy, o plano vale sozinho (o usuário executa). Fechar apontando o próximo passo:
executar (ou mandar pro Mazy) e depois `/casos`.

## Enviar pro painel online (só se `/conectar` já rodou)
Se existir `scripts/sync.config.json`, montar o JSON `tipo: "plano"` seguindo
`_nucleo/integracoes/painel-online.md` (o `prazoDias` é o horizonte escolhido
no Passo 1, em dias — 12 meses = 365) e rodar `node scripts/sync.mjs
<arquivo>`. Sem esse arquivo, pular — a Logic continua 100% local.
