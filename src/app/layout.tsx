import './globals.css'
import Layout from './components/Layout'

export const metadata = {
  title: 'Hobby projects',
  description: 'Hobby projects created by Deniz Erdem: github.com/Deniz073',
  themeColor: "#f6f4fd",
  openGraph: {
    title: 'Hobby projects by Deniz Erdem',
    type: 'website',
    description: 'Hobby projects created by Deniz Erdem: github.com/Deniz073',
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
    description: 'Hobby projects created by Deniz Erdem: github.com/Deniz073',
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
