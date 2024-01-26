"use client";
import React from "react";
import Link from "next/link";
import { Image, HStack, Flex, Heading, Spacer, keyframes, useDisclosure, Button, Text, Icon, } from "@chakra-ui/react";
import { BsWallet2 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useChainId, useBalance, useNetwork, useSwitchNetwork } from "wagmi";
import { MobileMenu } from "..";
import { useHasMinted } from "@/hooks/useHasMinted";

function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { open } = useWeb3Modal()
    const { address, isConnecting, isDisconnected, status } = useAccount()
    const chainId: any = useChainId()
    const { chain } = useNetwork()
    const { chains: error, isLoading, pendingChainId, switchNetwork } = useSwitchNetwork()
    const { hasMinted } = useHasMinted(address ? address : "0x")

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

    React.useEffect(() => {
        if (chainId && chainId !== chain?.id) {
            if (switchNetwork) {
                switchNetwork(80085);
            }
        }
    }, [chainId, chain, switchNetwork]);
    
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setIsScrolled(isScrolled);
        };
        window.addEventListener("scroll", handleScroll);
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
            justifyContent={"space-evenly"}
            direction="row"
            w="100vw"
            minHeight="10vh"
            px={{ base: "32px", md: "128px" }}
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
                        size={{ base: "md", md: "lg" }}
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
                display={{ base: "none", md: "flex" }}
                position="relative"
                align="flex-start"
                justify="center"
                direction="row"
                w="100%"
            >
                <Link href="/#about">
                    <Text
                        color={"brand.primary_text"}
                        fontFamily={"poppins"}
                        fontWeight={"500"}
                    >
                        About
                    </Text>
                </Link>

                <Link href="/#mint">
                    <Text
                        color={"brand.primary_text"}
                        fontFamily={"poppins"}
                        fontWeight={"500"}
                    >
                        Mint
                    </Text>
                </Link>

                {hasMinted && (<Link href="/billythebera">
                    <Text
                        color={"brand.primary_text"}
                        fontFamily={"poppins"}
                        fontWeight={"500"}
                    >
                        View Bera
                    </Text>
                </Link>)}

            </HStack>

            <Spacer />

            <HStack
                display={{ base: "none", md: "flex" }}
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
                        isLoading={isConnecting || isLoading }
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
                            animation: `${wiggleAnimation} 1.5s cubic-bezier(0.0, 0.0, 0.0, 0.0) both`,
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

                <Image
                    position={"absolute"}
                    right={"-96px"}
                    maxH={"76px"}
                    maxW={"76px"}
                    src={"/BeraChainFaucet.png"}
                    alt={"faucet"}
                    cursor={"pointer"}
                    onClick={() => window.open("https://artio.faucet.berachain.com/", "_blank")}
                />
            </HStack>

            <Icon 
                as={GiHamburgerMenu}
                display={{ base: "flex", md: "none" }}
                w={8}
                h={8}
                color={"brand.primary_pink"}
                onClick={onOpen}
            />

            <MobileMenu isOpen={isOpen} onClose={onClose} open={open} isDisconnected={isDisconnected} />
        </Flex>

    )
}

export default Header;

