---
name: casos
description: >
  Registra o resultado depois da execução de um plano — resultados, ROI, métricas,
  aprendizados, erros, melhorias. Personaliza o Logic pra aquele negócio ao longo
  do tempo. Use quando o usuário disser "caso", "/casos", "registra o resultado",
  ou trouxer o resultado de uma ação executada.
---

# /casos — registra o resultado e aprende

Fecha o ciclo. Serve o uso próprio (o dono acompanhando a evolução) e faz o Logic
ficar cada vez mais personalizado pra aquele negócio.

## Antes
Ler `clientes/<empresa>/plano.md` — o que foi planejado, com que métrica.

## O que o caso responde — 5 perguntas fixas
Não é registro solto. Responde, nessa ordem:
1. **📌 O que foi executado?** Só o que realmente aconteceu — não o plano inteiro.
2. **📈 O que mudou?** Números, antes → depois.
3. **💰 Qual o impacto financeiro?** Mesmo estimado — e **com nível de confiança em
   cada número** (🟢 Alta / 🟡 Média / 🔴 Baixa), porque nem sempre há acesso aos dados
   reais. Mostrar a confiança é o que mantém a credibilidade. Ex.: *"Receita retida
   R$180 mil/ano — 🟡 Média"* · *"Economia R$42 mil — 🔴 Baixa (baseada em benchmark)"*.
4. **🧠 O que aprendemos?** Hipótese × resultado — **inclusive quando a hipótese
   estava errada** (ex.: "achávamos que era preço; era previsibilidade da entrega").
   É o que alimenta o cérebro.
5. **📚 Serve pra outras empresas?** Se o padrão é generalizável (ex.: qualquer
   operação logística) → vira **nota nova em `base-conhecimento`**. Se é específico →
   fica só no cliente. Assim o Logic melhora sem misturar tudo.

Mais três seções fixas:
- **🎖️ Vitória mais importante** — UMA frase, o ganho de NEGÓCIO (não a métrica; o que
  ela significou). Vira praticamente o case. Ex.: *"O ganho não foi reduzir reclamações
  — foi impedir o profissional de migrar pro concorrente."*
- **Antes × Depois visual** — semáforo das métricas-chave, do 🔴 pro 🟢. É o que vende
  o resultado. ⚠️ Só com número REAL de execução — nunca inventar.
- **🔁 O que mudou no cérebro do Logic** — se a pergunta 5 gerou nota nova, mostrar
  explicitamente: nome da nota + categoria + confiança. A pessoa vê a IA ficando mais
  inteligente na frente dela. Ex.: *Nova nota: "Em operações logísticas, previsibilidade
  supera preço" · Categoria: Operações · Confiança: Alta.* Se não gerou nota, dizer que
  o aprendizado ficou só neste cliente.

## O que fazer
1. Preencher o caso em `clientes/<empresa>/casos.md` (acumula — não sobrescreve; cada
   ciclo é uma entrada nova, datada).
2. **Fechar o loop com o diagnóstico:** a hipótese/gargalo estava certo? A métrica-mãe
   do plano melhorou? Comparar previsto × realizado.
3. **Extrair o aprendizado em 1 frase** (o equivalente ao insight-âncora, mas do
   resultado): o que esse cliente ensinou que muda como agir no próximo.
4. Atualizar o Painel do cliente com o novo status/progresso.
5. Se o aprendizado vale pra outros negócios (um padrão, não um caso isolado), sugerir
   registrá-lo como **nota nova em `_nucleo/base-conhecimento/`** — assim o **produto**
   evolui, não só o cliente. É o mecanismo que faz o Logic ficar mais inteligente com o uso.
6. **Feedback loop da própria Logic:** se o caso revelou que uma recomendação/entrega da
   Logic **funcionou ou furou** na prática, registrar uma linha em
   `_nucleo/aprendizados-do-sistema.md` (padrão de entrega, não do negócio). A cada ~15–20
   registros, esse arquivo dispara o refino das skills. Ver o arquivo pro formato e a trava.
7. Regenerar o painel (`site/`).

## Estrutura de cada entrada (modelo)
```
## [data] — [ciclo/ação]

  ANTES              →   DEPOIS          (só com número real)
🔴 OTIF        78%    →  🟢 92%
🔴 SAC         5d15h  →  🟢 18h
🔴 Reclam.log. 64%    →  🟢 22%

1. 📌 Executado: [o que de fato rodou]
2. 📈 Mudou: [antes → depois, além da tabela]
3. 💰 Impacto: [+% recompra, receita/economia — cada nº com confiança 🟢🟡🔴]
4. 🧠 Aprendemos: [hipótese × resultado]
5. 📚 Generalizável?: [sim → nota nova em base-conhecimento / não → fica no cliente]
🎖️ Vitória mais importante: [uma frase]
🔁 Cérebro: [nova nota criada + categoria + confiança / ou "ficou só no cliente"]
Próximo ciclo: [o ajuste]
```
