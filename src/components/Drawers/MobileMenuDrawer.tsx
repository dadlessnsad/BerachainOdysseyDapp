"use client";
import React from "react";
import Link from "next/link";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, DrawerHeader, Heading, Text, Button, Icon, HStack, Flex } from "@chakra-ui/react";
import { BsWallet2 } from "react-icons/bs";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useChainId, useBalance, useNetwork, useSwitchNetwork } from "wagmi";
import { useHasMinted } from "@/hooks/useHasMinted";

function MobileMenuDrawer({ isOpen, onClose, open, isDisconnected }: { isOpen: any; onClose: any; open: any; isDisconnected: boolean; }) {
    const { address, isConnecting, status } = useAccount()
    const { hasMinted } = useHasMinted(address ? address : "0x")

    return (
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            size="xs"
            closeOnOverlayClick={true}
            closeOnEsc={true}
            isFullHeight={true}
        >
            <DrawerOverlay />
            <DrawerContent
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                bg="brand.background" 
            >
                <DrawerCloseButton color="brand.primary_pink" />
                <DrawerHeader
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    py="24px"
                    w={"100%"}
                    borderBottomWidth="1px"
                    borderBottomColor="brand.primary_pink"
                >
                    <Heading
                        as="h2"
                        fontFamily="Poppins"
                        fontSize="2xl"
                        fontWeight="800"
                        lineHeight="64px"
                        textAlign="center"
                        color="brand.primary_pink"
                    >
                        BeraChain Odyssey
                    </Heading>
                </DrawerHeader>

                <DrawerBody
                    position="relative"
                    w={"100%"}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Flex
                        display="flex"
                        direction="column"
                        width="100%"
                        alignItems={"flex-start"}
                        justifyContent={"center"}
                        px={"6px"}
                        py={"48px"}
                        gap={"48px"}
                    >
                        <Link href="/#about">
                            <Text
                                fontFamily="Poppins"
                                fontSize="2xl"
                                fontWeight="500"
                                textAlign="center"
                                color="brand.primary_pink"
                                lineHeight={"32px"}
                                letterSpacing={"2.5px"}
                                onClick={onClose}
                            >
                                About
                            </Text>
                        </Link>
                        <Link href="/#mint">
                            <Text
                                fontFamily="Poppins"
                                fontSize="2xl"
                                fontWeight="500"
                                textAlign="center"
                                color="brand.primary_pink"
                                lineHeight={"32px"}
                                letterSpacing={"2.5px"}
                                onClick={onClose}
                            >
                                Mint
                            </Text>
                        </Link>

                        {hasMinted && (
                            <Link href="/billythebera">
                                <Text
                                    fontFamily="Poppins"
                                    fontSize="2xl"
                                    fontWeight="500"
                                    textAlign="center"
                                    color="brand.primary_pink"
                                    lineHeight={"32px"}
                                    letterSpacing={"2.5px"}
                                    onClick={onClose}
                                >
                                    View Bera
                                </Text>
                            </Link>
                        )}
                    </Flex>
                    
                    {isDisconnected ? (
                        <Button
                            position={"absolute"}
                            bottom={"64px"}
                            borderRadius="full"
                            borderColor={"brand.primary_pink"}
                            borderWidth={"2px"}
                            width={"250px"}
                            px={"32px"}
                            color={"brand.primary_text"}
                            onClick={() => open() && onClose()}
                            isLoading={isConnecting}
                            rightIcon={<Icon as={BsWallet2} />}
                        >
                            Connect Wallet
                        </Button>
                    ) : (
                        <Button
                            position={"absolute"}
                            bottom={"64px"}
                            borderRadius="full"
                            borderColor={"brand.primary_pink"}
                            borderWidth={"2px"}
                            width={"250px"}
                            px={"32px"}
                            color={"brand.primary_text"}
                            
                            onClick={() => open({ view: "Account" }) && onClose()}
                            isLoading={isConnecting}
                            rightIcon={<Icon as={BsWallet2} />}
                        >
                            {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
                        </Button>
                    )}
                        
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
}

export default MobileMenuDrawer;