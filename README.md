# zksync-demo

安装依赖文件
```
yarn add -D typescript ts-node ethers zksync-web3 hardhat @matterlabs/hardhat-zksync-solc @matterlabs/hardhat-zksync-deploy
```

编译合约
```
yarn hardhat compile
```

部署合约
```
yarn hardhat deploy-zksync
```

# 介绍

zkSync 2.0 network的上手案例，部署了一个简单的打招呼合约，目的是了解当前Layer2网络（zkSync）上的开发体验和开发成本，总体下来体验不错

顺藤摸瓜阅读了一部分zkSync artifacts、solc和deploy的核心代码，详细信息可见[sourceCode-hardhat-zkDeploy](https://github.com/hedgezhu/sourceCode-hardhat-zkDeploy)仓库

# layer2 is eating world

zk生态中仍有许多值得优化的模块，这需要所有开发者们一起努力，意味着其中潜藏着巨大的机会

Layer2有助于Ethereum网络实现真正的scale，也有助于帮助登陆下一周期中的10亿新增用户

Web3会逐渐趋于普及，未来的用户使用Web3 app时会感觉和Web2 app没有明显区别，因为gas费足够低、TPS足够高，开发者自己就能承担大量用户使用的gas成本，不再有这么复杂（就像拨号上网一样）的交互门槛，这个未来值得我们所有人期待

# Layer1与各Layer2方案之间的对比

| 运行环境  | eth  | zkrollup | zkporter | Optimism | Arbitrum | AnyTrust |
| :----:  | :-:  | :-: | :-:  | :-: | :-:  | :-: |
| 采用layer2技术 | layer1  | zk rollup | Validium  | Optimistic | Optimistic  | Plasma |
| 普通交易费用 | 1.575u | 0.07u（下降95.55%） | 0.01-0.03u  | 0.29u | 0.62u  | 同zkporter |
| swap交易费用 | 7.5u | 0.1672u（下降97.77%） | 0.01-0.03u  | 0.405u | 0.83u  | 同zkporter |
| 极限TPS（普通交易） | 109.89 | 11818 | 20000+  | 1588 | 1588  | 同zkporter |
| 极限TPS（SWAP） | 23.07 | 10130 | 20000+  | 691 | 691  | 同zkporter |
| 部分TPS（普通交易） | 36.63 | 3939 | 20000+  | 529 | 529  | 同zkporter |
| 部分TPS（SWAP） | 7.69 | 3376.8 | 20000+  | 230 | 230  | 同zkporter |
| 最大拓展性（交易） | 1 | 107.5 | 181.9+  | 16.7 | 16.7  | 同zkporter |
| 最大拓展性（SWAP） | 1 | 439.11 | 866.9+  | 34.7 | 34.7  | 同zkporter |
| 安全性等级 | 5 | 5 | 3  | 4 | 4  | 2 |

ps：eth 2500u, gaslimit 3000w, gas 30Gwei, 出块时间 13s, 极限TPS占领所有区块空间, 普通TPS占领1/3的区块空间

---

# zksync-demo

Install dependencies
```
yarn add -D typescript ts-node ethers zksync-web3 hardhat @matterlabs/hardhat-zksync-solc @matterlabs/hardhat-zksync-deploy
```

Compile the contract
```
yarn hardhat compile
```

deploy contract
```
yarn hardhat deploy-zksync
```

# introduce

A case of getting started with zkSync 2.0 network, a simple greeting contract is deployed, the purpose is to understand the development experience and development cost on the current Layer2 network (zkSync), and the overall experience is good

I read a part of the core code of zkSync artifacts, solc and deploy, and the details can be found in the [sourceCode-hardhat-zkDeploy](https://github.com/hedgezhu/sourceCode-hardhat-zkDeploy) repository

# layer2 is eating world

There are still many modules worth optimizing in the Zk ecosystem, which requires the joint efforts of all developers, which means that there are huge opportunities hidden in them

Layer2 helps the ethereum network to achieve true scale, and also helps to land 1 billion new users in the next cycle

Web3 will gradually become popular, and future users will feel that there is no obvious difference between Web3 apps and Web2 apps, because the gas fee is low enough and the TPS is high enough, the developers themselves can bear the gas cost of a large number of users, no longer so Sophisticated (like dial-up) thresholds of interaction, a future we can all look forward to

# Comparison between Layer1 and each layer2 scheme

| Operating environment  | eth  | zkrollup | zkporter | Optimism | Arbitrum | AnyTrust |
| :----:  | :-:  | :-: | :-:  | :-: | :-:  | :-: |
| Using layer2 technology | layer1  | zk rollup | Validium  | Optimistic | Optimistic  | Plasma |
| Ordinary transaction fee | 1.575u | 0.07u（down 95.55%） | 0.01-0.03u  | 0.29u | 0.62u  | same as zkporter |
| Swap transaction fees | 7.5u | 0.1672u（down 97.77%） | 0.01-0.03u  | 0.405u | 0.83u  | same as zkporter |
| Limit TPS (normal transaction) | 109.89 | 11818 | 20000+  | 1588 | 1588  | same as zkporter |
| Limit TPS (swap) | 23.07 | 10130 | 20000+  | 691 | 691  | same as zkporter |
| Partial TPS (normal transaction) | 36.63 | 3939 | 20000+  | 529 | 529  | same as zkporter |
| Partial TPS (swap) | 7.69 | 3376.8 | 20000+  | 230 | 230  | same as zkporter |
| Maximum scalability (transactions) | 1 | 107.5 | 181.9+  | 16.7 | 16.7  | same as zkporter |
| Maximum scalability (swap) | 1 | 439.11 | 866.9+  | 34.7 | 34.7  | same as zkporter |
| security level | 5 | 5 | 3  | 4 | 4  | 2 |

ps: eth 2500u, gaslimit 3000w, gas 30Gwei, block time 13s, limit TPS occupies all block space, normal TPS occupies 1/3 of block space

