/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BytesTest } from "./BytesTest";

export class BytesTestFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BytesTest> {
    return super.deploy(overrides || {}) as Promise<BytesTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BytesTest {
    return super.attach(address) as BytesTest;
  }
  connect(signer: Signer): BytesTestFactory {
    return super.connect(signer) as BytesTestFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BytesTest {
    return new Contract(address, _abi, signerOrProvider) as BytesTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_in",
        type: "bytes",
      },
    ],
    name: "bytesToHexConvert",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_offset",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_len",
        type: "uint256",
      },
    ],
    name: "read",
    outputs: [
      {
        internalType: "uint256",
        name: "new_offset",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "x",
        type: "uint24",
      },
    ],
    name: "testUInt24",
    outputs: [
      {
        internalType: "uint24",
        name: "r",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610646806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631c276839146100465780635b5ddb9414610087578063b459c2b91461017c575b600080fd5b6100686004803603602081101561005c57600080fd5b503562ffffff16610261565b6040805162ffffff909316835260208301919091528051918290030190f35b6100fd6004803603606081101561009d57600080fd5b8101906020810181356401000000008111156100b857600080fd5b8201836020820111156100ca57600080fd5b803590602001918460018302840111640100000000831117156100ec57600080fd5b9193509150803590602001356102b1565b6040518083815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610140578181015183820152602001610128565b50505050905090810190601f16801561016d5780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b6101ec6004803603602081101561019257600080fd5b8101906020810181356401000000008111156101ad57600080fd5b8201836020820111156101bf57600080fd5b803590602001918460018302840111640100000000831117156101e157600080fd5b509092509050610305565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561022657818101518382015260200161020e565b50505050905090810190601f1680156102535780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6040805160008082526020820180845282518120828252928401938490525190922082911461028f57600080fd5b606061029a8461034d565b90506102a7816000610365565b9590945092505050565b600060606102f886868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525088925087915061037e9050565b9150915094509492505050565b606061034683838080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061039992505050565b9392505050565b606061035f8262ffffff16600361045a565b92915050565b60038101600061037584846104fd565b90509250929050565b6000606061038d85858561054f565b93909201949293505050565b606080825160020267ffffffffffffffff811180156103b757600080fd5b506040519080825280601f01601f1916602001820160405280156103e2576020820181803683370190505b5090506020830183518101602083015b8183101561045057825160f81c6f6665646362613938373635343332313060088260041c021c60f81b82526f66656463626139383736353433323130600882600f16021c60f81b6001830152506001830192506002810190506103f2565b5091949350505050565b606060208260ff16111561049d576040805162461bcd60e51b8152602060048201526005602482015264627432313160d81b604482015290519081900360640190fd5b8160ff1667ffffffffffffffff811180156104b757600080fd5b506040519080825280601f01601f1916602001820160405280156104e2576020820181803683370190505b5060ff6008602094850302169390931b918301919091525090565b6000808260030190508084511015610544576040805162461bcd60e51b8152602060048201526005602482015264627475303360d81b604482015290519081900360640190fd5b929092015192915050565b606081830184511015610591576040805162461bcd60e51b8152602060048201526005602482015264627365313160d81b604482015290519081900360640190fd5b60608267ffffffffffffffff811180156105aa57600080fd5b506040519080825280601f01601f1916602001820160405280156105d5576020820181803683370190505b509050821561060857602081018381016020860187015b818310156106045780518352602092830192016105ec565b5050505b94935050505056fea2646970667358221220363d5279410505fcc6bd1630bd12def0a27ce2261040ab00751854d92d24383a64736f6c63430007030033";