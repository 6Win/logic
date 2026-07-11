#!/usr/bin/env node
// CLI de sync — Logic local ↔ painel online (logic-saas).
// Empacota o resultado que a Logic gerou aqui (diagnóstico, plano, leads ou
// caso) e envia pro /api/sync do painel, autenticado pelo token da conta.
//
// Uso:
//   node scripts/sync.mjs <arquivo.json>
//
// Config (nesta ordem de prioridade):
//   1. Variáveis de ambiente LOGIC_API_URL e LOGIC_SYNC_TOKEN
//   2. Arquivo scripts/sync.config.json: { "url": "...", "token": "..." }
//   3. Se "url" não vier de nenhum dos dois, usa o painel oficial
//      (https://logic-saas.vercel.app) — só o token é obrigatório.
//
// O arquivo.json precisa ter o campo "tipo": "diagnostico" | "plano" |
// "leads" | "caso" — é o contrato que /api/sync espera. O token vem do
// painel (Visão geral, depois de entrar em logic-saas.vercel.app), e é
// salvo aqui por /conectar — normalmente você não roda isto na mão, a
// Logic chama sozinha no fim de /diag, /plano, /leads e /casos.

import { readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PAINEL_OFICIAL = "https://logic-saas.vercel.app";

const args = process.argv.slice(2);
const arquivo = args.find((a) => !a.startsWith("--"));

if (!arquivo) {
  console.error("Uso: node scripts/sync.mjs <arquivo.json>");
  process.exit(1);
}

let url = process.env.LOGIC_API_URL;
let token = process.env.LOGIC_SYNC_TOKEN;

if (!token) {
  const configPath = join(dirname(fileURLToPath(import.meta.url)), "sync.config.json");
  if (existsSync(configPath)) {
    const config = JSON.parse(readFileSync(configPath, "utf8"));
    url = url || config.url;
    token = token || config.token;
  }
}

url = url || PAINEL_OFICIAL;

if (!token) {
  console.error(
    "Ainda não conectado ao painel. Roda /conectar e cola o token que aparece em " +
      "logic-saas.vercel.app (Visão geral, depois de entrar/criar conta)."
  );
  process.exit(1);
}

if (!existsSync(arquivo)) {
  console.error(`Arquivo não encontrado: ${arquivo}`);
  process.exit(1);
}

const payload = JSON.parse(readFileSync(arquivo, "utf8"));
if (!payload.tipo) {
  console.error(
    'O JSON precisa ter o campo "tipo": "diagnostico" | "plano" | "leads" | "caso".'
  );
  process.exit(1);
}

const endpoint = url.replace(/\/$/, "") + "/api/sync";
const resposta = await fetch(endpoint, {
  method: "POST",
  headers: { "content-type": "application/json", "x-sync-token": token },
  body: JSON.stringify(payload),
});

const corpo = await resposta.json().catch(() => ({}));
if (!resposta.ok) {
  console.error(`Erro ${resposta.status}:`, corpo.erro ?? corpo);
  if (corpo.detalhes) console.error(JSON.stringify(corpo.detalhes, null, 2));
  process.exit(1);
}

const rotulos = {
  diagnosticoId: "Diagnóstico salvo",
  planoId: "Plano salvo",
  inseridos: "Lead(s) importado(s)",
  casoId: "Caso salvo",
};

const chaveEncontrada = Object.keys(rotulos).find((k) => k in corpo);
if (chaveEncontrada) {
  console.log(`✓ ${rotulos[chaveEncontrada]}: ${corpo[chaveEncontrada]} — já está no painel online.`);
} else {
  console.log("✓ Sincronizado — já está no painel online.");
}
