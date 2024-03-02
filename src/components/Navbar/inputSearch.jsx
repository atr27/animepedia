"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

export default function InputSearch() {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        if(!keyword || keyword.trim() == "") return
        
        if (event.key === 'Enter' || event.type === 'click') {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <>
            <div className="relative">
                <input
                    placeholder="Search Anime..."
                    className="w-full p-2 rounded"
                    ref={searchRef}
                    onKeyDown={handleSearch}
                />
                <button className="absolute top-1 end-5 right-0" onClick={handleSearch}>
                    <MagnifyingGlass size={32} />
                </button>
            </div>

        </>
    )
}
