import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Header, PageLayout } from '@/components'
import { Web3Modal } from '@/context'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.background}>
        <Providers>
          <Web3Modal>
          <PageLayout>
            {children}
          </PageLayout>
          </Web3Modal>
        </Providers>
      </body>
    </html>
  )
}
