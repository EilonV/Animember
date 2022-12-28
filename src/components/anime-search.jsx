import { useDispatch } from "react-redux"
import { sortAnimes } from "../features/anime/animeSlice"

export const SearchBar = ({ handleSearch, anime, topAnimes, currAnime }) => {
    const dispatch = useDispatch()
    // const newAnimes = topAnimes.slice()
    // newAnimes.sort((a, b) => a.attributes.id - b.attributes.id)
    const handleSelect = (ev) => {
        dispatch(sortAnimes([currAnime, ev.target.value]))
    }

    return <section className="search-bar flex align-center space-between">
        <form onSubmit={handleSearch}>
            <input type="text" placeholder="e.g. Attack on titan..." />
            <button >Search</button>
        </form>
        <select onChange={handleSelect}>
            <option value="" defaultValue>Sort by</option>
            <option value="ep">Episodes</option>
            <option value="rate">Rating</option>
            <option value="name">Name</option>
        </select>
    </section>
}

