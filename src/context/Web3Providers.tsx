'use client';
import { createPublicClient, http } from "viem"
import { mainnet } from "viem/chains"
import { berachain } from "./Web3Modal";

const ankrRPC = {
    arito_berachain: "https://artio.rpc.berachain.com/",
}

const Web3Providers = {
    arito_berachain: createPublicClient({
        chain: berachain,
        transport: http(ankrRPC.arito_berachain),
    }),
}

export default Web3Providers
