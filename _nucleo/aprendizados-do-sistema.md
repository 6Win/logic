# Aprendizados do sistema — o feedback loop da Logic

> O upgrade que a maioria ignora: a Logic não fica melhor só com mais dado bruto — fica
> melhor com **iteração**. Este arquivo registra **o que funcionou e o que não funcionou
> nos próprios outputs da Logic** (não no negócio do cliente — isso é o `/casos`). É a
> memória de como a Logic entrega, pra ela se refinar sozinha.

## Como usar (barato, contínuo)
1. **Registre uma linha** sempre que houver sinal sobre a **entrega** da Logic:
   - o usuário **elogiou / disse que ajudou** algo específico (ex.: "a projeção em número
     foi o que fechou");
   - o usuário **corrigiu / reclamou** (ex.: "ficou raso", "muito jargão", "traço feio");
   - um `/casos` mostrou que uma recomendação da Logic **funcionou ou furou** na prática.
2. **Formato:** `[data] · [contexto: skill/entrega] · FUNCIONOU/FALHOU · [o padrão em 1 frase]`
3. **Trigger de refino:** a cada **~15–20 registros**, revisar este arquivo, achar os
   **padrões repetidos** e **ajustar as skills** (`.claude/skills/*`) ou as notas da
   `base-conhecimento/` de acordo. Com trava: fazer backup antes, e só consolidar padrão
   que apareceu **mais de uma vez** (um caso isolado não vira regra).

## Distinção importante
- `/casos` = aprende sobre o **negócio do cliente** (padrão de nicho → nota nova em `base-conhecimento`).
- Este arquivo = aprende sobre a **própria Logic** (padrão de entrega → refino de skill).
Os dois juntos = a Logic fica mais inteligente com o uso, por dois eixos.

## Registros

<!-- Ex.: 2026-07-05 · /diag entrega · FUNCIONOU · projeção de faturamento em número (com [estimativa] rotulada) é o que mais move o dono a avançar. -->
<!-- Ex.: 2026-07-05 · painel · FALHOU · linhas divisórias finas ("traços") entre blocos ficam feias; separar por espaço, não por fio. -->
