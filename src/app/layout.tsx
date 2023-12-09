import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  ChakraProviders from "@/assets/chakra/providers";
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'アマゾン商品QRコードメーカー',
  description: 'Amazonの商品をQRコード化し、画像保存できるサービスです。印刷後スマホでかざしたり、カメラロールからリンク先に移動し、すぐ購入できます。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
      <ChakraProviders>
        {children}
      </ChakraProviders>
      </body>
    </html>
  )
}
