import { utils, Wallet } from "zksync-web3";
import * as ethers from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
// https://github.com/matter-labs/hardhat-zksync/blob/main/packages/hardhat-zksync-deploy/src/deployer.ts
import { Deployer } from "@matterlabs/hardhat-zksync-deploy";

import { private_key } from '../key/damocles';


export default async function (hre: HardhatRuntimeEnvironment) {
  console.log('run deploy code for Greeter contract');

  // 初始化钱包
  const wallet = new Wallet(private_key);

  const deployer = new Deployer(hre, )
}



// import * as x from "zksync-web3";
console.log(Deployer);