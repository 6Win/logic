# Auto-estudo — como a Logic aprende com o uso (com trava de segurança)

> A Logic não fica melhor só com mais dado bruto. Ela fica melhor com **iteração**:
> cada caso real ensina um padrão, e o próximo diagnóstico daquele nicho começa mais
> fundo. Este arquivo define **como** ela aprende e, principalmente, a **trava** que
> impede a Logic de aprender errado e envenenar o próprio cérebro.
>
> **A regra de ouro:** aprender é devagar e reversível. Nunca uma mudança no cérebro
> (skill ou nota) acontece sem poder ser desfeita em 1 passo. Prefira não aprender a
> aprender errado — um padrão falso contamina todos os diagnósticos futuros.

---

## Os dois eixos (o que a Logic aprende)

1. **Padrão de nicho** — o que um mercado ensina. Sai do `/casos` (resultado real de um
   cliente). Ex.: *"barbearia trava na recompra, não na aquisição"*. Vira **nota nova**
   em `_nucleo/base-conhecimento/06-aprendizados/`. O próximo `/diag` daquele nicho já
   começa sabendo onde olhar.

2. **Padrão de entrega** — o que a própria Logic acerta ou erra ao entregar. Sai de
   elogio/correção do usuário ou de um `/casos` que mostrou que uma recomendação furou.
   Vive em `_nucleo/aprendizados-do-sistema.md`. A cada ~15–20 registros, dispara o
   **refino das skills**.

Os dois mexem no **cérebro** (`_nucleo/`). Por isso os dois passam pela trava.

---

## A trava de segurança — os 2 níveis

A força da trava é **proporcional ao risco da mudança**. Criar coisa nova é barato;
mexer no que já existe é caro.

### Nível 1 — Aprendizado ADITIVO (cria nota nova · trava leve)
Criar uma nota nova em `06-aprendizados/` **não sobrescreve nada** — só soma. Risco baixo.
Regras (todas obrigatórias):
- **Nunca de um caso só.** Um resultado isolado é anedota, não padrão. Só vira nota se o
  padrão apareceu em **≥ 2 casos** OU o usuário confirmou explicitamente que é regra do
  nicho dele. Um caso só fica registrado no `casos.md` do cliente, não vira nota de produto.
- **Confiança rotulada.** Toda nota nova nasce com um grau: `Confiança: Alta / Média / Baixa`
  e diz de quantos casos saiu (ex.: *"de 3 barbearias"*). Baixa confiança = hipótese de
  nicho, usar com ressalva no diagnóstico.
- **Registrar sempre.** Toda nota criada entra no `_auto-estudo/registro.md` (data, nicho,
  caso de origem, confiança). Sem registro, não existe — é o que torna auditável e reversível.
- Backup não é necessário aqui (nada foi sobrescrito). Reverter = apagar a nota + marcar
  revertido no registro.

### Nível 2 — Aprendizado MUTANTE (edita nota ou skill que já existe · trava total)
Mexer numa nota existente da `base-conhecimento/` ou numa **skill** (`.claude/skills/*`)
muda comportamento estabelecido. Aqui pode nascer o erro que contamina tudo. Trava total,
os 6 passos, sem pular nenhum:

1. **BACKUP.** Antes de tocar o arquivo, copiar o original para
   `_nucleo/_auto-estudo/backups/AAAA-MM-DD_HHMM_<arquivo>.bak` (o nome preserva a data e
   qual arquivo). O backup é a rede — nunca editar sem ele.
2. **PROPOR.** Mostrar ao usuário a mudança exata (o antes → depois, em diff curto) e o
   **porquê** (de quais casos saiu o padrão). Nunca reescrever skill no silêncio.
3. **CONFIRMAR.** Skill só muda com **OK explícito do usuário**. (Nota da base-conhecimento
   pode ir com confirmação mais leve; skill, nunca sem OK — skill é código de comportamento.)
4. **APLICAR.** Fazer a edição.
5. **REGISTRAR.** Lançar no `_auto-estudo/registro.md`: data, arquivo, o que mudou, de que
   casos saiu, caminho do backup, `status: ativo`.
6. **REVERTER (se precisar).** Ver a seção abaixo. Um passo, sempre disponível.

> Skills são carga estrutural (definem como a Logic age). A barra pra editar uma skill é
> **alta de propósito**: precisa de padrão repetido (≥ 2), backup, proposta e OK do usuário.
> Notas novas de nicho são o caminho comum e barato; refino de skill é raro e vigiado.

---

## Como reverter (a parte que faz a trava valer)

Reverter tem que ser trivial, senão a trava é decorativa.

**Aditivo (nota nova):**
1. Apagar a nota criada em `06-aprendizados/`.
2. No `registro.md`, marcar aquela entrada como `status: revertido (motivo)`.

**Mutante (nota/skill editada):**
1. Achar a entrada no `registro.md` e o caminho do `.bak` dela.
2. Copiar o `.bak` de volta por cima do arquivo (restaura o original exato).
3. Marcar a entrada como `status: revertido (motivo)`.

Rede extra: se a instalação usa git, cada mudança de cérebro é um diff — `git diff` mostra
o que a Logic mudou, e `git checkout <arquivo>` reverte. O backup em `.bak` existe pra
funcionar **mesmo sem git**, porque nem todo usuário versiona. Os dois caminhos coexistem.

**Quando reverter:** o padrão se mostrou falso num caso novo; o usuário reclamou que a
Logic ficou pior depois; ou uma nota de nicho estava tratando anomalia como regra. Na
dúvida entre manter um aprendizado duvidoso ou reverter, **reverta** — a regra de ouro.

---

## Onde ficam os arquivos
- **Este protocolo:** `_nucleo/auto-estudo.md` — como aprende e a trava.
- **Registro (auditoria):** `_nucleo/_auto-estudo/registro.md` — toda mudança de cérebro,
  datada, com origem, confiança, backup e status. É a caixa-preta do aprendizado.
- **Backups:** `_nucleo/_auto-estudo/backups/` — cópia de cada arquivo antes de uma edição
  mutante. Local, não versionado (é rede de segurança da máquina, não parte do produto).
- **Notas de nicho aprendidas:** `_nucleo/base-conhecimento/06-aprendizados/`.
- **Padrões de entrega:** `_nucleo/aprendizados-do-sistema.md`.

## Quem dispara
- `/casos` — no fim de cada registro, avalia se o caso gerou padrão de nicho (nível 1) e
  se revelou padrão de entrega (linha no `aprendizados-do-sistema.md`).
- Refino de skill (nível 2) — só quando o `aprendizados-do-sistema.md` acumula ~15–20
  registros e um padrão apareceu repetido. Nunca automático e calado.
