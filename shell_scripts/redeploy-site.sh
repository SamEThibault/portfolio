#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT"

git fetch origin main
git reset --hard origin/main

docker compose down
docker compose up -d --build --remove-orphans

docker image prune -f
echo "Redeployment complete :)"
