import Link from "next/link"

export default function Header({title, linkHref, linkTitle}) {
    return (
        <div className="flex justify-between items-center p-4">
            <h1 className="text-2xl font-bold text-warna-white">{title}</h1>
            {linkHref && linkTitle ? 
                <Link href={linkHref} className="md:text-xl text-md font-semibold bg-warna-accent text-warna-dark transition-all p-2 rounded-md border border-warna-accent">{linkTitle}</Link>
                : null
            }
            
        </div>
    )
}
