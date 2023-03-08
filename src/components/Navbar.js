import Link from "next/link";

export default function Navbar(params) {
  return (
    <div className="w-full bg-gray-100 p-6 grid grid-cols-3 text-gray-800">
      <div className="col-span-1 uppercase py-3">
        <Link className="hover:bg-gray-800 py-4 px-4 hover:text-white duration-300 rounded-sm font-bold" href="#">Logo</Link>
      </div>
      <div className="col-span-1 flex gap-4 uppercase">
        <Link className="hover:bg-gray-800 py-2 px-4 hover:text-white duration-300 rounded-sm" href="/">Home</Link>
        <Link className="hover:bg-gray-800 py-2 px-4 hover:text-white duration-300 rounded-sm" href="/pages/profile">Portofolio</Link>
        <Link className="hover:bg-gray-800 py-2 px-4 hover:text-white duration-300 rounded-sm" href="#">About</Link>
        <Link className="hover:bg-gray-800 py-2 px-4 hover:text-white duration-300 rounded-sm" href="#">Contact</Link>
        <Link className="hover:bg-gray-800 py-2 px-4 hover:text-white duration-300 rounded-sm" href="#">Services</Link>
        <Link className="hover:bg-gray-800 py-2 px-4 hover:text-white duration-300 rounded-sm" href="#">Experience</Link>
      </div>
    </div>
  )
};
