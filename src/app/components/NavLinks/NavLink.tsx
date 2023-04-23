import Link from "next/link"

interface NavLinkProps {
  href: string
  name: string
}

export default function NavLink({ href, name } : NavLinkProps) {
  return (
    <Link href={href} className="text-sm font-semibold leading-6 text-gray-900">
      {name}
    </Link>
  )
}
