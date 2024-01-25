'use client'
import React from "react";
import Link from "next/link";
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'


function About() {
    return (
        <Flex
            align="center"
            justifyContent={"space-evenly"}
            direction="column"
            h="fit-content"
        >
            <Flex
                align="center"
                justifyContent={"space-evenly"}
                direction="column"
                h="100vh"
            >
                <Button
                    as={Link}
                    href="/#mint"
                    borderRadius="full"
                    borderColor={"brand.primary_pink"}
                    borderWidth={"2px"}
                    background={"brand.primary_pink"}
                    color={"brand.secondary_text"}
                    w={"298px"}
                    _hover={{
                        background: "brand.primary_pink", 
                        color: "brand.secondary_text"
                    }}
                >
                    Mint
                </Button>
                
                <Image
                    src="/BeraChainImage.png"
                    alt="BeraChain Logo"
                    width={{ base: "246px", md: "346px" }}
                    height={{ base: "246px", md: "346px" }}
                />

                <Flex
                    direction="column"
                    align="flex-start"
                    justifyContent={"center"}
                    w={{ base: "100%", md: "66%" }}
                    px={{ base: "48px", md: "128px"  }}
                    pb={{ base: "0px", md: "128px"  }} 
                >
                    <Heading
                        as="h2" 
                        fontFamily="Poppins"
                        fontSize="4xl"
                        fontWeight="800"
                        lineHeight="64px"
                        textAlign="center"
                        color="brand.primary_pink"
                    >
                        Early Supporter Benefits
                    </Heading>

                    <Text
                        color="rgba(23, 23, 23, 0.75)"
                        fontFamily={"poppins"}
                        fontWeight={"500"}
                        fontSize={"lg"}
                    >
                        Early supporters receive exclusive rewards on the Berachain Mainnet, including a free mainnet Bera NFT at launch. This NFT offers item equipping, staking, and access to a vast, gamified world.
                    </Text>
                </Flex>
            </Flex>

            <Flex
                id="about"
                align="center"
                justifyContent={"space-evenly"}
                direction="column"
                h="100vh"
            >
                <Image
                    src="/BeraWorld.png"
                    alt="World of Beras"
                    width={{ base: "246px", md: "346px" }}
                    height={{ base: "246px", md: "346px" }}
                />

                <Flex
                    direction="column"
                    align={{ base: "center", md: "flex-start" }}
                    justifyContent={"center"}
                    w={{ base: "100%", md: "66%" }}
                    px={{ base: "48px", md: "128px"  }}
                    pb={{ base: "0px", md: "128px"  }}
                >
                    <Heading
                        as="h2" 
                        fontFamily="Poppins"
                        fontSize="4xl"
                        fontWeight="800"
                        lineHeight="64px"
                        textAlign="center"
                        color="brand.primary_pink"
                    >
                        Train a Bear
                    </Heading>
                    <Text
                        color="rgba(23, 23, 23, 0.75)"
                        fontFamily={"poppins"}
                        fontWeight={"500"}
                        fontSize={"lg"}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        In a galaxy where the bears&apos; home planet is ravaged by raging wildfires, Berry the Bear urgently needs your help. By minting a bear, you can join the quest to save their world from the destruction caused by wildfires
                    </Text>
                </Flex>

            </Flex>
        </Flex>
    )
}

export default About