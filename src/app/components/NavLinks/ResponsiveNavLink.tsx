import Link from "next/link"

interface NavLinkProps {
  href: string
  name: string
  onClick?: () => void
}

export default function ResponsiveLink({ href, name, onClick }: NavLinkProps) {
  return (
    <Link onClick={onClick} href={href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
      {name}
    </Link>
  )
}
