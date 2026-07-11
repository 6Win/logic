---
dominio: 02-aquisicao-growth
pilar: aquisicao
fonte: Meta (WhatsApp Business Platform — quality rating oficial) + boas práticas de mercado 2026
---
# Abordar lead no WhatsApp sem tomar bloqueio (não é só questão de volume)

**Ideia central:** o WhatsApp não bane só por volume alto. Ele calcula uma **nota de
qualidade** por número, baseada em como quem recebe reage — e um número pode ser sinalizado
mesmo mandando poucas mensagens, se o comportamento parecer de spam. Quem só olha "quantas
mensagens por dia posso mandar" está olhando o fator errado.

## O que realmente derruba a nota (a fonte oficial)

A Meta calcula a qualidade de um número pela reação de quem recebe, não pela contagem de
envios:

- **Taxa de bloqueio** (quantos destinatários bloqueiam o número após receber mensagem) —
  o sinal de maior peso. Passar de **2-3%** já derruba a nota.
- **Taxa de denúncia** ("Reportar spam") — pesa mais que o bloqueio: **2 denúncias a cada
  mil mensagens** já chamam atenção do sistema.
- **Quem opta antes de receber bloqueia 5 a 10x menos** — contato que já esperava aquela
  mensagem (respondeu um anúncio, preencheu formulário) quase não bloqueia; contato frio
  "do nada" bloqueia muito mais fácil.
- Mensagem que **puxa resposta** (pergunta, não afirmação) tende a subir a nota; mensagem
  que só empurra oferta tende a ser ignorada ou denunciada.

Quando a nota cai, o número entra em **Flagged** (sinalizado) e para de conseguir subir de
patamar de limite de mensagem; em caso de violação sustentada, o acesso é revogado
(banimento). Isso vale tanto pra quem usa a API oficial quanto, na prática, pro
comportamento equivalente no WhatsApp Business normal (o app grátis que a maioria usa).

## O que sinaliza mesmo em baixo volume

Isso é o que geralmente passa batido — dá pra tomar bloqueio com **poucas** mensagens se:

- **Perfil comercial incompleto** — sem foto, sem nome de empresa, sem categoria/descrição.
  Perfil vazio parece golpe, e quem recebe denuncia mais rápido.
- **Primeira mensagem com link ou mídia** — abrir contato frio já com link é padrão clássico
  de spam/phishing pro sistema (e pra quem recebe).
- **Texto idêntico pra várias pessoas do mesmo nicho/região** — gente do mesmo setor se
  conhece; se um denunciar e comentar com outro, vira uma cadeia de denúncia rápida.
- **Número novo mandando várias mensagens no primeiro dia** — chip sem histórico é o mais
  monitorado; qualquer denúncia pesa desproporcionalmente mais nessa fase.
- **App não-oficial (WhatsApp Plus, GB WhatsApp, etc.)** — a Meta bane essas contas
  direto, independente de comportamento, só por rodar um app modificado.
- **Adicionar o contato e mandar mensagem na sequência**, sem contexto nenhum — o padrão
  "adicionou e já mandou oferta" é monitorado como sinal de disparo automatizado, mesmo
  feito na mão.

## Checklist prático antes de abordar uma leva de leads

1. **Perfil comercial completo primeiro** — foto real, nome, categoria, horário, descrição.
   Isso sozinho já reduz denúncia (perfil parece empresa de verdade).
2. **Aquecer número novo devagar** — começar baixo (10-20 conversas novas/dia) e subir ao
   longo de 1-2 semanas, nunca abrir um chip novo já disparando pra lista inteira.
3. **Personalizar sempre** — usar o **gancho** que o `/leads` já entrega por lead, nunca
   texto idêntico copiado e colado. É a diferença nº1 entre "parece spam" e "parece gente".
4. **Primeira mensagem só texto, sem link** — deixar link/proposta pra depois que a pessoa
   responder.
5. **Ritmo humano** — espaçar os envios ao longo do dia; rajada de mensagens seguidas é o
   padrão mais óbvio de automação pro sistema.
6. **Nunca usar app modificado** (GB WhatsApp, WhatsApp Plus) — bane sem dó, sem relação
   com quanto ou como você manda mensagem.
7. **Se o volume for realmente grande e recorrente**, dividir entre mais de um número
   verificado (cada um aquecido do próprio jeito) em vez de um único número levando tudo —
   e considerar a **API oficial da WhatsApp Business Platform** (Meta ou um parceiro como
   Twilio/360dialog/Zenvia), lembrando que ela também exige opt-in e template aprovado pra
   mensagem de fora de uma conversa já iniciada — não é atalho pra abordagem fria em massa,
   é o caminho pra quem já tem volume de conversa **iniciada pelo cliente** (respondeu
   anúncio, clicou em link, etc.).

## Aplicação LOGIC

Entra no `/leads`: depois de entregar a lista qualificada, a Logic fecha com um lembrete
curto (não o checklist inteiro) sobre como abordar sem tomar bloqueio, puxando o essencial
daqui — principalmente se a leva for grande ou se o usuário sinalizar que vai mandar mensagem
na sequência. **A Logic nunca automatiza ou dispara a mensagem** — ela só orienta; quem manda
é sempre o usuário. Ver `.claude/skills/leads/SKILL.md`.

Relacionado: [[nota-do-lead-a-plus-a-d]] · [[valor-do-tempo-e-roi-da-hora]]

---
Fontes: [Meta Business Help Center — Quality Rating](https://www.facebook.com/business/help/896873687365001) ·
[WhatsApp Business Platform — Messaging Limits](https://developers.facebook.com/docs/whatsapp/messaging-limits) ·
síntese de práticas de mercado 2026 (Uptail, Getkanal, WUSeller) sobre block rate e report rate.
