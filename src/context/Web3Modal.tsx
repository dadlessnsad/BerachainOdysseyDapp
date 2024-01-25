"use client";
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { defineChain } from 'viem'

export const berachain = defineChain({
    id: 80085,
    network: 'Berachain Artio',
    name: 'Berachain',
    nativeCurrency: { name: 'Bera', symbol: 'BERA', decimals: 18 },
    rpcUrls: {
        default: {
            http: ['https://artio.rpc.berachain.com/'],
        },
        public: {
            http: ['https://artio.rpc.berachain.com/'],
        },
    },
    blockExplorers: {
        default: {
            name: 'beratrail',
            url: 'https://artio.beratrail.io/',
        },
    },
})

const projectId = process.env.WEB3_MODAL_PROJECT_ID || ""

const metadata = {
    name: 'The Berachain Bears',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
}


const chains = [berachain]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })
const options = {
    defineChain: "https://ipfs.io/ipfs/QmVDTBkiXjwppPALCfeBPAzoP9u3xL4znJXDWJPzQaHYBs?filename=BeraChainLogo.svg",
    
}

createWeb3Modal({ wagmiConfig, projectId, chains, ...options })

export default function Web3Modal({ children }: any ) {
    return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
  
  