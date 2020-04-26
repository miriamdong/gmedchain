# Makefile

SHELL:=/bin/bash

# relative path to the construction site
radish34=./radish34

# over time, as the radish34 use-case is abstracted/generalized into
# the baseline protocol, the pushd/popd hacks will fade away...

.PHONY: build build-containers clean contracts deploy-contracts install-config npm-install start stop system-check reset restart test zk-circuits

default: build

build: npm-install contracts

build-containers: build
	@pushd ${radish34} && \
	npm run dockerize && \
	popd

clean: stop
	@$(radish34)/../bin/clean_npm.sh

contracts:
	@pushd ${radish34} && \
	npm run build:contracts && \
	popd

deploy-contracts: install-config
	@pushd ${radish34} && \
	npm run deploy && \
	popd

install-config:
	@pushd ${radish34} && \
	npm run install-config && \
	popd

npm-install:
	@pushd ${radish34} && \
	npm run build && \
	popd

start: system-check install-config build-containers
	@pushd ${radish34} && \
	npm run setup-circuits && \
	npm run deploy && \
	docker-compose up -d api-buyer api-supplier1 api-supplier2 ui && \
	popd

stop:
	@pushd ${radish34} && \
	docker-compose down --remove-orphans && \
	docker network rm \
		radish34_network-buyer \
		radish34_network-supplier1 \
		radish34_network-supplier2 \
		radish34_geth || true && \
	docker volume rm radish34_mongo-merkle-tree-volume || true && \
	popd

system-check:
	@npm run --silent system-check

reset: stop
	@pushd ${radish34} && \
	docker container prune -f && \
	docker volume rm \
		radish34_mongo-buyer \
		radish34_mongo-supplier1 \
		radish34_mongo-supplier2 \
		radish34_mongo-merkle-tree-volume \
		radish34_chaindata || true && \
	docker image rm \
		radish34_api-buyer \
		radish34_api-supplier1 \
		radish34_api-supplier2 \
		radish34_deploy \
		radish34_messenger-buyer \
		radish34_messenger-supplier1 \
		radish34_messenger-supplier2 || true && \
	rm -rf ./config && \
	rm -rf ./zkp/output && \
	popd

restart: stop start

test:
	@pushd ${radish34} && \
	npm run await-stack && \
	npm run test && \
	popd

zk-circuits:
	@pushd ${radish34} && \
	rm -rf ./zkp/output && \
	mkdir -p ./zkp/output && \
	npm run setup-circuits && \
	popd
