---
name: diagnostico
description: >
  O motor de diagnóstico do Logic — o raio-X estratégico de uma empresa. Roda em 3
  etapas independentes que o usuário pode parar a qualquer momento: (1) Pesquisa
  Pública, análise outside-in só com dado público via WebSearch — já gera valor
  sozinha, serve pra pré-venda; (2) Perguntas Inteligentes, só o que faltou; (3)
  Arquivos, pra diagnóstico completo. Acha o GARGALO e entrega Painel /10 + quick
  wins. Use quando o usuário disser "diagnóstico", "/diagnostico", "analisa a
  empresa X", ou trouxer uma empresa pra estudar.
---

# /diagnostico — o raio-X estratégico

O comando que decide o produto. Transforma dado público (e depois interno) numa
conclusão estratégica que o dono não teria sozinho. **A qualidade aqui é tudo** —
se sair genérico, o Logic fracassou. Antes de entregar, passe SEMPRE pela
`_nucleo/rubricas/qualidade.md`.

## Antes de rodar
- Confirmar que existe um cliente ativo (`clientes/<empresa>/cliente.md`). Se não,
  rodar `/novo_cliente` primeiro (ou coletar nome + cidade na hora).
- Ler: `_nucleo/metodo/lente-outside-in.md`, `_nucleo/coletor/websearch.md`,
  `_nucleo/rubricas/qualidade.md`.

## Princípio
Padrão no **processo** (mesmo rigor, mesmos filtros, mesma barra de qualidade),
personalizado na **entrega** (nenhuma empresa é igual). Consultar só os frameworks
da `base-conhecimento/` que **aquele** caso pede — nunca despejar todos.

---

## ETAPA 1 — Pesquisa Pública (outside-in) · já entrega valor

O usuário pode parar aqui. Serve a pré-venda: abordar o prospect já entendendo o
negócio dele.

### Passo 1 — Coletar em camadas
Seguir `_nucleo/coletor/websearch.md`: identidade → site → redes → reputação →
concorrentes → mercado. **Ler as fontes** (`WebFetch`), não só snippets. Anotar a
fonte de cada dado. Salvar achados relevantes em `clientes/<empresa>/fontes/`.

### Passo 2 — Ler as 6 dimensões
Preencher cada dimensão da `lente-outside-in.md` com **evidência citada**. O que
não achou = lacuna → marca `[hipótese]` (vira pergunta da etapa 2).

### Passo 3 — Cruzar com o método
Puxar da `base-conhecimento/` só o que o caso pede (funil, precificação, níveis de
consciência, retenção…). Achar **o gargalo** — o que mais trava o crescimento, em
1 frase. Costuma estar na **conversão/meio do caminho**, não em "falta tráfego".

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

── a ordem da entrega (do impacto pro detalhe) ──
0. 🧠 INSIGHT INESPERADO — a caixinha do "caramba" (UM só). ABRE a entrega.
1. Quem é a empresa + fontes
2. As 6 dimensões — evidência QUANTIFICADA [fato] vs. [hipótese]
3. O GARGALO — Escada de Confiança + 💸 Impacto econômico (abaixo)
4. ⚔️ Arena competitiva — tabela [empresa] × concorrentes (abaixo)
5. 🕳️ Oportunidade Perdida — o que ela acha que é vs. o que o mercado reconhece
6. 2–3 quick wins (impacto × esforço)
7. 👔 Se eu fosse o CEO amanhã — plano executivo de negócio (abaixo)
8. 💰 Oportunidade Comercial — serviços a oferecer + como abordar (abaixo)
9. Aprofundar → etapa 2 (as hipóteses viram perguntas)
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

**🧠 Insight inesperado** (ABRE a entrega, no topo): UMA caixinha, um único insight
— o "caramba" que todo o resto sustenta. Não é lista; é a conclusão mais afiada e
não-óbvia do diagnóstico inteiro, em 2–3 linhas. Se houver dois candidatos, escolher
o que conecta mais pontos. Todo o resto do diagnóstico existe pra provar essa frase.

**💸 Impacto econômico** (dentro do gargalo): traduzir o problema em dinheiro SEM
inventar cifra. Raciocínio econômico:
- o custo pro CLIENTE dele (ex.: obra parada 1 dia = mão de obra ociosa; ele culpa o
  fornecedor);
- frequência/recorrência (um profissional compra dezenas de vezes/ano);
- o que se perde de verdade: não uma venda — o LTV (anos de recompra) + a indicação.
Faixa ilustrativa, se usar, marcar `[ilustrativo]`.

**⚔️ Arena competitiva**: mini-tabela com 2–3 concorrentes reais no formato
`| Empresa | Força | Fraqueza |` — visual, bate o olho e entende. Deixa claro o
campo onde a empresa é imbatível e onde está exposta. Fonte por linha.

**🕳️ Oportunidade Perdida** (assinatura do Logic): o gap entre o que a empresa ACHA
que é seu diferencial e o que o MERCADO parece reconhecer. Formato: *"A empresa aposta
em [X]. Mas o que o mercado reconhece é [Y]."* Ancorar em evidência. É o que faz o
dono parar.

**👔 Se eu fosse o CEO amanhã**: plano executivo de NEGÓCIO (não marketing),
priorizado por horizonte:
- **🔥 Hoje** — a ação imediata que ataca a causa-raiz + o gesto de dono (ligar
  pros clientes críticos).
- **📅 30 dias** — o processo/SLA que faltava + o indicador que hoje ninguém mede.
- **📈 90 dias** — a mudança estrutural (reposicionamento, blindagem do segmento-chave).
Decisão de dono, não tática de agência.

### Passo 5 — Rubrica
Rodar o output contra `_nucleo/rubricas/qualidade.md`. Se falhar em qualquer um
dos 6 testes (principalmente o "conclusão não-óbvia"), **reescrever**. Só então
salvar em `clientes/<empresa>/diagnostico.md` e entregar.

### Passo 6 — Oferecer o próximo passo (sem forçar)
> "Isso já dá pra abordar o cliente. Se quiser fechar o diagnóstico, a etapa 2 são
> [N] perguntas rápidas que confirmam as hipóteses acima. Quer seguir?"

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
dentro cruzado com o método completo do SYS Scan.

Atualizar `diagnostico.md` e o painel (`painel/index.html`).

---

## Comandos irmãos
- `/pesquisa` — aprofunda concorrentes e mercado
- `/plano` — transforma o diagnóstico em execução (serve a venda ampliada)
- `/casos` — registra o resultado depois da execução
