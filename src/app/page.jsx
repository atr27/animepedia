
import AnimeList from "@/components/animeList";
import Header from "@/components/animeList/header";
import { getAnimeRespon, getNestedAnimeRespon, reproduceData } from "@/libs/api";

export default async function Page() {

  const topAnime = await getAnimeRespon("top/anime","limit=4")
  let recomendedAnime = await getNestedAnimeRespon("recommendations/anime","entry")
  recomendedAnime = reproduceData(recomendedAnime, 8)

  return (
    <>
      <section>
        <Header title="Popular Anime" linkTitle="See All" linkHref="/popular" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recommendation Anime"/>
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  )
}
