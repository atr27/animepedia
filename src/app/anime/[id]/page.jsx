import { getAnimeRespon } from "@/libs/api"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const animeDetails = await getAnimeRespon(`anime/${id}`)
  
    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-warna-white">{animeDetails.data.title} - {animeDetails.data.year}</h3>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-warna-primary overflow-x-auto">
                <div className="w-56 p-2 flex flex-col justify-center items-center rounded border border-warna-accent">
                    <h3>Rank:</h3>
                    <p>{animeDetails.data.rank}</p>
                </div>
                <div className="w-56 p-2 flex flex-col justify-center items-center rounded border border-warna-accent">
                    <h3>Rating:</h3>
                    <p>{animeDetails.data.score}</p>
                </div>
                <div className="w-56 p-2 flex flex-col justify-center items-center rounded border border-warna-accent">
                    <h3>Episodes:</h3>
                    <p>{animeDetails.data.episodes}</p>
                </div>
            </div>
            <div className="pt-4 px-4 gap-2 flex flex-wrap justify-center items-center text-warna-primary">
                <div>
                    <Image
                        src={animeDetails.data.images.webp.image_url}
                        alt={animeDetails.data.images.jpg.image_url}
                        width={250}
                        height={250}
                    />
                </div>
                <p className="text-xl text-justify text-wrap">
                    {animeDetails.data.synopsis}
                </p>
            </div>
            <div>
                <VideoPlayer youtubeID={animeDetails.data.trailer.youtube_id} />
            </div>
        </>
    )
}

export default Page