import { useEffect } from "react"
import { useDispatch } from 'react-redux'
import { getTopAnimes, addToTopAnimes, addToAnimes, incOffset } from '../features/anime/animeSlice'
import axios from 'axios'
import { Link } from "react-router-dom"

export const Animes = ({ myRef, anime, topAnimes, currAnimeOffset, currAnime, currAnimeSearch }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        if (!topAnimes)
            // axios.get('https://kitsu.io/api/edge/anime?sort=-average_rating&page%5Blimit%5D=20')
            //     .then((res) => dispatch(getTopAnimes(res.data.data)))
            // axios.get('https://kitsu.io/api/edge/anime?sort=-averageRating&filter[seasonYear]=2022&filter[status]=current&page%5Blimit%5D=20&page[offset]=0')
            //     .then((res) => dispatch(getTopAnimes(res.data.data)))
            axios.get('https://kitsu.io/api/edge/anime?sort=popularityRank&filter[seasonYear]=2022&page%5Blimit%5D=20')
                .then((res) => dispatch(getTopAnimes(res.data.data)))
    })

    const addAnimes = () => {
        if (currAnime === 'topAnimes') {
            axios.get(`https://kitsu.io/api/edge/anime?sort=popularityRank&filter[seasonYear]=2022&page%5Blimit%5D=20&page[offset]=${currAnimeOffset}`)
                .then((res) => dispatch(addToAnimes(['topAnimes', res.data.data])))
                .then(console.log(topAnimes))
        }
        else {
            axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${currAnimeSearch}&page%5Blimit%5D=20&page[offset]=${currAnimeOffset}`)
                .then((res) => dispatch(addToAnimes(['anime', res.data.data])),
                    console.log('i made it!')
                )
                .then(console.log(anime))
        }
        dispatch(incOffset())
    }
    console.log(currAnimeSearch)
    return <section ref={myRef} className="anime-list">
        <main className="animes">
            {anime ? anime.map((item) => {
                return <div className="anime" key={item.id}>
                    <Link to={`/anime/${item.id}`} state={{ item }}>
                        {item.attributes.posterImage ? (<img src={item.attributes.posterImage.large} alt="" />) : <img className="no-img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png' alt="no poster for this anime" />}
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
                        <p>{item.attributes.titles.en}</p>
                        <p>{item.attributes.titles.en === item.attributes.titles.en_jp ? '' : item.attributes.titles.en_jp}</p>
                        <p>{item.attributes.titles.ja_jp === item.attributes.titles.en_jp ? '' : item.attributes.titles.ja_jp}</p>
                    </div>
                })}
            { }
        </main>
        <div className="load-more flex justify-center">
            <button onClick={addAnimes}>LOAD MORE</button>
        </div>
    </section>
}