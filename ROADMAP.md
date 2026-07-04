# Roadmap — próximos passos do Logic

> O MVP (6 comandos + cérebro + painel + docs) está pronto e validado na Chatuba.
> Aqui ficam as decisões e tarefas parkadas pra depois — pra não se perder nada.

## 🔒 Segurança / proteção do IP (dono)
- **Os usuários não correm risco** — o risco é do **dono**: alguém pegar o `_nucleo`
  (método + rubricas + lente) e copiar o diferencial.
- Ao subir no GitHub: **repositório PRIVADO**.
- Decidir o que fica exposto vs. protegido: o valor está no `_nucleo/` (método). Pensar
  em o que distribuir e como (ex.: separar o "motor" do que o usuário final precisa ver).
- Rever antes de qualquer distribuição pública.

## 🧪 Mais testes de qualidade
- Rodar o `/diagnostico` + `/pesquisa` + `/plano` em **2–3 empresas reais** além da
  Chatuba (nichos diferentes) pra confirmar que a qualidade se mantém.
- Só depois disso considerar o produto "validado pra distribuir".

## 🎨 Painel v2 (HTML bonito e funcional)
- Substituir o painel atual por um HTML **muito mais organizado e legível**.
- **Identidade visual:** preto, branco e vermelho.
- **Sem emoji** — usar tipografia, símbolos e representações limpas no lugar.
- Possível **animação** (referência de um site que o dono curtiu) aplicada à identidade.
- Mostrar tudo (clientes, diagnósticos, pesquisas, planos, casos, progresso) de forma clara.
- Fazer **depois** dos testes de qualidade.

## 🎥 Vídeo de onboarding
- O dono grava um Loom (3–5 min: instalar, usar, fluxo, comandos).
- O Logic entrega o **roteiro**; o dono grava e manda o link; embed no painel.
- (Roteiro a produzir.)

## 🚀 GitHub (FEITO) + estratégia de distribuição
- ✅ Repositório criado: **github.com/6Win/logic** — hoje **PRIVADO**.
- ✅ URL real já no README ("cola 2 linhas no Claude").

**Plano de lançamento (decisão do dono):**
- **Beta:** abrir **público** ao lançar, com a mensagem "v1, muito mais vindo" (repele
  cópia: quem copia foto estática fica pra trás). Alcance > controle.
- **Depois (cobrança):** tornar **privado** e liberar por convite/sistema de venda.
- ⚠️ **Verdade importante:** tornar privado depois **NÃO apaga** as cópias que já foram
  baixadas na fase pública — quem pegou, fica com a v1 pra sempre. O moat real continua
  sendo **atualização contínua + ser o oficial + suporte**, não esconder o arquivo.
- Alternativa: manter beta **privado com convites** desde já (mais controle, menos alcance).
