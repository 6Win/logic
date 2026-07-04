# Logic

**Uma camada de inteligência que estuda empresas a fundo, gera estratégia e
organiza a execução — rodando dentro do Claude, na sua máquina.**

O Logic não substitui o Claude: ele especializa. Enquanto ferramentas de
prospecção *encontram* empresas, o Logic **estuda profundamente** um negócio antes
da venda ou da implementação — e entrega um diagnóstico estratégico + plano de
ação personalizado.

Serve pra três coisas:
1. **Pré-venda** — chegue no cliente já entendendo o negócio dele (mais conversão).
2. **Venda ampliada** — entregue seu serviço + estratégia + plano (mais margem).
3. **Uso próprio** — melhore e escale o seu próprio negócio.

Sem servidor. Sem banco de dados. Sem cartão de crédito. Tudo roda no Claude, de
graça, na sua máquina.

---

## Ligando o sistema

Dois caminhos. Escolhe o que combina contigo.

**Pelo Claude (mais rápido)** — abre o Claude Code em qualquer pasta e cola:

```
Clona o https://github.com/6Win/logic.git na pasta atual,
entra nela e roda o /instalar.
```

**Pelo terminal (mais previsível):**

```
git clone https://github.com/6Win/logic.git
cd logic
code .
```

Na janela do VS Code: terminal integrado → `claude` → `/instalar`.

O `/instalar` roda uma vez, te dá as boas-vindas e mostra o fluxo. Depois é só
`/novo_cliente` pra estudar sua primeira empresa.

> 🎥 **Vídeo (3–5 min):** o painel (`painel/index.html`) tem um espaço pra um vídeo
> curto de walkthrough. Grave um Loom e cole o embed no lugar indicado no `index.html`.

## Os comandos

| Comando | O que faz |
|---------|-----------|
| `/instalar` | boas-vindas + apresenta o fluxo (primeira vez) |
| `/novo_cliente` | cria o contexto da empresa (só o nome é obrigatório) |
| `/diagnostico`  | raio-X em 3 etapas — pare em qualquer uma |
| `/pesquisa`     | concorrentes, mercado, tendências |
| `/plano`        | transforma o diagnóstico em plano de ação |
| `/casos`        | registra resultados e aprende com eles |
| `/painel`       | atualiza o dashboard visual |

## O fluxo

```
/novo_cliente → /diagnostico → /pesquisa → /plano → (executa) → /casos
                     │
          cada etapa entrega valor sozinha — pare quando quiser
```

## Onde ficam as coisas
- `_nucleo/` — o cérebro do produto (método, frameworks, rubrica de qualidade)
- `clientes/` — um estudo por empresa (a sua memória)
- `painel/index.html` — o dashboard que organiza tudo
- `ARQUITETURA.md` — como o produto é pensado por dentro

---

## 🚧 Versão 1 — isto é só o começo

O Logic está na **v1** e já entrega diagnóstico, pesquisa e plano no nível "eu pagaria
pra ler". Mas isto é a fundação — tem **muita coisa no forno**, e o produto evolui rápido:

- coleta automática mais profunda (identificação de empresa, dados públicos)
- painel visual novo e mais completo
- novos comandos e frameworks no cérebro
- integrações e automações

**Quem acompanha a versão oficial fica sempre à frente.** Uma cópia estática de hoje
já nasce desatualizada amanhã — o valor do Logic está na evolução contínua, não no
arquivo parado. Acompanhe o repositório pra receber cada atualização.

---

_O diferencial do Logic não é achar a empresa nem coletar dado. É transformar isso
num diagnóstico que faz o dono pensar: "eu não teria chegado nisso sozinho."_
