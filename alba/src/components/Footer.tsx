export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#febf00] to-yellow-300 bg-clip-text text-transparent">
              ALBA社会保険労務士法人
            </h3>
          </div>
          <div className="border-t border-white/20 pt-4">
            <p className="text-sm text-white/80">
              © {new Date().getFullYear()} ALBA社会保険労務士法人. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
