'use client'
import React from 'react'
import { VStack } from '@chakra-ui/react'
import { Header } from '..'
import { useIsMounted } from '@hooks/useIsMounted'

function PageLayout({ children }: { children: React.ReactNode }) {
    const isMounted = useIsMounted()
    if (!isMounted) {
        return null
    }
    return (
        <VStack
            width="100vw"
            minH="100vh"
            bg="brand.background"
        >
            {children}
            <Header />
        </VStack>
    )
    }

export default PageLayout