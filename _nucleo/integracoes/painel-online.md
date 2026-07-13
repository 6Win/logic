# Painel online (logic-saas) — o contrato de sync

Referência única do formato JSON que `/api/sync` espera, usada por `/diag`,
`/plano`, `/leads` e `/casos` no passo final "enviar pro painel". Só se aplica
**se o usuário já rodou `/conectar`** (existe `scripts/sync.config.json`) — sem
isso, a Logic roda 100% local e nenhuma dessas seções entra em ação.

Como enviar: escrever o JSON abaixo num arquivo temporário (ex.:
`clientes/<slug>/.sync-diagnostico.json`) e rodar:
```
node scripts/sync.mjs clientes/<slug>/.sync-diagnostico.json
```
Ler o resultado no terminal — se dar erro (token inválido, payload rejeitado),
mostrar a mensagem pro usuário em vez de tentar de novo às cegas.

## `tipo: "diagnostico"`
```json
{
  "tipo": "diagnostico",
  "gargaloPrincipal": "a frase de 1 linha do gargalo",
  "projecaoConservadora": "opcional — cenário conservador em texto",
  "projecaoRealista": "opcional — cenário realista em texto",
  "projecaoOtimista": "opcional — cenário otimista em texto",
  "conteudoCompleto": {
    "resumo": "o ponto principal — a conclusão-âncora, 2-3 linhas",
    "callouts": [
      { "label": "Maior problema", "valor": "...", "tom": "critico" },
      { "label": "Maior oportunidade", "valor": "...", "tom": "oportunidade" },
      { "label": "Nível geral", "valor": "..." }
    ],
    "score": { "valor": 62, "porque": "por que essa nota — nunca número solto" },
    "indicadores": [
      { "nome": "Aquisição", "nota": 3, "motivo": "...", "impacto": "..." }
    ],
    "secoes": [
      {
        "titulo": "nome do problema/oportunidade (ou do ponto forte, sem prioridade)",
        "prioridade": "critico",
        "corpo": "explicação com evidência + número",
        "dados": [{ "label": "Custo por cliente", "valor": "R$ 84" }],
        "impacto": "o que custa não resolver",
        "planoRecomendado": "o que fazer e por quê",
        "proximoPasso": "a ação concreta de hoje/semana",
        "confianca": "Alta",
        "fonte": "Site · Instagram"
      }
    ]
  },
  "status": "concluido"
}
```
- `score.valor` = **média das notas de `indicadores` × 10**, arredondado — nunca
  um número à parte. `indicadores` são as 6 dimensões do Painel (`lente-outside-in.md`).
- `secoes` com `prioridade` (`critico | importante | oportunidade`) são os
  problemas/oportunidades do diagnóstico; seção sem `prioridade` é ponto forte.
  Toda seção com `prioridade` precisa de `impacto` + `planoRecomendado` +
  `proximoPasso` preenchidos.
- Nunca inventar número — o que for estimativa, marcar como tal no texto.

## `tipo: "plano"`
```json
{
  "tipo": "plano",
  "diagnosticoId": "opcional — se souber o id retornado no sync do diagnóstico",
  "prazoDias": 30,
  "conteudo": {
    "resumo": "o que muda nesse período e por quê",
    "progresso": { "percentual": 0, "porque": "onde está agora" },
    "secoes": [
      {
        "titulo": "Semana 1 — nome da etapa",
        "estado": "a_comecar",
        "meta": "o alvo dessa etapa",
        "corpo": "o que essa etapa exige, em português simples",
        "tarefas": [{ "texto": "tarefa concreta", "feito": false }]
      }
    ]
  },
  "status": "concluido"
}
```
- `prazoDias` é sempre número de dias (12 meses = `365`).
- `estado` é `"concluida" | "em_andamento" | "a_comecar"`.
- Se não souber o `diagnosticoId`, pode omitir — o backend usa o diagnóstico
  mais recente do workspace.

## `tipo: "leads"`
```json
{
  "tipo": "leads",
  "leads": [
    {
      "nicho": "barbearia",
      "regiao": "Recreio, Rio de Janeiro",
      "nomeEmpresa": "...",
      "telefone": "(21) 99999-9999, opcional — vira link de WhatsApp no painel",
      "site": "https://..., opcional",
      "instagram": "@perfil ou https://instagram.com/..., opcional",
      "linkMaps": "https://maps.google.com/... ou link do Maps, opcional — não conta como contato, só ajuda a achar o lugar",
      "gancho": "a leitura curta do negócio (o furo digital)",
      "nota": "A",
      "criterioFit": 8,
      "criterioSinalDinheiro": 7,
      "criterioOportunidadeDigital": 9,
      "criterioFacilidadeContato": 6,
      "criterioUrgencia": 5
    }
  ]
}
```
- `telefone`/`site`/`instagram` são o valor de verdade (não booleano) — o painel
  transforma cada um em link clicável (`telefone` → WhatsApp, `site` → `https://`,
  `instagram` → `instagram.com/@`). **Pelo menos 1 dos 3 é obrigatório**: o
  backend rejeita qualquer lead sem nenhum contato (não dá pra abordar = não é
  lead). Nunca mande os 3 vazios. `linkMaps` é só um extra pra achar o
  endereço — não conta pra essa regra, um lead com só `linkMaps` e nada mais
  ainda é rejeitado.
  **Errado:** `"instagram": "ativo"` ou `"site": "tem"` — isso não é um link, o
  painel não consegue transformar em nada clicável, e pro schema conta como
  vazio (o lead é rejeitado inteiro, mesmo parecendo que "tinha Instagram").
  **Certo:** `"instagram": "@barbearia_do_ze"` ou `"instagram":
  "https://instagram.com/barbearia_do_ze"`. Se a coleta só confirmou que existe
  mas não anotou o handle/link, vá buscar o valor antes de montar esse JSON —
  não preencha com a palavra do status.
- `nota` é `"A_PLUS" | "A" | "B" | "C" | "D"` (a prioridade já calculada pelo
  `/leads`, sem site pesa mais).
- Os 5 `criterio*` são notas de 0 a 10 — dá pra estimar a partir do que o
  `/leads` já levantou (sem site = oportunidade digital alta; rating baixo =
  sinal de dinheiro fraco; etc.), não precisa perguntar de novo pro usuário. O
  painel calcula sozinho a pontuação exibida (0-100 = soma dos 5 critérios ÷
  50 × 100) — nunca mandar uma pontuação solta.

## `tipo: "caso"`
```json
{
  "tipo": "caso",
  "diagnosticoId": "opcional",
  "resultado": "o que mudou, antes → depois, com número real",
  "aprendizado": "opcional — o que essa empresa ensinou"
}
```
- `resultado` é obrigatório — usar a resposta das perguntas 1-3 do `/casos`
  (executado, o que mudou, impacto financeiro) resumida num parágrafo.
- `aprendizado` vem da pergunta 4 (hipótese × resultado).
