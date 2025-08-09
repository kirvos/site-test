import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-transparent backdrop-blur-md text-white p-4 fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-[var(--accent-color)]">
          ALBA社会保険労務士法人
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/" className="hover:text-[var(--secondary-color)] transition-colors">Home</Link></li>
            <li><Link href="/services" className="hover:text-[var(--secondary-color)] transition-colors">Services</Link></li>
            <li><Link href="/case-studies" className="hover:text-[var(--secondary-color)] transition-colors">Case Studies</Link></li>
            <li><Link href="/blog" className="hover:text-[var(--secondary-color)] transition-colors">Blog</Link></li>
            <li><Link href="/contact" className="bg-[var(--accent-color)] text-[var(--primary-color)] px-5 py-2 rounded-full hover:bg-white hover:text-[var(--accent-color)] transition-colors font-bold">お問い合わせ</Link></li>
          </ul>
        </nav>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
}