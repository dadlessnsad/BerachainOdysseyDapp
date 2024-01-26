'use client'
import React from 'react'
import { VStack } from '@chakra-ui/react'
import { Footer, Header } from '..'
import { useIsMounted } from '@hooks/useIsMounted'

function PageLayout({ children }: { children: React.ReactNode }) {
    const isMounted = useIsMounted()
    if (!isMounted) {
        return null
    }

    window.onload = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }

    return (
        <VStack
            width="100vw"
            minH="100vh"
            bg="brand.background"
            position={"relative"}
        >   
            <Footer />
            {children}
            <Header />
        </VStack>
    )
}

export default PageLayout