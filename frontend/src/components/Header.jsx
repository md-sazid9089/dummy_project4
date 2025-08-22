import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex flex-wrap justify-between items-center">
      <h1 className="text-xl font-bold">Bachelor Solution</h1>
      <nav className="space-x-4">
        <Link className="hover:underline" to="/housing">Housing</Link>
        <Link className="hover:underline" to="/maid">Maid</Link>
        <Link className="hover:underline" to="/shops">Shop</Link>
        <Link className="hover:underline" to="/map">Map</Link>
        <Link className="hover:underline" to="/login">Login</Link>
        <Link className="bg-white text-blue-600 px-2 py-1 rounded hover:bg-gray-100" to="/signup">Get Started</Link>
      </nav>
    </header>
  )
}
