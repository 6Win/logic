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
> 👋 **Bem-vindo ao Logic.**
>
> Eu sou uma camada de inteligência que estuda empresas a fundo, acha o gargalo, mapeia
> a concorrência e monta um plano de ação — tudo aqui dentro do Claude, na sua máquina,
> de graça.
>
> A ideia é simples: em vez de "o que eu faço com esse cliente?", você recebe um
> diagnóstico que faz o dono pensar *"eu não teria chegado nisso sozinho"*.
>
> Funciona em 5 passos, e você **para onde quiser**:
> `/novo_cliente → /diagnostico → /pesquisa → /plano → /casos`
>
> Bora? Me diz o **nome de uma empresa** (a sua ou a de um cliente) que eu já começo. 🚀

Manter curto, confiante e sem jargão. Não despejar a estrutura de pastas na cara do
usuário — só o essencial pra ele começar a usar em 30 segundos.

## O que fazer
1. **Dar as boas-vindas** e explicar em 2 linhas o que é o Logic: uma camada que
   estuda empresas a fundo, gera estratégia e organiza a execução — rodando aqui no
   Claude, de graça, na máquina do usuário.
2. **Confirmar a estrutura** (rápido): `_nucleo/` (cérebro), `clientes/` (memória),
   `painel/index.html` (dashboard). Não precisa listar arquivo por arquivo.
3. **Apresentar o fluxo e os comandos:**
   ```
   /novo_cliente → /diagnostico → /pesquisa → /plano → [executa] → /casos
   ```
   | Comando | O que faz |
   |---|---|
   | `/novo_cliente` | cadastra a empresa (só o nome é obrigatório) |
   | `/diagnostico` | raio-X em 3 etapas — pare em qualquer uma |
   | `/pesquisa` | concorrentes, mercado, oportunidade |
   | `/plano` | vira plano de ação executável |
   | `/casos` | registra resultado e aprende |
   | `/prospeccao` | acha clientes ideais por região e nicho |
4. **Checar o essencial:** o Logic coleta dado público via web — confirmar que o
   ambiente do usuário tem acesso a `WebSearch`/`WebFetch`. Se não tiver, avisar que a
   coleta automática fica limitada (mas o usuário ainda pode colar dados manualmente).
5. **Apontar o vídeo** (se configurado no painel) pra quem prefere ver a explicação.
6. **Conduzir ao primeiro passo:** *"Bora começar? Me diz o nome de uma empresa e eu
   rodo o /novo_cliente."*

Não pedir nada além disso. Rápido, acolhedor, e já joga o usuário pro valor.
