# Identidade visual — Logic

> A identidade oficial da marca Logic. Qualquer peça visual que a Logic gerar
> (painel, post, proposta, slide) segue este guia. **Substitui qualquer versão
> anterior** (a versão com vermelho/Anton foi descartada — não usar mais).

---

## Símbolo
Três blocos formando um **"L"**: dois quadrados arredondados empilhados (o
"corpo") + uma barra larga arredondada embaixo (o "pé"). Representa **estrutura,
organização e clareza** — a construção modular expressa o sistema e a lógica por
trás de cada decisão.

Arquivo: `identidade/simbolo.svg`. Implementação em CSS (a que roda no
painel `site/index.html`, quando não se usa o SVG):
```html
<div class="symbol"><i></i><i></i><i></i></div>
```
```css
.symbol{width:22px;display:flex;flex-direction:column;gap:3px}
.symbol i{background:#fff;border-radius:3.5px;height:7px}
.symbol i:nth-child(1),.symbol i:nth-child(2){width:9px}
.symbol i:nth-child(3){width:22px}
```

## Logotipo
A palavra **"LOGIC"**, sempre em caixa alta, num desenho **geométrico próprio**:
letras largas, monoline (traço uniforme), terminais retos e cantos levemente
arredondados — o mesmo DNA arredondado do símbolo. **É vetor, não texto numa
fonte** (`logotipo.svg`): garante que a wordmark fique sempre idêntica, sem
depender de nenhuma fonte carregar. Transmite precisão, força e sofisticação.
Nunca escrever "Logic Studio" ou variações — o nome é só **LOGIC** (no
símbolo+wordmark) ou **Logic** (em texto corrido).

Arquivos: `identidade/logotipo.svg` (só a palavra) e `identidade/logo-lockup.svg`
(símbolo + palavra, uso mais comum — é o que aparece no header do painel).

---

## Paleta de cores
Só **preto, cinza e branco** — sem cor de destaque. Alto contraste, sem enfeite.

| Cor | Hex | Uso |
|---|---|---|
| Branco | `#FFFFFF` | símbolo, texto principal, cards em destaque |
| Cinza escuro 1 | `#111111` | fundo de card/painel |
| Cinza escuro 2 | `#1A1A1A` | fundo de card ativo/hover |
| Preto | `#000000` | fundo base |

**Proibido:** qualquer cor de destaque (roxo, vermelho, azul etc.), gradiente,
tom pastel. A marca é monocromática — o contraste é o único recurso visual.

**Única exceção — cor semântica de estado.** Nota de lead e prioridade de
problema/oportunidade (🔴 crítico · 🟠 importante · 🟢 oportunidade) usam a
paleta fixa de `apps/web/src/lib/cores-status.ts` (`CORES_STATUS`), porque ali
a cor carrega significado (bom/ruim, urgente/não-urgente), não é decoração.
Nunca usar essas cores em fundo de card, gráfico decorativo ou qualquer coisa
que não seja um selo de estado — um pontinho/badge pequeno, nunca uma área
grande da tela.

---

## Tipografia
- **Principal (única família): Satoshi.** Peso **Black (900)** pra título;
  peso **Medium/Regular (400–500)** pro corpo de texto. (A wordmark "LOGIC" é
  vetor próprio, ver seção Logotipo — não usa Satoshi.)
- Web: `https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap`
  (já carregado em `site/index.html`).
- Fallback: `system-ui, sans-serif`.

---

## Aplicações
- **Ícone/símbolo sozinho:** avatar, favicon, app icon — fundo preto, símbolo branco.
- **Assinatura (símbolo + wordmark):** header, rodapé, qualquer peça que precise
  se identificar rápido. É o `logo-lockup.svg`.
- **Card/UI:** fundo `#111111` ou `#1A1A1A`, borda 1px branca a 10-18% de opacidade,
  cantos arredondados (12-14px).
- **Hero/landing:** símbolo pequeno no canto + título grande em Satoshi Black.

---

## Espaçamento e proporções
- **Unidade base = x.** Todo espaçamento (gaps, paddings, margens) é múltiplo de `x`.
- **Área de proteção mínima:** `2x` livre ao redor do símbolo — nunca encostar
  outro elemento mais perto que isso.
- Cantos arredondados em tudo (símbolo, cards, botões) — nunca esquadro vivo.

---

## Versões
1. **Símbolo** — sozinho, quando o espaço é pequeno (favicon, avatar).
2. **Logotipo** — só a palavra "LOGIC", quando o símbolo não cabe ou já apareceu antes.
3. **Lockup** — símbolo + "Logic" lado a lado (o padrão, usado no painel).

## Usos incorretos
- ❌ Não distorcer (esticar largura/altura fora de proporção).
- ❌ Não alterar as cores (nada de símbolo azul, roxo etc. — sempre branco/preto).
- ❌ Não rotacionar o símbolo.
- ❌ Não adicionar contorno/stroke nos blocos — eles são sólidos, sem borda.

---

**Assinatura da marca:** *System · Structure · Decision · Clarity.*

Os arquivos oficiais são os `.svg` listados acima (`simbolo.svg`, `logotipo.svg`,
`logo-lockup.svg`). A versão antiga em vermelho/Anton foi descartada.
