export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} ALBA. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Add SNS links here */}
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}