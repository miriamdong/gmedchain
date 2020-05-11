# Welcome to GMedChain

<div align="center">
  <img src="docs/assets/gmedchain-logo/gmedchain.png" />
  <p>
    We are providing healthcare supply chain solutions so more people have access to safe, affordable & efficient medical care 
    <br/>
    around the world. 
  </p>
  <br/>
</div>

Lost supplies, fraudulent medicine, and supply chain confusion; in times like this, we understand medical equipment is a public resource, akin to the water we drink, the air we breathe, and the levels of freedom we should enjoy as a human right. To that end, visibility must be pervasive throughout the medical supply chain in order to better serve the public. 

With more than 3 million cases of COVID-19 worldwide, hospitals around the world are struggling to obtain safe and reliable supplies. Frontline healthcare workers are running low on resources, with no medicine to help. 

According to WHO, it is estimated that up to $200 billion worth of counterfeit pharmaceutical products are sold globally every year, according to the United Nations, up to US$2 trillion of procurement costs could be lost to corruption and fraud.

In real life, this means vital services are delayed, much-needed equipment never reaches hospitals, critical infrastructure is never built, and people's lives and well-being are needlessly at risk.

How do we improve this long and costly supply chain system so that more people can have timely access to better health services in both normal and difficult times? 



That is __GMedChain__.

# The platform

We've built a platform based on the [__Baseline Protocol__](https://github.com/ethereum-oasis/baseline), a joint project between Consensys, Microsoft and EY. 

The __GMedChain platform__ code is currently embedded inside the `/radish-api` directory. This name, Radish, came from the initial name of the Baseline protocol PoC, but we will rename it later. You don't need to deep dive into this directory if you just want to deploy the platform: a __Makefile__ is available, described in the section right above.

## Quickstart

A `Makefile` has been included for convenience; most of its targets wrap `npm`, `docker` and `solc` invocations.

Just want to get the __GMedChain platform__ running locally? The following sequence will build the monorepo, start the __GMedChain platform__ stack locally, deploy contracts and run the full test suite. *Note: this typically takes at least 20 minutes to complete.

```
make && make start && make test
```

### The demo UI

After running the above (`make test` optional) you can view the Radish34 demo by opening [http://localhost:3000](http://localhost:3000) in your browser.

Here are the targets currently exposed by the `Makefile`:

| Target | Description |
|:-------------|:------------------------------------------------------------|
| `make` | Alias for `make build`. |
| `make build` | Build all modules within the monorepo. |
| `make build-containers` | Dockerize all modules within the monorepo. |
| `make clean` | Reclaim disk used by all modules (i.e. `node_modules/`) and the local docker environment. This effectively uninstalls your local __GMedChain platform__ environment and will require building from scratch. |
| `make contracts` | Compile the Solidity contracts. |
| `make deploy-contracts` | Deploy the Solidity contracts. Requires the stack to be running. |
| `make npm-install` | `npm i` wrapper for all modules in the monorepo. |
| `make start` | Start the full __GMedChain platform__ stack. Requires `docker` service to be running with at least 12 GB RAM allocation. |
| `make stop` | Stop the running __GMedChain platform__ stack. |
| `make system-check` | Verify that `docker` is configured properly. |
| `make restart` | Stop and start the `docker` stack. |
| `make reset` | Clean the docker environment by pruning the docker networks and volumes. |
| `make test` | Run the full test suite. Requires the stack to be running. |
| `make zk-circuits` | Perform zk-SNARK trusted setups for circuits contained within `zkp/circuits` |

## Running the GMedChain platform

To run the __GMedChain platform__ application, follow the instructions in [radish34/README.md](radish34/README.md).

`cd radish34` and go from there 🚀

# What is here?

The root directory of this repo (where this Readme currently lives) contains the following folders:

```
.
├── baseline  <-- Future home to the Baseline Protocol libraries
├── bin <-- Scripts to run across the entire project
├── docs <-- auto-generated and artisanal hand crafted documentation 
└── radish34 <-- The demonstration POC (you probably are looking for this)
```

## Running scripts across the project

To use the top level scripts (currently just documentation auto-generation and collection) do the following: 

Required: NodeJS 11.15 (nvm is recommended)

 - run `make npm-install` to install the top level packages

optionally `make clean` to clean out any `node_modules` folders installed by the `make npm-install` command.
