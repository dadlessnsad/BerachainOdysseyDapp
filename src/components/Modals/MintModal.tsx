'use client'
import React from "react"
import { Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Text, InputGroup, Input, InputLeftAddon, Tag, NumberInput, NumberInputField, InputRightElement, ButtonGroup } from "@chakra-ui/react"
import { usePrepareContractWrite, useContractWrite, useBalance } from "wagmi"
import { BeraNFT_Contract } from "@/contracts/config"
import { Web3Providers } from "@/context"
import { formatEther, parseEther } from "viem"

function MintModal({ address, isOpen, onClose }: { address: `0x${string}` | undefined, isOpen: boolean, onClose: any }) {
    const [blockNumber, setBlockNumber] = React.useState<number>(0)
    const [tipValue, setTipValue] = React.useState<bigint>(BigInt(0))
    const { data } = useBalance({ address: address, chainId: 80085 })


    const { config, error } = usePrepareContractWrite({
        address: BeraNFT_Contract.address,
        account: address,
        abi: BeraNFT_Contract.abi,
        functionName: 'claimTestnetBera',
        chainId: 80085,
        value: tipValue,
        onSuccess: (result) => {
            console.log("Success!")
            console.log(result)
        },
    })
    const { write, isIdle, isLoading, isSuccess, isError } = useContractWrite(config)

    function SetTipValueWithBalance(percentage: number) {
        console.log("Percentage: ", percentage)
        const balance = Number(data?.formatted)
        console.log("data", data)

        const tip = balance * percentage
        console.log("tip", tip)

        setTipValue(BigInt(parseEther(tip.toString())))


    }


    return (
        <Modal isOpen={isOpen} onClose={onClose} onEsc={onClose} onOverlayClick={onClose} size="xl" isCentered>
            <ModalOverlay />
            <ModalContent
                borderWidth="2px"
                borderColor="brand.primary_pink"
                borderRadius="lg"
                maxWidth="36rem"
                mx={{ base: 6, lg: 0 }}
                my={{ base: 6, lg: 0 }}
                textAlign="center"
                bg="brand.background"
            >
                <ModalHeader
                    justifyContent="center"
                    alignItems="center"
                    color="brand.primary_pink"
                    fontFamily="poppins"
                    fontWeight="900"
                    fontSize="2xl"
                >Mint Your Bera!</ModalHeader>
                <ModalCloseButton />
                <ModalBody
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                >
                    <Text size="md" mb={2} color="brand.primary_text">Feel free to tip!</Text>

                    <Flex
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        px={"64px"}
                    >
                        <InputGroup
                            size="lg"
                            borderColor="brand.primary_pink"
                            borderWidth="2px"
                        >
                            <InputLeftAddon
                                borderTop={"none"}
                                borderLeft={"none"}
                                borderBottom={"none"}
                                borderRight={"2px"}
                                borderColor={"brand.primary_pink"}
                                bg={"rgba(0,0,0,0.2)"}
                                borderRadius={"0px"}
                            >
                                <Text
                                    color={"brand.primary_text"}
                                    fontFamily={"poppins"}
                                    fontWeight={"500"}
                                    fontSize={"10px"}
                                >
                                    Tip Amount
                                </Text>
                            </InputLeftAddon>
                            <Input
                                type="number"
                                color={"black"}
                                placeholder="0.0"
                                onChange={(e) => setTipValue(BigInt(parseEther(e.target.value)))}
                                value={Number(tipValue) / 1e18}
                                fontFamily={"poppins"}
                                fontWeight={"500"}
                                fontSize={"sm"}
                                border={"none"}
                            >
                            </Input>
                            <InputRightElement>
                                <Text
                                    color={"brand.primary_text"}
                                    fontFamily={"poppins"}
                                    fontWeight={"500"}
                                    fontSize={"sm"}
                                >
                                    BERA
                                </Text>
                            </InputRightElement>
                        </InputGroup>
                        <Text
                            color={"brand.primary_text"}
                            fontFamily={"poppins"}
                            fontWeight={"500"}
                            fontSize={"10px"}
                            fontStyle={"italic"}
                            alignSelf="flex-end"
                        >
                            {`Max Balance: ${Number(data?.formatted).toFixed(4)} BERA`}
                        </Text>

                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                            mt={"12px"}
                        >
                            <Text
                                color={"brand.primary_text"}
                                fontFamily={"poppins"}
                                fontWeight={"500"}
                                fontSize={"10px"}
                                mb={"6px"}
                            >
                                Tip Percentage from your balance
                            </Text>
                            <ButtonGroup>
                                <Button
                                    bg={'brand.button_background'} 
                                    onClick={() => SetTipValueWithBalance(0.005)}
                                    maxW={"56px"}
                                    _hover={{
                                        transform: "scale(1.1)",
                                        transition: "all 0.5s ease-in-out",
                                        background: "brand.button_background_hover",
                                    }}
                                >
                                    <Text
                                        fontFamily={"poppins"}
                                        fontWeight={"500"}
                                        fontSize={"sm"}
                                        color={"brand.secondary_text"}
                                    >
                                        0.5%
                                    </Text>
                                </Button>
                                <Button
                                    bg={'brand.button_background'} 
                                    onClick={() => SetTipValueWithBalance(0.01)}
                                    maxW={"56px"}
                                    _hover={{
                                        transform: "scale(1.1)",
                                        transition: "all 0.5s ease-in-out",
                                        background: "brand.button_background_hover",
                                    }}
                                >
                                    <Text
                                        fontFamily={"poppins"}
                                        fontWeight={"500"}
                                        fontSize={"sm"}
                                        color={"brand.secondary_text"}
                                    >
                                        1%
                                    </Text>
                                </Button>

                                <Button
                                    bg={'brand.button_background'} 
                                    onClick={() => SetTipValueWithBalance(0.02)}
                                    maxW={"56px"}
                                    _hover={{
                                        transform: "scale(1.1)",
                                        transition: "all 0.5s ease-in-out",
                                        background: "brand.button_background_hover",
                                    }}
                                >
                                    <Text
                                        fontFamily={"poppins"}
                                        fontWeight={"500"}
                                        fontSize={"sm"}
                                        color={"brand.secondary_text"}
                                    >
                                        2%
                                    </Text>
                                </Button>

                                <Button
                                    bg={'brand.button_background'} 
                                    onClick={() => SetTipValueWithBalance(0.05)}
                                    maxW={"56px"}
                                    _hover={{
                                        transform: "scale(1.1)",
                                        transition: "all 0.5s ease-in-out",
                                        background: "brand.button_background_hover",
                                    }}
                                >
                                    <Text
                                        fontFamily={"poppins"}
                                        fontWeight={"500"}
                                        fontSize={"sm"}
                                        color={"brand.secondary_text"}
                                    >
                                        5%
                                    </Text>
                                </Button>
                           </ButtonGroup>
                        </Flex>
                    </Flex>

                </ModalBody>
                <ModalFooter
                    justifyContent="center"
                    alignItems="center"
                >
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button
                        disabled={!write}
                        loadingText="...Minting"
                        isLoading={isLoading && !isIdle}
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => write?.()}
                    >Gib Bera</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default MintModal




