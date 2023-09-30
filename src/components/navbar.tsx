'use client'
import Link from "next/link";

function Navbar() {
  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white">
      <Link href={"/"}>
        <h1 className="text-gray-900 font-bold text-2xl">E-commerce</h1>
      </Link>

      <div className="flex items-center space-x-2.5 text-sm">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        </nav>
        <Link href={"/category"}>Category</Link>
        <Link href={"/shoppingcart"}>
          <button className="button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-black">
            My Bag
          </button>
        </Link>

      </div>
    </header>
  );
}

export default Navbar;
