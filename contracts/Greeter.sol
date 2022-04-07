// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greeter {
  string private greeting;

  // solidity可以storage和memory中存储变量，storage将变量永久存入区块链，memory在函数调用结束后就释放内存

  // Solidity can store variables in storage and memory. Storage permanently stores variables in the blockchain, and memory releases memory after the function call ends.
  // https://medium.com/coinmonks/ethereum-solidity-memory-vs-storage-which-to-use-in-local-functions-72b593c3703a
  constructor(string memory _greeting) {
    greeting = _greeting;
  }

  // v0.5.0之后view（之前是constant）和pure定义函数类型
  // view只读不写 不消耗资源 不花费gas，pure不能读 也不能写

  //After v0.5.0 view (previously constant) and pure define function types
  //view is read only, not written, does not consume resources, does not cost gas, pure cannot read or write
  function greet() public view returns (string memory) {
    return greeting;
  }

  function setGreeting(string memory _greeting) public {
    greeting = _greeting;
  }
}
