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

## Regras
- **Leia as fontes**, não só os snippets. `WebFetch` no site e perfis.
- **Anote a fonte de cada dado** (URL/perfil) — a rubrica exige.
- **Pare quando tiver o suficiente pra concluir**, não quando esgotar a internet.
  Foco em qualidade, não em quantidade de buscas.
- Salvar os achados brutos em `clientes/<empresa>/fontes/` quando fizer sentido.
