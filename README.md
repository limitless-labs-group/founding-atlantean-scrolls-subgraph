
# Subgraph for AW Founding Atlantean Scrolls NFT collection

### Pre-requirements
`yarn global add @graphprotocol/graph-cli`

## Install
```
git clone https://github.com/atlantis-world-core/founding-atlantean-scrolls-subgraph.get
cd founding-atlantean-scrolls-subgraph
yarn install
```

## Generate types
`yarn codegen`

## Build graph sources
`yarn build`

## Deploy
```
graph auth
graph deploy --node https://api.thegraph.com/deploy/ <GRAPH_USERNAME>/atlantis-world-founding-atlantean-scrolls
```