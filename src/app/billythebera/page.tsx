"use client";
import * as React from 'react'
import { Flex, Heading, Text, Card, Image, Button, SimpleGrid } from '@chakra-ui/react';
import { useAccount, useContractRead } from 'wagmi';
import { BeraNFT_Contract } from '@/contracts/config';

type NFTMetadataType = {
    name: string,
    description: string,
    image: string,
    attributes: AttributesType[]
}

type AttributesType = {
    trait_type: string,
    value: string
}

export default function BillyTheBera() {
    const [NFTMetadata, setNFTMetadata] = React.useState<NFTMetadataType>({
        name: "",
        description: "",
        image: "",
        attributes: []
    })

    const { address, isConnecting, isDisconnected, status } = useAccount()
    const { data } = useContractRead({
        address: BeraNFT_Contract.address,
        abi: BeraNFT_Contract.abi,
        functionName: "uri",
        args: [0],
        chainId: 80085
    })

    const fetchIPFSJson = async (uri: any) => {
        const response = await fetch(uri);
        const json = await response.json();
        return json;
    }

    React.useEffect(() => {
        if (data) {
            console.log("Data: ", data)
            fetchIPFSJson(data).then((json) => {
                console.log("JSON: ", json)
                // edit json to adjust the ipfs url to the gateway url
                const ipfsUrl = json.image
                const gatewayUrl = "https://ipfs.io/ipfs/"
                const newUrl = ipfsUrl.replace("ipfs://", gatewayUrl)
                json.image = newUrl
                setNFTMetadata(json)
            }).catch((error) => {
                console.log("Error: ", error)
            })
        }
    }, [address, data])

    return (
        <Flex
            as="main"
            align="center"
            justifyContent={"center"}
            direction="column"
            h="100vh"
            w="100%"
        >
            <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent="center"
                alignItems="center"
                w="80%"
                h="100%"
                gap={{ base: "64px", md: "32px" }}
            >
                <Card
                    minW={{ base: "313px", md: "464px" }}
                    h={{ base: "313px", md: "464px" }}
                    p="0px"
                    bg="brand.background"
                    borderRadius="xl"
                    boxShadow="0px 0px 32px rgba(0, 0, 0, 0.25)"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    order={{ base: 1, md: 2 }}
                    mb={{ base: "148px", md: "0px" }}
                >
                    <Image
                        src={NFTMetadata.image}
                        alt={NFTMetadata.name}
                        w="444px"
                        h="444px"
                        borderRadius="xl"
                    />
                </Card>

                <Flex
                    direction="column"
                    h={{ base: "auto", md: "464px" }}
                >
                    <Heading
                        as="h4"
                        size="lg"
                        fontFamily="poppins"
                        fontWeight="600"
                        fontStyle={"italic"}
                        color="brand.primary_pink"
                        alignSelf={"flex-start"}
                        mt="32px"
                        mb="32px"
                    >
                        {NFTMetadata.name}
                    </Heading>

                    <Text
                        fontFamily="poppins"
                        fontWeight="500"
                        color="brand.primary_text"
                        alignSelf={"flex-start"}
                        mb="32px"
                    >
                        {NFTMetadata.description}
                    </Text>

                    <SimpleGrid columns={2} spacing={4}>
                        {NFTMetadata.attributes.map((attribute, index) => {
                            return (
                                <Card
                                    key={index}
                                    maxW="200px"
                                    h="120px"
                                    p="16px"
                                    bg="brand.background"
                                    borderRadius="xl"
                                    boxShadow="0px 0px 32px rgba(0, 0, 0, 0.25)"
                                    display="flex"
                                    flexDirection="column"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >

                                    <Text
                                        fontFamily="poppins"
                                        fontWeight="500"
                                        color="brand.primary_text"
                                        fontSize="sm"
                                    >
                                        {attribute.trait_type}
                                    </Text>
                                    <Text
                                        fontFamily="poppins"
                                        fontWeight="500"
                                        color="brand.primary_text"
                                        fontSize="sm"
                                    >
                                        {attribute.value}
                                    </Text>
                                </Card>
                            )
                        })}
                    </SimpleGrid>
                </Flex>


            </Flex>
            
        </Flex>
    )
}


