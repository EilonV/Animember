import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { getTopAnimes } from '../features/anime/animeSlice'
import axios from 'axios'
import { Link } from "react-router-dom"

export const Animes = ({ myRef, anime, topAnimes }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (!topAnimes)
            axios.get('https://kitsu.io/api/edge/anime?sort=-average_rating&page%5Blimit%5D=20')
                .then((res) => dispatch(getTopAnimes(res.data.data)))
    }, [])

    console.log(topAnimes);
    // topAnimes.sort((a, b) => a.id - b.id)
    console.log(window.innerHeight);
    return <section ref={myRef} className="anime-list">
        <main className="animes">
            {anime ? anime.map((item) => {
                return <div className="anime" key={item.id}>
                    <Link to={`/anime/${item.id}`} state={{ item }}>
                        <img src={item.attributes.posterImage.large} alt="" />
                        <span className="get-anime-details"><p>Get anime details</p></span>
                    </Link>
                    <p>{item.attributes.titles.en}</p>
                    <p>{item.attributes.titles.en !== item.attributes.titles.en_jp && item.attributes.titles.en_jp}</p>
                    <p>{item.attributes.titles.ja_jp}</p>
                </div>
            }) :
                topAnimes && topAnimes.map((item) => {

                    return <div className="anime" key={item.id}>
                        <Link to={`/anime/${item.id}`} state={{ item }}>
                            <img src={item.attributes.posterImage.large} alt="" />
                        </Link>
                        <span className="get-anime-details"><p>Get anime details</p></span>
                        <p>{item.attributes.titles.en}</p>
                        <p>{item.attributes.titles.en === item.attributes.titles.en_jp ? '' : item.attributes.titles.en_jp}</p>
                        <p>{item.attributes.titles.ja_jp === item.attributes.titles.en_jp ? '' : item.attributes.titles.ja_jp}</p>
                    </div>
                })}
            { }
        </main>
    </section>
}