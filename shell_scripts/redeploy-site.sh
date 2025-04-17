#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT"

git fetch origin main
git reset --hard origin/main

sudo docker compose down
sudo docker compose up -d --build --remove-orphans

sudo docker image prune -f
echo "Redeployment complete :)"
