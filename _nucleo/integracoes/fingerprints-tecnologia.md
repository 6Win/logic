# Fingerprints de tecnologia — detecção de stack sem chave

> Destilado do banco de assinaturas do **Wappalyzer** (open source, MIT —
> `github.com/projectdiscovery/wappalyzergo` / `wappalyzer/wappalyzer`). Não copiamos o
> binário nem o DB inteiro (2000+ techs — peso à toa): copiamos **só as assinaturas que
> mudam uma decisão da Logic**. A "leitura técnica sem chave" (`WebFetch` na home) confere o
> HTML/headers contra esta tabela e detecta a stack **sem rodar nada e sem chave**.

## Como usar
1. `WebFetch` na home (e, se precisar, uma página interna). Pedir o HTML/trechos, não só resumo.
2. Procurar os **sinais** abaixo no HTML, nos scripts e (quando visível) nos headers.
3. Reportar o que casou + o que isso **significa pro negócio** (a coluna "leitura"). Nunca
   inventar: não casou nada → "stack não identificada" (não é o mesmo que "não tem").

## CMS / construtor de site — *o que roda o site*
| Tecnologia | Sinal (procurar no HTML/URL/script) | Leitura pro diagnóstico |
|---|---|---|
| WordPress | `/wp-content/`, `/wp-includes/`, `wp-json` | site editável, comum; SEO ok se bem-feito |
| Shopify | `cdn.shopify.com`, `Shopify.` , `myshopify.com` | e-commerce sério, tem estrutura de venda |
| Wix | `static.wixstatic.com`, `X-Wix-` header, `wix.com` | site de "arrasta e solta" — costuma ser fraco em SEO/perf |
| Squarespace | `squarespace.com`, `static1.squarespace` | site bonito mas travado, SEO limitado |
| Webflow | `assets.website-files.com`, `webflow` | site custom sem CMS pesado — bom sinal |
| Framer | `framerusercontent.com`, `framer.` | landing moderna, mas rasa em conteúdo |
| Elementor (WP) | `elementor`, `/elementor/` | page builder — costuma pesar a página (perf ruim) |
| Loja Integrada / Nuvemshop | `lojaintegrada`, `nuvemshop`/`tiendanube` | e-commerce BR de PME |
| Sem CMS / custom | React/Next/Vue nos bundles, sem os acima | site sob medida — geralmente mais maduro |

## E-commerce / pagamento — *vende online?*
| Sinal | Leitura |
|---|---|
| `woocommerce`, `/cart`, `add-to-cart` | loja WordPress |
| `stripe.com/js`, `js.stripe.com` | aceita cartão internacional |
| `mercadopago`, `mpago` · `pagseguro` | pagamento BR — vende online de fato |

## Analytics / pixel — *mede? dá pra fazer remarketing?*
| Tecnologia | Sinal | Leitura (isto move a nota do lead) |
|---|---|---|
| Google Analytics 4 | `gtag(`, `googletagmanager.com/gtag`, `G-XXXX` | mede tráfego — sabe de onde vem cliente |
| Google Tag Manager | `googletagmanager.com/gtm.js`, `GTM-` | tagueamento sério |
| **Meta Pixel** | `connect.facebook.net`, `fbq(` | **faz/pode fazer remarketing no Meta** |
| TikTok Pixel | `analytics.tiktok.com`, `ttq.` | anuncia/mede no TikTok |
| Hotjar / Clarity | `hotjar`, `clarity.ms` | estuda comportamento — maturidade alta |
| **Nenhum pixel/analytics** | nada dos acima | **não mede nada = não faz remarketing = oportunidade grande** |

## Marketing / captura — *tem funil?*
| Sinal | Leitura |
|---|---|
| `rdstation`, `rd-js` | RD Station — tem automação de marketing (maduro) |
| `mailchimp`, `hubspot`, `activecampaign` | e-mail/CRM ativo |
| `manychat`, `//mc.` | automação de DM/WhatsApp |
| `wa.me/`, `api.whatsapp` | tem WhatsApp como canal (bom) · ausência = furo de contato |

## Saúde técnica — *sinais rápidos de descuido*
| Checar | Sinal ruim (oportunidade) |
|---|---|
| HTTPS | URL abre em `http://` sem cadeado, ou "não seguro" |
| Mobile | sem `<meta name="viewport">` → não responsivo |
| Oferta/CTA | home sem dizer o que vende / sem botão de ação claro em 5s |
| Velocidade aparente | página pesada, muitos scripts (Elementor + plugins) |

## Regras
- **Marcar `[estimativa]`** — inferência de assinatura não é 100% (WebFetch nem sempre dá o
  HTML cru). O adaptador com chave (Wappalyzer/BuiltWith real) crava; ver a tabela em
  `_nucleo/coletor/enriquecimento-sem-chave.md`.
- **Só reportar o que muda a decisão** — "usa WordPress" só importa se leva a algo (SEO
  fraco, sem pixel, etc.). Não vira lista de tech por vaidade.
- **Fonte:** conceito e assinaturas derivados do Wappalyzer (open source). Manter esta
  tabela enxuta — ela é a curadoria, não o DB inteiro.
