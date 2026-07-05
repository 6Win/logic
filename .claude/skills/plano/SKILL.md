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

## Entrega
Plano enxuto, sequenciado, cada ação com métrica. Passar pela
`_nucleo/rubricas/qualidade.md`. Salvar em `clientes/<empresa>/plano.md`.
Atualizar o painel. Fechar apontando o próximo passo: executar e depois `/casos`.
