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

**Pelo Claude (mais rápido)** — crie uma **pasta vazia**, abra ela no Claude Code e cole:

```
Rode: git clone https://github.com/6Win/logic.git .
(com o ponto no final, pra clonar aqui mesmo sem criar subpasta) e depois rode o /instalar.
```

**Pelo terminal (mais previsível):**

```
git clone https://github.com/6Win/logic.git
cd logic
code .
```

Na janela do VS Code: terminal integrado → `claude` → `/instalar`.

> ⚠️ **Importante:** abra a pasta **`logic` como workspace** (File → Open Folder →
> selecione a pasta `logic`). Se você abrir a pasta de cima, os comandos não aparecem
> no menu `/`. A `.claude/` tem que ficar na raiz do que você abriu.

O `/instalar` roda uma vez, te dá as boas-vindas e mostra o fluxo. Depois é só
`/novo` pra estudar sua primeira empresa.

> 🎥 **Vídeo (3–5 min):** o painel (`painel/index.html`) tem um espaço pra um vídeo
> curto de walkthrough. Grave um Loom e cole o embed no lugar indicado no `index.html`.

## Os comandos

| Comando | O que faz |
|---------|-----------|
| `/instalar` | boas-vindas + apresenta o fluxo (primeira vez) |
| `/novo` | cria o contexto da empresa (só o nome é obrigatório) |
| `/diag`  | raio-X em 3 etapas — pare em qualquer uma |
| `/pesquisa`     | concorrentes, mercado, tendências |
| `/plano`        | transforma o diagnóstico em plano de ação |
| `/casos`        | registra resultados e aprende com eles |
| `/leads`   | acha clientes ideais por região e nicho |
| `/painel`       | atualiza o dashboard visual |

## Precisa de chave de API?
Não pra usar. Diagnóstico, pesquisa, plano e casos rodam **de graça** só com o Claude.
Só a `/leads` fica melhor com uma **chave do Google Maps** (opcional, do próprio
usuário): sem ela usa OpenStreetMap + busca (mais limitado, cobertura BR irregular); com
ela, lista completa + filtro "sem site" certeiro + raio + mapa no painel. Detalhes na aba
**Guia** do painel.

## O fluxo

```
/novo → /diag → /pesquisa → /plano → (executa) → /casos
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
