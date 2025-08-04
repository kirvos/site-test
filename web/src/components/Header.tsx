import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          ALBA
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-600 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-600 hover:text-blue-600">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}