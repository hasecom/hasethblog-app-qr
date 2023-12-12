import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  ChakraProviders from "@/assets/chakra/providers";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amazon商品QRコードメーカー',
  description: 'Amazonの商品をQRコード化し、画像保存できるサービスです。印刷後スマホでかざしたり、カメラロールからリンク先に移動し、すぐ購入できます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
          <link rel="shortcut icon" href="/favicons/favicon.ico" />
          <link rel="icon" href="/favicons/favicon.ico" type="image/x-icon" sizes="16x16" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-config" content="/favicons/browserconfig.xml" /> 
          <meta name="theme-color" content="#ffffff" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Amazon商品QRコードメーカー" />
          <meta name="twitter:description" content="Amazonの商品をQRコード化し、画像保存できるサービスです。印刷後スマホでかざしたり、カメラロールからリンク先に移動し、すぐ購入できます。" />
          <meta name="twitter:image" content="/images/thumbnail.png" />

      </head>
      <body className={inter.className}>
      <ChakraProviders>
        {children}
      </ChakraProviders>
      </body>
    </html>
  )
}
