"use client";
import * as React from 'react'
import { useContractRead } from 'wagmi';
import { BeraNFT_Contract } from '@/contracts/config';

export const useHasMinted = (address: `0x${string}`) => {
    const [hasMinted, setHasMinted] = React.useState<any>(false || null)
    const { data } = useContractRead({
        address: BeraNFT_Contract.address,
        abi: BeraNFT_Contract.abi,
        functionName: "hasMinted",
        args: [address],
        chainId: 80085
    })

    console.log("Has Minted: ", data)

    React.useEffect(() => {
        if (data) {
            setHasMinted(data)
        } else {
            setHasMinted(false)
        }
    }, [data])

    return { hasMinted }   
}