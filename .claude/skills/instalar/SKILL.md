---
name: instalar
description: >
  Prepara e apresenta o Logic quando alguém importa a pasta pela primeira vez.
  Confirma a estrutura, explica os comandos e o fluxo, e conduz o usuário ao
  primeiro cliente. Use quando o usuário disser "instalar", "/instalar", "começar",
  "acabei de importar", ou na primeira vez que abrir o projeto.
---

# /instalar — a porta de entrada do Logic

Onboarding leve (princípio facilitador: zero fricção). Não instala software nem pede
configuração — só orienta e ativa o fluxo.

## Mensagem de boas-vindas (modelo — adaptar o tom, manter a essência)
> 👋 **Bem-vindo à Logic.**
>
> Pensa na Logic como o **estrategista** do negócio. Ela estuda a empresa a fundo e te
> diz, em linguagem de gente, as coisas que fazem você ganhar (ou parar de perder)
> dinheiro:
> - **Por que alguém usaria esse negócio?** Qual o ponto forte pra explorar.
> - **Onde tá o dinheiro parado na mesa?** O ponto fraco que trava o crescimento (o
>   *gargalo*) — e como corrigir.
> - **Quanto dá pra faturar a mais** arrumando isso — com número, não achismo.
> - E ainda **acha clientes qualificados** pra você abordar (prospecção com filtro).
>
> Tudo aqui no Claude, na sua máquina, de graça. Sem planilha, sem conta externa.
>
> **Usa o Mazy?** Aí fica ainda melhor: a Logic lê o negócio que já está lá, pensa a
> estratégia, e entrega a ordem pronta pras skills dele executarem. **A Logic é a
> cabeça; o Mazy é a mão.** Os dois se somam, nunca competem.
>
> Fluxo: `/leads` acha cliente · `/diag` faz o raio-X + a previsão · `/plano` vira
> execução · `/casos` registra e a Logic aprende o seu mercado.
>
> **Quer ver tudo isso também num painel online, sem mexer em arquivo?** Entra em
> **logic-saas.vercel.app**, cria conta, cola aqui o token que aparece lá (ou só
> diz `/conectar`) — é opcional, a Logic roda 100% local sem isso.
>
> Bora? Me diz o **nome de uma empresa** (a sua ou a de um cliente) que eu já começo. 🚀

Manter curto, confiante e sem jargão. Não despejar a estrutura de pastas na cara do
usuário — só o essencial pra ele começar a usar em 30 segundos.

## O que fazer
1. **Dar as boas-vindas** e explicar em 2 linhas o que é a Logic: o **estrategista** que
   estuda a empresa a fundo e mostra onde está o dinheiro — ponto forte, ponto fraco
   (o gargalo), quanto dá pra faturar a mais, e clientes qualificados pra abordar.
   Rodando aqui no Claude, de graça, na máquina do usuário.
2. **Detectar o Mazy** (se existir a pasta dele por perto): avisar que a Logic vai
   ler o negócio que já está lá e entregar plano pronto pras skills dele. Se não houver,
   seguir normal — a Logic roda sozinha.
3. **Apresentar o fluxo e os comandos** (a Logic lidera de ponta a ponta):
   ```
   /leads → /novo → /diag → /plano → [Mazy executa] → /casos
   ```
   Lembrar o usuário que **não precisa decorar comando**: é só conversar ("analisa essa
   empresa", "acha clientes de barbearia no Recreio"). Os comandos são atalhos.
   | Comando | O que faz |
   |---|---|
   | `/leads` | acha clientes qualificados por região/nicho, com filtro (sem site, sem Instagram) |
   | `/novo` | cadastra a empresa (só o nome é obrigatório) |
   | `/diag` | o raio-X: ponto forte, gargalo e **previsão de faturamento** — já com mercado e concorrência dentro |
   | `/plano` | vira plano executável, no prazo que você escolher (com Mazy, vira briefing pras skills dele) |
   | `/casos` | registra resultado e a Logic **aprende o seu mercado** |
   | `/painel` | abre o painel local com tudo organizado (empresas, leads, config) |
   | `/conectar` | (opcional) liga ao painel online — cola o token do site 1 vez e pronto |
4. **Checar o essencial:** o Logic coleta dado público via web — confirmar que o
   ambiente do usuário tem acesso a `WebSearch`/`WebFetch`. Se não tiver, avisar que a
   coleta automática fica limitada (mas o usuário ainda pode colar dados manualmente).
5. **Apontar o vídeo** (se configurado no painel) pra quem prefere ver a explicação.
6. **Comandos no menu `/`:** o clone normal cria uma pasta `logic/` com tudo dentro
   (a `.claude/` fica na raiz dela). Pra os comandos aparecerem no `/`, essa pasta
   `logic/` precisa ser o workspace aberto. **Não é motivo de alarme — só oriente:**
   *"Abre a pasta `logic` como workspace (File → Open Folder → seleciona `logic`) que
   os comandos aparecem no `/`."* Se você já estiver dentro dela e mesmo assim não
   aparecerem na hora, é só recarregar a janela: *"aperta `Ctrl+Shift+P` → 'Reload
   Window'."* Nunca trate isso como erro do sistema — é só onde a janela está apontando.
7. **Conduzir ao primeiro passo:** *"É só me dizer o nome de uma empresa que eu rodo o /novo."*

Não pedir nada além disso. Rápido, acolhedor, e já joga o usuário pro valor.

## Reconhecer o código do painel sem perguntar o que é

Quem chegou aqui pelo painel online (`logic-saas.vercel.app`) recebeu **dois códigos**
pra colar em sequência: 1) o comando de clone (a frase "Clona o
https://github.com/6Win/logic.git..."), 2) o token de sync (uma string sem espaço, tipo
"cm..." ou um id de workspace). Se o segundo código chegar **em qualquer momento** —
logo depois do primeiro, no meio da apresentação, até antes de você terminar a
boa-vindas — **não pergunte "o que é isso?" nem trate como texto solto.** Reconheça na
hora que é o token do painel e rode `/conectar` com ele, sem parar o fluxo de boas-vindas
por causa disso (dá pra confirmar a conexão em 1 linha e seguir pro resto do
`/instalar` — não precisa escolher entre um ou outro).
