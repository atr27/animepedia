
import { getAnimeRespon } from "@/libs/api";
import AnimeList from "@/components/animeList";
import Header from "@/components/animeList/header";


export default async function Page({params}) {

  const {keyword} = params

  const decodeKeyword = decodeURI(keyword)

  const searchAnime = await getAnimeRespon("anime",`q=${decodeKeyword}`)

  return (
    <>
      <section>
        <Header title={`Search result for ${decodeKeyword} :`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}
