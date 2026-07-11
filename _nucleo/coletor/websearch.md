# Coletor — como coletar dado público em camadas

> A coleta do Logic é 100% via `WebSearch` + `WebFetch` (nativos, grátis, zero
> setup). A qualidade do diagnóstico depende do **rigor** desta coleta. Uma busca
> só = genérico. Camadas = material real.
>
> **Abstração:** as skills chamam "o coletor". Hoje o coletor é WebSearch. No
> futuro, um adaptador Google Places pode ser plugado aqui sem mudar as skills.

## As camadas (rode todas as que fizerem sentido)

1. **Identidade da empresa**
   - `WebSearch`: `"<nome> <cidade>"`, `"<nome> <cidade> site"`
   - Objetivo: achar o site oficial, endereço, telefone, categoria. Se houver
     dúvida entre homônimos, usar o CNPJ pra desempatar.
   - Confirmar com o usuário: *"É esta empresa? [dados]"* antes de aprofundar.

2. **Site oficial** (`WebFetch` na home + páginas-chave)
   - Oferta/produtos/serviços, preços (se públicos), CTA, posicionamento,
     diferenciais declarados, prova social, clareza da proposta.

3. **Redes sociais** (`WebSearch` + `WebFetch` no que der)
   - Instagram/Facebook/LinkedIn: bio, frequência de post, tipo de conteúdo,
     engajamento aparente, coerência com o site.
   - ⚠️ Limite honesto: IG/FB bloqueiam scraping — nem sempre lê o feed completo.
     Colete o que der de fora e marque o resto como `[hipótese]`.

4. **Reputação / avaliações**
   - `WebSearch`: `"<nome> reclame aqui"`, `"<nome> avaliações google"`,
     `"<nome> reclamação"`. Nota, volume, o que os clientes elogiam/reclamam.
   - Ouro puro: as reclamações revelam gargalos reais de operação e conversão.

5. **Concorrentes (inicial)**
   - `WebSearch`: `"<nicho> <cidade>"`, `"melhores <nicho> <cidade>"`.
   - Pegar 1–3 concorrentes e comparar posicionamento/oferta/presença.

6. **Contexto de mercado** (quando relevante pro diagnóstico)
   - Tendências do nicho, faixa de preço praticada, sazonalidade.

7. **Enriquecimento sem chave** (quando o sinal muda a decisão)
   - Leitura técnica do site (CMS, pixel, HTTPS, oferta/CTA), robots/sitemap (SEO),
     histórico (Wayback), reputação (Reddit). Recipes em
     [enriquecimento-sem-chave.md](enriquecimento-sem-chave.md) — tudo público, sem chave.
     Usar só no shortlist que importa, pra não gastar token à toa.

## Regras
- **Cache primeiro (não repesquisar):** antes de coletar, **olhar
  `clientes/<empresa>/fontes/`**. Se já há coleta recente (mesmo dia / poucas horas),
  **reusar** e só buscar o que falta ou mudou. Salvar coleta nova lá **com a data no nome**
  (ex.: `fontes/2026-07-07-reputacao.md`) pra virar o cache da próxima vez.
- **Buscas independentes em paralelo** — concorrentes, mercado e reputação saem na mesma
  leva de chamadas (não em fila); depois junta.
- **Leia as fontes**, não só os snippets. `WebFetch` no site e perfis.
- **Anote a fonte de cada dado** (URL/perfil) — a rubrica exige.
- **Pare quando tiver o suficiente pra concluir**, não quando esgotar a internet.
  Foco em qualidade, não em quantidade de buscas.
- **Não busque o que é estático** (ICP, CAC, LTV, funil, níveis de consciência): isso vive
  na `base-conhecimento` — consulta, não WebSearch.

## Qualidade do dado (analista + engenheiro de dados, não só buscador)
Coletar é a parte fácil. O valor está em tratar o dado como quem entende dele —
não em repassar cru o que a busca trouxe.
- **Cruza antes de afirmar.** Dado que importa pra decisão (faturamento estimado,
  idade da empresa, se anuncia de verdade) não vale de uma fonte só — bate com uma
  segunda quando der (CNPJ oficial + site, Ad Library + Instagram ativo). Bateu
  diferente? Marca a divergência — nunca escolhe uma versão e esconde o conflito.
- **Deduplica antes de listar.** Em prospecção, o mesmo negócio aparece com nome
  levemente diferente, endereço arredondado, telefone com/sem DDD — normaliza
  (nome + telefone limpo + endereço) antes de contar como lead novo.
- **Desconfia do número fora da curva.** Dado estranho (empresa "há 40 anos" mas
  Instagram de ontem; nota 5.0 com 2 avaliações) é sinalizado como suspeito, não
  repassado como fato.
- **Falta é falta, não é zero.** Campo sem dado vira "não achei" explícito — nunca
  0 nem "não tem", porque isso contamina média e comparação entre leads/empresas.
- **Fecha com leitura, não com lista crua.** Depois de coletar, sintetiza o que os
  dados **juntos** dizem — é a diferença entre entregar uma planilha e entregar
  uma conclusão.
