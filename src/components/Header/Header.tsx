"use client";
import React from "react";
import Link from "next/link";
import { Image, HStack, Flex, Heading, Spacer, keyframes, useDisclosure, Button, Text, Icon } from "@chakra-ui/react";
import { BsWallet2 } from "react-icons/bs";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useChainId, useBalance, useNetwork, useSwitchNetwork } from "wagmi";
import { Web3Providers } from "@/context";


function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { open } = useWeb3Modal()
    const { address, isConnecting, isDisconnected, status } = useAccount()
    const chainId: any = useChainId()
    const { chain } = useNetwork()
    const { chains: error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()


    const wiggleAnimation = keyframes`
        0% { transform: rotate(0deg); }
        10% { transform: rotate(14deg); }
        20% { transform: rotate(-8deg); }
        30% { transform: rotate(14deg); }
        40% { transform: rotate(-4deg); }
        50% { transform: rotate(10deg); }
        60% { transform: rotate(0deg); }
        100% { transform: rotate(0deg); }
    `;

    const hoverAnimation = {
        transition: "all 1.4s ease-in-out",
        _onHover: {
            transform: "scale(1.05)",
            animation: `${wiggleAnimation} 1.5s cubic-bezier(0.0, 0.0, 0.0, 0.0) both`,
        },
        background: "brand.primary_pink",
        color: "brand.primary_text",
    };

    React.useEffect(() => {
        if (chainId && chainId !== chain?.id) {
            if (switchNetwork) {
                switchNetwork(80085);
            }
        }
    }, [chainId, chain, switchNetwork]);
    
    // create a system to blur header background when the page is not at the bottom (because only scroll up is possible)
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            // Check if the page is scrolled (you can adjust the value '20' based on your needs)
            const isScrolled = window.scrollY > 20;
            setIsScrolled(isScrolled);
        };

        // Add event listener
        window.addEventListener("scroll", handleScroll);

        // Remove event listener on cleanup
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerStyle = {

        backdropFilter: isScrolled ? "blur(10px)" : "none",
        transition: "backdrop-filter 0.1s ease-in-out"
    };


    return (
        <Flex
            as="header"
            align="center"
            justifyContent={"center"}
            direction="row"
            w="100vw"
            minHeight="10vh"
            px={"128px"}
            position="fixed"
            bottom="0"
            {...headerStyle}
        >
            <HStack
                position="relative"
                align="center"
                justify="flex-start"
                direction="row"
                w="100%"
            >
                <Link href="/#mint">
                <Heading
                    as="h1"
                    size="lg"
                    fontFamily={"winds"}
                    color={"brand.primary_pink"}
                    isTruncated
                >
                    Berachain Odyssey
                </Heading>
                </Link>
            </HStack>
            <Spacer />
            <HStack
                position="relative"
                align="flex-start"
                justify="center"
                direction="row"
                w="100%"
            >
                <Link href="#about">
                    <Text
                        color={"brand.primary_text"}
                        fontFamily={"poppins"}
                        fontWeight={"500"}
                    >
                        About
                    </Text>
                </Link>

                <Link href="#mint">
                    <Text
                        color={"brand.primary_text"}
                        fontFamily={"poppins"}
                        fontWeight={"500"}
                    >
                        Mint
                    </Text>
                </Link>

            </HStack>
            <Spacer />
            <HStack
                position="relative"
                align="center"
                justify="flex-end"
                direction="row"
                w="100%"
            >
                {isDisconnected ? (
                    <Button
                        borderRadius="full"
                        borderColor={"brand.primary_pink"}
                        borderWidth={"2px"}
                        width={"250px"}
                        px={"32px"}
                        color={"brand.primary_text"}
                        _hover={{
                            transform: "scale(1.05)",
                            animation: `${wiggleAnimation} 1.5s cubic-bezier(0.0, 0.0, 0.0, 0.0) both`,
                            transition: "all 1.4s ease-in-out",
                            background: "brand.primary_pink",
                            color: "brand.secondary_text",
                        }}
                        onClick={() => open()}
                        isLoading={isConnecting || isLoading || isOpen }
                        rightIcon={<Icon as={BsWallet2} />}
                    >
                        Connect Wallet
                    </Button>
                ) : (
                    <Button
                        position={"relative"}
                        borderRadius="full"
                        borderColor={"brand.primary_pink"}
                        borderWidth={"2px"}
                        width={"250px"}
                        px={"32px"}
                        color={"brand.primary_text"}
                        _hover={{
                            transform: "scale(1.05)",
                            animation: `${isOpen ? "" : wiggleAnimation} 1.5s cubic-bezier(0.0, 0.0, 0.0, 0.0) both}`,
                            transition: "all 1.4s ease-in-out",
                            background: "brand.primary_pink",
                            color: "brand.secondary_text",
                        }}
                        onClick={() => open({ view: "Account" })}
                        isLoading={isConnecting}
                        rightIcon={<Icon as={BsWallet2} />}
                    >
                        {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
                    </Button>
                )}
            </HStack>

        </Flex>

    )
}

export default Header;

