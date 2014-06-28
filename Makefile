NODE_BIN ?= node_modules/.bin

JSHINT ?= $(NODE_BIN)/jshint
MOCHA ?= $(NODE_BIN)/mocha

.PHONY: all lint test

all: lint test

lint: node_modules
	@$(JSHINT) index.js example test
	@echo "Linted!"

node_modules: package.json
	@npm install

test: node_modules
	@$(MOCHA) --reporter spec --slow 300
