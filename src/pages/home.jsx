
import { changeAnime, changeAnimeSelection } from '../features/anime/animeSlice'
import axios from 'axios'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header } from "../components/header"
import { SearchBar } from "../components/anime-search"
import { Animes } from "../components/animes"

export const Home = () => {
    const dispatch = useDispatch()
    const myRef = useRef(null)

    const { anime } = useSelector((state) => state.anime)
    const { topAnimes } = useSelector((state) => state.anime)
    const { currAnime } = useSelector((state) => state.anime)

    console.log('currAnime', currAnime);

    const handleSearch = (ev) => {
        ev.preventDefault()
        axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${ev.target[0].value}`)
            .then((res) => dispatch(changeAnime(res.data.data)))
            .then(dispatch(changeAnimeSelection('anime')))
            .then(console.log('currAnime', currAnime))
    }

    return <section className="search main-layout">
        <Header handleSearch={handleSearch} myRef={myRef} anime={anime} topAnimes={topAnimes} />
        <SearchBar handleSearch={handleSearch} anime={anime} topAnimes={topAnimes} currAnime={currAnime} />
        <Animes myRef={myRef} anime={anime} topAnimes={topAnimes} />
    </section>
}