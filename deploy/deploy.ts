import { utils, Wallet } from 'zksync-web3';
import * as ethers from 'ethers';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
// https://github.com/matter-labs/hardhat-zksync/blob/main/packages/hardhat-zksync-deploy/src/deployer.ts
import { Deployer } from '@matterlabs/hardhat-zksync-deploy';

import { private_key } from '../key/damocles';


export default async function (hre: HardhatRuntimeEnvironment) {
  console.log('run deploy code for Greeter contract');

  // * 初始化钱包
  // * Initialize wallet
  const wallet = new Wallet(private_key);

  const deployer = new Deployer(hre, wallet);
  // * 将部署合约的名称传入，因为这里名称独一无二，所以传入名称即可；否则需要传入完整文件路径
  // * artifact简单理解就是包含了contract deploy和interact所有信息的一个json文件
  // * loadArtifact将传入合约的artifact（https://hardhat.org/guides/compile-contracts.html），基于hardhat封装的zkArtifact，并确保合约可以被zksolc编译
  // * more info：https://hardhat.org/guides/compile-contracts.html

  // * Pass in the name of the deployment contract, because the name here is unique, so pass in the name; otherwise, you need to pass in the full file path
  // * A simple understanding of artifact is a json file that contains all the information of contract deploy and interact
  // * Load artifact will pass in the contract's artifact (https://hardhat.org/guides/compile contracts.html), based on the zk artifact packaged by hardhat, and ensure that the contract can be compiled by zksolc
  // * more info：https://hardhat.org/guides/compile-contracts.html
  const artifact = await deployer.loadArtifact('Greeter');

  // * 向layer2转账（存入一些钱 用于部署合约），parseEther是一个wei -> ether的转换工具
  // * Transfer money to layer2 (deposit some money to deploy the contract), parseEther is a wei -> ether conversion tool
  const depositAmount = ethers.utils.parseEther('0.001');
  const depositHandle = await deployer.zkWallet.deposit({
    // * layer2的地址，和layer2上ETH的地址
    // * zkSync实现了L1 -> L2的通信（https://v2-docs.zksync.io/dev/guide/l1-l2.html），还未实现L2 -> L1的通信

    // * The address of layer2, and the address of ETH on layer2
    // * zkSync implements L1 -> L2 communication (https://v2-docs.zksync.io/dev/guide/l1-l2.html), L2 -> L1 communication has not been implemented
    to: deployer.zkWallet.address,
    token: utils.ETH_ADDRESS,
    amount: depositAmount,
  });

  // * 等待转账完成
  // * Wait for the transfer to complete
  await depositHandle.wait();
  console.log('Transfer completed successfully');

  const greeting = 'WDNMD!';
  // * 第一个参数传入合约的artifact（这里是zkArtifact），第二个参数传入constructorArguments列表，第三个参数是可选的，可以选择支付fee的token，默认ETH
  // * 在这里我们智能合约（Greeter.sol）中只有greeting一个参数，所以只传入这个参数

  // * The first parameter is passed in the artifact of the contract (here is zkArtifact), the second parameter is passed in the list of constructorArguments, the third parameter is optional, you can choose the token to pay the fee, the default ETH
  // * Here we only have one parameter of greeting in our smart contract (Greeter.sol), so only this parameter is passed in
  const greeterContract = await deployer.deploy(artifact, [greeting]);

  // * 查询部署结果
  // * Output deploy result
  const contractAddress = greeterContract.address;
  console.log(`${artifact.contractName} contract was deployed to ${contractAddress}`);
}