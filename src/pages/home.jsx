
import axios from 'axios'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeAnime, changeAnimeSelection, incOffset, resetOffset, changeAnimeSearch } from '../features/anime/animeSlice'

import { Header } from "../components/header"
import { SearchBar } from "../components/anime-search"
import { Animes } from "../components/animes"

export const Home = ({ counter }) => {
    const dispatch = useDispatch()
    const myRef = useRef(null)
    const { anime, topAnimes, currAnime, currAnimeOffset, currAnimeSearch } = useSelector((state) => state.anime)
    // console.log('currAnime', currAnime);

    const handleSearch = (ev) => {
        ev.preventDefault()
        axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${ev.target[0].value}&page%5Blimit%5D=20`)
            .then((res) => dispatch(changeAnime(res.data.data)))
            .then(dispatch(changeAnimeSelection('anime')))
            .then(console.log('currAnime', currAnime))
            .then(dispatch(changeAnimeSearch(ev.target[0].value)))
            .then(console.log(currAnimeSearch))
    }

    return <section className="search main-layout">
        <Header handleSearch={handleSearch} myRef={myRef} anime={anime} topAnimes={topAnimes} changeAnimeSearch={changeAnimeSearch} />
        <SearchBar handleSearch={handleSearch} anime={anime} topAnimes={topAnimes} currAnime={currAnime} changeAnimeSearch={changeAnimeSearch} />
        <Animes myRef={myRef} anime={anime} topAnimes={topAnimes} currAnime={currAnime} currAnimeOffset={currAnimeOffset} incOffset={incOffset} currAnimeSearch={currAnimeSearch} />
    </section>
}