/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TenderSwap, TenderSwapInterface } from "../TenderSwap";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "tokenAmounts",
        type: "uint256[2]",
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "fees",
        type: "uint256[2]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "invariant",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenSupply",
        type: "uint256",
      },
    ],
    name: "AddLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newAdminFee",
        type: "uint256",
      },
    ],
    name: "NewAdminFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newSwapFee",
        type: "uint256",
      },
    ],
    name: "NewSwapFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
    ],
    name: "RampA",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "tokenAmounts",
        type: "uint256[2]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenSupply",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidity",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "tokenAmounts",
        type: "uint256[2]",
      },
      {
        indexed: false,
        internalType: "uint256[2]",
        name: "fees",
        type: "uint256[2]",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "invariant",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenSupply",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidityImbalance",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lpTokenSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "tokenReceived",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "receivedAmount",
        type: "uint256",
      },
    ],
    name: "RemoveLiquidityOne",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "StopRampA",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "tokenSold",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountSold",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountReceived",
        type: "uint256",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_amounts",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_minToMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "amplificationParams",
    outputs: [
      {
        internalType: "uint256",
        name: "initialA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "futureA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialATime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "futureATime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "calculateRemoveLiquidity",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "tokenReceive",
        type: "address",
      },
    ],
    name: "calculateRemoveLiquidityOneToken",
    outputs: [
      {
        internalType: "uint256",
        name: "availableTokenAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_tokenFrom",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_dx",
        type: "uint256",
      },
    ],
    name: "calculateSwap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool",
      },
    ],
    name: "calculateTokenAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeParams",
    outputs: [
      {
        internalType: "uint256",
        name: "swapFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "adminFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getA",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAPrecise",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getToken0",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getToken0Balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getToken1",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getToken1Balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVirtualPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_token1",
        type: "address",
      },
      {
        internalType: "string",
        name: "lpTokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "lpTokenSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_a",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_adminFee",
        type: "uint256",
      },
      {
        internalType: "contract LiquidityPoolToken",
        name: "lpTokenTargetAddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lpToken",
    outputs: [
      {
        internalType: "contract LiquidityPoolToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "_data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "futureA",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
    ],
    name: "rampA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256[2]",
        name: "minAmounts",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "_amounts",
        type: "uint256[2]",
      },
      {
        internalType: "uint256",
        name: "_maxBurnAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidityImbalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256",
      },
      {
        internalType: "contract IERC20",
        name: "_tokenReceive",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidityOneToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "selfPermit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "_v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "_r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_s",
        type: "bytes32",
      },
    ],
    name: "selfPermitIfNecessary",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newAdminFee",
        type: "uint256",
      },
    ],
    name: "setAdminFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newSwapFee",
        type: "uint256",
      },
    ],
    name: "setSwapFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopRampA",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_tokenFrom",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minDy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwnner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class TenderSwap__factory {
  static readonly abi = _abi;
  static createInterface(): TenderSwapInterface {
    return new utils.Interface(_abi) as TenderSwapInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TenderSwap {
    return new Contract(address, _abi, signerOrProvider) as TenderSwap;
  }
}
