"use client"
import HeaderMenu from '@/components/Utilities/HeaderMenu'
import Pagination from '@/components/Utilities/Pagination'
import AnimeList from '@/components/animeList'
import React, { useEffect, useState } from 'react'
import { getAnimeRespon } from '@/libs/api'

const Page = () => {
  
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const popularAnime = await getAnimeRespon("top/anime",`page=${page}`)
    setTopAnime(popularAnime)
  }

  useEffect(()=>{
      fetchData()
  }, [page])

  return (
    <>
        <HeaderMenu title={`Most Populer Anime ${page}#`}/>
        <AnimeList api={topAnime} />
        <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page}/>
    </>
  )
}

export default Page
