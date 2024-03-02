import Image from "next/image"
import Link from "next/link"

export default function AnimeList({ api }) {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
            {api.data?.map((anime) => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} className="cursor-pointer text-warna-primary hover:text-warna-accent transition-all">
                        <Image 
                            src={anime.images.webp.image_url}
                            alt="..."
                            width={350}
                            height={350}
                            className="w-full object-fill max-h-64"
                        />

                        <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                    </Link>
                )
            })}

        </div>
    )
}
