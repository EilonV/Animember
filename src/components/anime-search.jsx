import { useDispatch } from "react-redux"
import { sortAnimes } from "../features/anime/animeSlice"
import axios from 'axios'
// import { Link } from "react-router-dom"

export const SearchBar = ({ handleSearch, currAnime }) => {
    const MAX = 14267
    const dispatch = useDispatch()

    const handleSelect = (ev) => {
        dispatch(sortAnimes([currAnime, ev.target.value]))
    }
    const getRandomAnime = () => {
        console.log('random')
    }
    const anime = axios.get(`https://kitsu.io/api/edge/anime/${Math.floor(Math.random(0) * MAX)}`)
        .then((res) => console.log(res.data.data))
    console.log(anime)

    return <section className="search-bar flex align-center space-between">
        <form onSubmit={handleSearch}>
            <input type="text" placeholder="e.g. Attack on titan..." />
            <button >Search</button>
        </form>
        <div className="filters">
            <button onClick={getRandomAnime}>Random anime</button>
            <select onChange={handleSelect}>
                <option value="" defaultValue>Sort by</option>
                <option value="ep">Episodes</option>
                <option value="rate">Rating</option>
                <option value="name">Name</option>
            </select>
        </div>


        {/* <Link to={`/anime/${anime.id}`}>
            <p>{anime.id}</p>
        </Link> */}

    </section>
}

