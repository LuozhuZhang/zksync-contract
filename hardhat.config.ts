// * deploy contract
require("@matterlabs/hardhat-zksync-deploy");
// * compile code
require("@matterlabs/hardhat-zksync-solc");

module.exports = {
  zksolc: {
    version: "0.1.0",
    // docker的编译器源：matterlabs/zksolc
    // Docker's compiler source: matterlabs/zksolc
    compilerSource: "docker",
    settings: {
      optimizer: {
        enabled: true,
      },
      experimental: {
        dockerImage: "matterlabs/zksolc",
      },
    },
  },
  zkSyncDeploy: {
    // zkSync testnet：https://portal.zksync.io/
    zkSyncNetwork: "https://zksync2-testnet.zksync.dev",
    // goerli testnet：https://goerli-faucet.mudit.blog/
    // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
    ethNetwork: "goerli", 
  },
  networks: {
    hardhat: {
      zksync: true,
    },
  },
  solidity: {
    version: "0.8.10",
  },
};