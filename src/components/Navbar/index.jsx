import Link from "next/link"
import InputSearch from "./inputSearch"

export default function Navbar(){
  return (
   <header className="bg-warna-dark">
        <div className="flex md:flex-row flex-col justify-between md:items-center p-4">
            <Link href="/" className="font-semibold text-warna-accent text-4xl md:mb-0 mb-4">Anime-Pedia By TaufikR</Link>
            <InputSearch />
        </div>
   </header>
  )
}
