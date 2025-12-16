# Agent Orchestrator Workspace

This workspace combines the **frontend orchestrator UI** (under `agent-orchestrator-main`) with the **FastAPI backend orchestrator** (under `agent-orchestrator`). Both stacks live alongside each other so you can iterate on the surface and the routing engine without jumping between repositories.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/sentilabs/v0-agent-orchestrator-frontend) [![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/eE3GXgFOAV1)

## Frontend stack (`agent-orchestrator-main`)
- **Next.js + Tailwind UI**: The React surface renders query orchestration controls, feature flags, and server-management cards with composable primitives in `components/ui`.
- **Auto-sync with v0**: The repo mirrors changes pushed from your v0.app chat, and every commit triggers a Vercel deployment so the UI stays in sync.
- **Development workflow**:
  1. `cd agent-orchestrator-main`
  2. `pnpm install`
  3. `pnpm dev` → http://localhost:3000
  4. `pnpm build` / `pnpm lint` before release commits.

## Backend stack (`agent-orchestrator`)
- **FastAPI orchestrator API**: `main.py` exposes `/api/route`, `/api/execute`, `/api/servers`, and `/api/admin/register-server` to manage MCP server routing and execution decisions.
- **Routing + registry modules**: `routing.py` picks which MCP servers handle a query and `registry.py` keeps the server inventory + health metadata.
- **Start locally**:
  1. `cd agent-orchestrator`
  2. `python -m venv venv` (or `venv_windows` on PowerShell)
  3. `venv\\Scripts\\Activate.ps1` / `source venv/bin/activate`
  4. `pip install -r requirements.txt`
  5. `uvicorn main:app --reload`

## Deployments
- **Frontend**: https://vercel.com/sentilabs/v0-agent-orchestrator-frontend
- **Backend**: Run locally or containerize the FastAPI app (use `start-server.ps1` to launch with the right virtualenv).

## Keep both in sync
1. Work inside the repo you are changing (`agent-orchestrator-main` for UI, `agent-orchestrator` for backend routing).
2. Commit and push to the same remote so `git push agent-orchestrator main` updates both sides from the parent folder.
3. Re-run `git pull agent-orchestrator main --allow-unrelated-histories` if you ever see divergent histories.

Questions? Just ask: this workspace mixes two stacks but pushes to the same GitHub remote (`mcpmessenger/agent-orchestrator`) so you always land in the right place.
