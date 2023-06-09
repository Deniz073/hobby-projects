import Link from "next/link"

interface NavLinkProps {
  key?: string
  href: string
  children: React.ReactNode
  onClick?: () => void
}

export default function ResponsiveDropDownLink({ key, href, children, onClick }: NavLinkProps) {
  return (
    <Link onClick={onClick} key={key} href={href} className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
      {children}
    </Link>
  )
}
