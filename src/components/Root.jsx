import { NavLink, Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div className="h-full">
        <header className="bg-gray-800 text-white text-center p-4">
          <nav className="flex justify-center space-x-4">
          <h1 className="text-4xl">Pinata Website Boilerplate</h1>
          <div>
            <NavLink to="/" className="hover:underline">Home</NavLink>
            <NavLink to="/about" className="hover:underline">About</NavLink>
            <NavLink to="/contact" className="hover:underline">Contact</NavLink>
          </div>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
    </div>
  )
}
