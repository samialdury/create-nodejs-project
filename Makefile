PROJECT_NAME	:= create-nodejs-project

SRC_DIR 			:= ./src
TEST_DIR 			:= ./test

NPM_BIN 			:= ./node_modules/.bin

TSC 					:= $(NPM_BIN)/tsc
TS_NODE_DEV		:= $(NPM_BIN)/ts-node-dev
VITEST				:= $(NPM_BIN)/vitest
ROME					:= $(NPM_BIN)/rome
PINO_PRETTY   := $(NPM_BIN)/pino-pretty

.PHONY: help
# help: show this help
# find all lines with two # | and : | exclude fgrep | extract name and description | create table
help:
	@echo
	@echo $(PROJECT_NAME)
	@echo
	@fgrep -h "#" $(MAKEFILE_LIST) | fgrep : | fgrep -v fgrep | sed -e $$'s/#[[:blank:]]*\([^:]*\):\(.*\)/\\1##\\2/' | column -t -s '##'
	@echo

.PHONY: install
# install: install all dependencies
install:
	@pnpm i

.PHONY: build
# build: build TS
build:
	@rm -rf ./build
	@$(TSC) --build --force

.PHONY: dev
# dev: run TS (watch mode)
dev:
	@$(TS_NODE_DEV) -r dotenv/config --transpile-only --respawn --exit-child ./src/main.ts | $(PINO_PRETTY)

.PHONY: run-js
# run-js: run built JS
run-js:
	@node ./build/src/main.js

.PHONY: test-watch
# test-watch: run tests (watch mode)
test-watch:
	@$(VITEST) watch

.PHONY: test
# test: run tests
test:
	@$(VITEST) run

.PHONY: coverage
# coverage: run test coverage
coverage:
	@$(VITEST) run --coverage

.PHONY: format
# format: run Rome format
format:
	@$(ROME) format --write $(SRC_DIR) $(TEST_DIR) 

.PHONY: check
# check: run Rome check
check:
	@$(ROME) check --apply-suggested  $(SRC_DIR) $(TEST_DIR)

.PHONY: lint
# lint: run Rome format & check
lint: format check
