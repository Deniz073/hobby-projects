import './globals.css'
import Layout from './components/Layout/Layout'

export const metadata = {
  title: 'Hobby projects by Deniz Erdem ',
  applicationName: 'Hobby projects and portfolio of Deniz Erdem',
  description: 'Hobby projects and portfolio website created by Deniz Erdem',
  authors: [{ name: 'Deniz Erdem', url: 'github.com/Deniz073' }],
  category: 'Portfolio',
  keywords: ['deniz-hobby-projects', 'deniz hobby projects', 'portfolio', 'react', 'nextjs', 'nextjs13'],
  colorScheme: "light",
  themeColor: "#f6f4fd",
  icons: '/images/nextjs-logo.png',
  openGraph: {
    title: 'Hobby projects by Deniz Erdem',
    type: 'website',
    description: 'Hobby projects created by Deniz Erdem',
    images: [
      { url: '/images/og-image.jpg' }
    ],
    url: 'https://deniz-hobby-projects.nl/',
    countryName: 'Netherlands',
    siteName: 'Hobby projects',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hobby projects by Deniz Erdem',
    description: 'Hobby projects created by Deniz Erdem',
    images: [
      { url: '/images/og-image.jpg' }
    ],
  },
  appleWebApp: {
    title: 'Hobby projects by Deniz Erdem',
    startupImage: '/images/og-image.jpg',
    capable: true,
    statusBarStyle: 'black-translucent',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>{children}</Layout>
  )
}
