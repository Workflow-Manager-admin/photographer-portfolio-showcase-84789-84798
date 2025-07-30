#!/bin/bash
cd /home/kavia/workspace/code-generation/photographer-portfolio-showcase-84789-84798/photography_portfolio_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

