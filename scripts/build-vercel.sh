#!/usr/bin/env bash
set -euo pipefail

(cd rusalen && npm install && VITE_BASE=/ VITE_PROJECT_NAME=rusalen npm run build)
(cd jivica && npm install && VITE_BASE=/живица/ VITE_PROJECT_NAME=jivica npm run build)

rm -rf dist
mkdir -p "dist/живица"
cp -r rusalen/dist/. dist/
cp -r jivica/dist/. "dist/живица/"
