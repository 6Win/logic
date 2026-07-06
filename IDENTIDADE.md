# Identidade visual da Logic

Fonte única da marca. Qualquer peça visual (painel, briefing, imagem, capa)
segue isto. Sem cor de destaque — a força vem do preto/branco e da estrutura.

## Símbolo

Um "L" modular feito de 3 blocos brancos, cantos arredondados:
- dois quadradinhos empilhados (topo-esquerda),
- uma barra larga embaixo, ocupando toda a largura.

Representa **estrutura, organização e clareza** — o sistema e a lógica por trás
de cada decisão. Usar o símbolo sozinho (sem o wordmark) quando o contexto já
diz que é a Logic. Área de proteção mínima: 2x ao redor (x = altura de um bloco).

Implementação em CSS (usada no painel `site/index.html`):
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

Wordmark **LOGIC** em caixa alta, geométrico, espaçamento aberto. Lockup
vertical (símbolo em cima, LOGIC embaixo) e assinatura horizontal existem, mas
**no painel usamos só o símbolo**.

## Paleta

| Uso            | Hex       |
|----------------|-----------|
| Branco (tinta) | `#FFFFFF` |
| Painel         | `#111111` |
| Painel 2       | `#1A1A1A` |
| Fundo          | `#000000` |

Sem outra cor de destaque. Estados (ativo, sucesso) usam o próprio branco em
opacidades diferentes.

## Tipografia

- **Principal:** Satoshi (peso Black nos títulos). Formas limpas, precisão,
  força, sofisticação.
- Fallback: system-ui, sans-serif.

## Assinatura da marca

`SYSTEM · STRUCTURE · DECISION · CLARITY` — usada em rodapé/capa.

## Usos incorretos

Não distorcer, não recolorir, não rotacionar, não adicionar contornos ao
símbolo.
