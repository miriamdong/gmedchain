#!/bin/bash

pushd ui && git diff --exit-code --quiet HEAD . && if [ $? -ne 0 ] || [[ ! -d ./node_modules ]]; then npm ci; fi && popd
