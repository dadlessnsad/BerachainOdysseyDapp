'use client'
import React from "react"
import BeraNFT_Abi from "./abis/BeraNFT.json"

type Contract = {
    address: `0x${string}` | undefined,
    abi: any
}

export const BeraNFT_Contract: Contract = {
    address: '0xdF0d8B84653A66b3D4d9aF2c803A87F3CA1B8E75',
    abi: BeraNFT_Abi.abi
}