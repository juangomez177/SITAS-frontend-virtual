import "styles/tailwind.css";
import { Roboto } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Providers } from "components/providers/Providers";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Providers>
          <AppRouterCacheProvider>
            {children}
          </AppRouterCacheProvider>
        </Providers>
      </body>
    </html>
  )
}
