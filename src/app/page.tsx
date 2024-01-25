"use client";
import { Box, Button, Flex, Heading, Icon, createIcon, Image, Text, keyframes, useDisclosure } from '@chakra-ui/react'
import { About, Header, MintModal } from '@/components'
import { use } from 'react';
import { useAccount, useContractWrite } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { open } = useWeb3Modal()
    const { address } = useAccount();
    // const { data, isLoading, isSuccess, write } = useContractWrite({
    //     address: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
    //     abi: wagmigotchiABI,
    //     functionName: 'feed',
    // })

    const scollUpIcon = createIcon({
        displayName: "ScrollUpIcon",
        viewBox: "0 0 24 31",
        path: (
            <>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15164 18.8484C4.92667 18.6234 4.80029 18.3182 4.80029 18C4.80029 17.6818 4.92667 17.3766 5.15164 17.1516L11.1516 11.1516C11.3767 10.9266 11.6818 10.8003 12 10.8003C12.3182 10.8003 12.6234 10.9266 12.8484 11.1516L18.8484 17.1516C19.067 17.3779 19.188 17.681 19.1852 17.9957C19.1825 18.3103 19.0563 18.6113 18.8338 18.8338C18.6113 19.0563 18.3104 19.1825 17.9957 19.1852C17.6811 19.1879 17.378 19.067 17.1516 18.8484L12 13.6968L6.84844 18.8484C6.6234 19.0734 6.31823 19.1997 6.00004 19.1997C5.68184 19.1997 5.37667 19.0734 5.15164 18.8484V18.8484ZM5.15164 11.6484C4.92667 11.4234 4.80029 11.1182 4.80029 10.8C4.80029 10.4818 4.92667 10.1766 5.15164 9.9516L11.1516 3.9516C11.3767 3.72664 11.6818 3.60026 12 3.60026C12.3182 3.60026 12.6234 3.72664 12.8484 3.9516L18.8484 9.9516C19.067 10.1779 19.188 10.481 19.1852 10.7957C19.1825 11.1103 19.0563 11.4113 18.8338 11.6338C18.6113 11.8563 18.3104 11.9825 17.9957 11.9852C17.6811 11.9879 17.378 11.867 17.1516 11.6484L12 6.4968L6.84844 11.6484C6.6234 11.8734 6.31823 11.9997 6.00004 11.9997C5.68184 11.9997 5.37667 11.8734 5.15164 11.6484V11.6484Z" fill="black"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.15164 25.8484C4.92667 25.6234 4.80029 25.3182 4.80029 25C4.80029 24.6818 4.92667 24.3766 5.15164 24.1516L11.1516 18.1516C11.3767 17.9266 11.6818 17.8003 12 17.8003C12.3182 17.8003 12.6234 17.9266 12.8484 18.1516L18.8484 24.1516C19.067 24.3779 19.188 24.681 19.1852 24.9957C19.1825 25.3103 19.0563 25.6113 18.8338 25.8338C18.6113 26.0563 18.3104 26.1825 17.9957 26.1852C17.6811 26.1879 17.378 26.067 17.1516 25.8484L12 20.6968L6.84844 25.8484C6.6234 26.0734 6.31823 26.1997 6.00004 26.1997C5.68184 26.1997 5.37667 26.0734 5.15164 25.8484V25.8484ZM5.15164 18.6484C4.92667 18.4234 4.80029 18.1182 4.80029 17.8C4.80029 17.4818 4.92667 17.1766 5.15164 16.9516L11.1516 10.9516C11.3767 10.7266 11.6818 10.6003 12 10.6003C12.3182 10.6003 12.6234 10.7266 12.8484 10.9516L18.8484 16.9516C19.067 17.1779 19.188 17.481 19.1852 17.7957C19.1825 18.1103 19.0563 18.4113 18.8338 18.6338C18.6113 18.8563 18.3104 18.9825 17.9957 18.9852C17.6811 18.9879 17.378 18.867 17.1516 18.6484L12 13.4968L6.84844 18.6484C6.6234 18.8734 6.31823 18.9997 6.00004 18.9997C5.68184 18.9997 5.37667 18.8734 5.15164 18.6484V18.6484Z" fill="black"/>
            </>
        )
    })

    window.onload = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }

    const textPulseAnimation = keyframes`
        0% { opacity: 0.5; } 
        10% { opacity: 0.4; }
        20% { opacity: 0.3; }
        30% { opacity: 0.2; }
        40% { opacity: 0.1; }
        50% { opacity: 0.1; }
        60% { opacity: 0.2; }
        70% { opacity: 0.3; }
        80% { opacity: 0.4; }
        90% { opacity: 0.5; }
        100% { opacity: 0.5; }
    `

    return (
        <Flex
            as="main"
            align="center"
            justifyContent={"center"}
            direction="column"
            h="100%"
        >
            <About />
            <MintModal address={address} onClose={onClose} isOpen={isOpen} />
            <Flex
                as="section"
                id="mint"
                align="center"
                justifyContent={{ base: "center", md: "space-evenly" }}
                direction={{ base: "column", md: "row" }}
                h="100%"
                w={{ base: "100%", md: "100%", lg: "97%", xl: "84%", "2xl": "70%" }}
                minHeight="100vh"
                px={{ base: "32px", md: "128px" }}
                gap={{ base: "28px", md: "32px", lg: "32px" }}
            >
                <Flex
                    as="section"
                    align={{ base: "center", md: "flex-start" }}
                    justifyContent={"center"}
                    direction="column"
                    minW={{ base: "100%", md: "50%" }}
                    order={{ base: 2, md: 1 }}
                    pb={{ base: "128px", md: "0px" }}

                >
                    <Heading
                        as="h1"
                        maxW={{ base: "100%", md: "100%", lg: "97%", xl: "84%", "2xl": "70%" }}
                        size={{ base: "xl", md: "2xl", lg: "2xl", xl: "3xl", "2xl": "3xl" }}
                        textAlign={{ base: "center", md: "left" }}
                        fontFamily={"poppins"}
                        fontWeight={"900"}
                        color={"brand.primary_pink"}
                        wordBreak={"break-word"}
                        flexWrap={"wrap"}
                        lineHeight={"1.2em"}
                    >
                        Mint, Train & Fight Beras
                    </Heading>

                    <Text
                        color={"brand.primary_text"}
                        fontFamily={"poppins"}
                        fontWeight={"500"}
                        mt={"16px"}
                    >
                        Collect, Explore & Create some Beras!
                    </Text>

                    <Button
                        borderRadius="full"
                        borderColor={"brand.primary_pink"}
                        borderWidth={"2px"}
                        bg={"brand.primary_pink"}
                        px={"32px"}
                        mt={"32px"}
                        w={"66%"}
                        color={"brand.secondary_text"}
                        _hover={{
                            background: "brand.secondary_text",
                            color: "brand.primary_text",
                        }}
                        onClick={() => {
                            if (address) {
                                onOpen()
                            } else {
                                open()
                            }
                        }}
                    >
                        <Text
                            fontFamily={"poppins"}
                            fontWeight={"500"}
                        >
                            {address ? "Mint Your Bera" : "Connect Wallet"}
                        </Text>
                    </Button>
                </Flex>
                {/* Border Box then image */}
                <Flex
                    as="section"
                    align="center"
                    justifyContent={"center"}
                    direction="column"
                    h="100%"
                    w={{ base: "100%", md: "50%" }}
                    order={{ base: 1, md: 2 }}
                >
                    <Box
                        w={{ base: "269px", md: "351px", lg: "451px", xl: "541px" }}
                        h={{ base: "269px", md: "351px", lg: "451px", xl: "541px" }}
                        boxShadow={"8px 16px 13.399999618530273px -17px #000000"}
                        borderRadius={"12px"}
                    >
                        <Image
                            src="/berachain.png"
                            alt="Berachain Chronicles"
                            w="100%"
                            h="100%"
                            boxShadow={"8px 16px 13.399999618530273px -17px #000000"}
                            borderRadius={"12px"}
                        />
                    </Box>
                </Flex>
                </Flex>
                <Text
                    position="absolute"
                    color={"gray.700"}
                    fontSize={"24px"}
                    fontWeight={"500"}
                    fontFamily={"poppins"}
                    fontStyle={"italic"}
                    letterSpacing={"0.2em"}
                    bottom={{ base: "14vh", md: "12vh" }}
                    animation={`${textPulseAnimation} 2s cubic-bezier(0.0, 0.0, 0.0, 0.0) both infinite`}
                >
                    <Icon 
                        animation={`${textPulseAnimation} 2s cubic-bezier(0.0, 0.0, 0.0, 0.0) both infinite`} 
                        as={scollUpIcon}
                        w={6} 
                        h={6} 
                    /> Up Only <Icon 
                        animation={`${textPulseAnimation} 2s cubic-bezier(0.0, 0.0, 0.0, 0.0) both infinite`} 
                        as={scollUpIcon}
                        w={6} 
                        h={6}
                    />
                </Text>
        </Flex>
    )
}
