# Logic

**A inteligência estratégica que estuda uma empresa a fundo, acha o dinheiro parado
na mesa e entrega o plano pronto pra executar — rodando dentro do Claude, na sua máquina.**

A Logic não substitui o Claude; ela o especializa. Enquanto ferramentas de prospecção só
*encontram* empresas, a Logic **estuda o negócio a fundo** e decide onde está o dinheiro.
Ela funciona como o braço direito do dono: pensa a estratégia e o dia a dia pra te liberar
pra crescer.

São duas frentes, cada uma vale sozinha:

1. **Prospecção** — acha clientes novos por região e nicho, já filtrando os que têm
   oportunidade real (sem site, digital fraco). O cliente certo, não uma lista solta.
2. **Diagnóstico, estratégia e execução** — o raio-X do negócio: acha o gargalo, projeta
   quanto dá pra faturar a mais arrumando, e vira plano. Serve pra pré-venda (chegar no
   cliente já entendendo o negócio dele), pra venda ampliada (entregar estratégia + plano e
   cobrar mais) e pro seu próprio negócio.

Sem servidor. Sem banco de dados. Sem cartão de crédito. Tudo roda no Claude, de graça, na
sua máquina.

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

O `/instalar` roda uma vez, te dá as boas-vindas e mostra o fluxo. Depois é só dizer o
nome de uma empresa que a Logic começa.

## Você não precisa decorar comando

É só conversar do jeito que você falaria com uma pessoa: *"analisa essa empresa"*, *"acha
clientes de barbearia no Recreio"*, *"monta o plano de 90 dias"*. A Logic entende a
intenção e faz. Os comandos com barra abaixo continuam existindo pra quem prefere, mas são
só um atalho.

## Os comandos

| Comando | O que faz |
|---------|-----------|
| `/instalar` | boas-vindas + apresenta o fluxo (primeira vez) |
| `/novo` | cria o contexto da empresa (só o nome é obrigatório) |
| `/diag`  | o raio-X: ponto forte, gargalo e previsão de faturamento — já com mercado e concorrência dentro |
| `/plano` | transforma o diagnóstico em plano de ação, no prazo que você escolher (10 a 180 dias ou 12 meses) |
| `/casos` | registra resultados e a Logic aprende com eles |
| `/leads` | acha clientes ideais por região e nicho, com filtro de oportunidade |
| `/painel` | abre o painel local (`site/`) com tudo organizado |

> A pesquisa de concorrência e mercado deixou de ser um comando separado. Agora ela vem
> **dentro do `/diag`**, num raio-X só.

## Precisa de chave de API?

Não pra usar. Diagnóstico, plano e casos rodam **de graça** só com o Claude. A chave entra
só na `/leads`, e ali ela é **recomendada**: é a sua própria chave do Google Maps (grátis
dentro da cota). Sem ela, a `/leads` roda no modo grátis (OpenStreetMap + busca), que
funciona mas tem cobertura irregular no Brasil e dá mais trabalho. Com a chave, a lista sai
completa e precisa, com raio e mapa no painel, gastando bem menos. Detalhes na aba
**Config** do painel.

## O fluxo

```
/novo → /diag → /plano → (executa) → /casos
   e /leads roda quando você quiser encher o pipeline
```

Cada etapa entrega valor sozinha. A Logic conduz do começo ao fim, e você para quando quiser.

## Com o MazyOS

Se você usa o **MazyOS** (o "sistema operacional do negócio no Claude", que executa
conteúdo, tráfego pago e automação), os dois se completam. A Logic é a **cabeça** (decide o
quê e por quê) e o Mazy é a **mão** (executa). A Logic detecta o Mazy sozinha, deixa o
briefing pronto num arquivo, e o comando do Mazy executa em cima. Sem o Mazy, a Logic roda
100% sozinha do mesmo jeito.

## Onde ficam as coisas
- `_nucleo/` — o cérebro do produto (método, frameworks, rubricas de qualidade e comunicação)
- `clientes/` — um estudo por empresa (a sua memória)
- `site/` — o painel local que organiza tudo (rode `cd site && npm start` → `localhost:3000`)
- `IDENTIDADE.md` — a identidade visual da marca (fonte única)
- `ARQUITETURA.md` — como o produto é pensado por dentro

---

## Evolução contínua

Esta é a **versão 2.0** — uma reformulação grande em cima do que os primeiros testes
mostraram: menos atrito no uso, entregas muito mais claras e um diagnóstico mais fundo (que
agora fala não só de onde está o problema, mas de como converter e ganhar mais dinheiro). O
resumo do que mudou está em [`atualizacoes.html`](atualizacoes.html).

E isto segue evoluindo rápido: mais frameworks no cérebro, coleta mais profunda e novas
integrações estão no forno. **Quem acompanha a versão oficial fica sempre à frente** — uma
cópia estática de hoje já nasce desatualizada amanhã. Acompanhe o repositório pra receber
cada atualização.

---

_O diferencial da Logic não é achar a empresa nem coletar dado. É transformar isso num
diagnóstico que faz o dono pensar: "eu não teria chegado nisso sozinho."_
