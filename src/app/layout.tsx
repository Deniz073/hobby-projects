import './globals.css'
import Layout from './components/Layout'

const games = [
  { name: 'Color Memory', description: 'The classic color memory game', href: '/' },
]

const projects = [
  { name: 'Make a choice', description: 'To help you make a choice', href: '/make-a-choice' },
]

const dropdowns = [
  { name: 'Games', items: games, showPanel: false },
  { name: 'Projects', items: projects, showPanel: false }
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export const metadata = {
  title: 'Hobby projects',
  description: 'Hobby projects created by Deniz Erdem: github.com/Deniz073',
  themeColor: "#4285f4" 
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // eslint-disable-next-line react/no-children-prop
    <Layout children={children} />
  )
}
