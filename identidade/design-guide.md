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

Arquivo: `identidade/simbolo.svg`.

## Logotipo
A palavra **"LOGIC"**, sempre em caixa alta, peso **Black (900)**, letter-spacing
levemente negativo. Construído com formas limpas e proporções geométricas —
transmite precisão, força e sofisticação. Nunca escrever "Logic Studio" ou
variações — o nome é só **LOGIC** (no símbolo+wordmark) ou **Logic** (em texto
corrido).

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

---

## Tipografia
- **Principal (única família): Satoshi.** Peso **Black (900)** pra título e
  wordmark; peso **Medium/Regular (400–500)** pro corpo de texto.
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

---

## Nota sobre arquivos antigos
`logo-branco.png`, `logo-preto.png` e `logo-vermelho.png` (wordmark em grotesca
bold, sem o símbolo) são de uma versão **anterior e descartada** da marca — não
usar em peça nova. Os arquivos oficiais agora são os `.svg` listados acima.
