import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    anime: '',
    topAnimes: '',
    currAnime: 'topAnimes',
    currAnimeOffset: 20,
    currAnimeSearch: ''
}

export const animeSlice = createSlice({

    // action payload is accepting only one parameter so an array is being sent to the reducer 
    // and the first item will always be the state parameter

    name: 'anime',
    initialState,
    reducers: {
        changeAnime: (state, action) => {
            state.anime = action.payload
        },
        changeAnimeSearch: (state, action) => {
            state.currAnimeSearch = action.payload
        },
        changeAnimeSelection: (state, action) => {
            state.currAnime = action.payload
        },
        resetOffset: (state) => {
            state.currAnimeOffset = 20
        },
        resetAnimes: (state) => {
            state.anime = ''
        },
        incOffset: (state) => {
            state.currAnimeOffset += 20
        },
        getTopAnimes: (state, action) => {
            state.topAnimes = action.payload
        },
        addToAnimes: (state, action) => {
            console.log(action.payload)
            switch (action.payload[0]) {
                case 'topAnimes':
                    console.log(...action.payload[1])
                    state.topAnimes.push(...action.payload[1])
                    break
                case 'anime':
                    state.anime.push(...action.payload[1])
                    console.log(...action.payload[1])
                    break
            }
        },
        addToTopAnimes: (state, action) => {
            state.topAnimes.push(...action.payload)
        },
        sortAnimes: (state, action) => {
            console.log(action.payload)
            if (action.payload[0] === 'topAnimes')
                switch (action.payload[1]) {
                    case 'ep':
                        state.topAnimes.sort((a, b) => b.attributes.episodeCount - a.attributes.episodeCount)
                        break
                    case 'rate':
                        state.topAnimes.sort((a, b) => +b.attributes.averageRating - +a.attributes.averageRating)
                        break
                    case 'name':
                        state.topAnimes.sort((a, b) => b.attributes.titles.en.localeCompare(a.attributes.titles.en, 'en'))
                        break
                    default:
                        break;
                }
            else {
                switch (action.payload[1]) {
                    case 'ep':
                        state.anime.sort((a, b) => b.attributes.episodeCount - a.attributes.episodeCount)
                        break
                    case 'rate':
                        state.anime.sort((a, b) => +b.attributes.averageRating - +a.attributes.averageRating)
                        break
                    case 'name':
                        state.anime.sort((a, b) => a.attributes.titles.en.localeCompare(b.attributes.titles.en, 'en'))
                        break
                    default:
                        break;
                }
            }

        }
    },
})


// Action creators are generated for each case reducer function
export const { changeAnime, changeAnimeSearch, changeAnimeSelection, getTopAnimes, addToTopAnimes, addToAnimes, sortAnimes, incOffset, resetOffset, resetAnimes } = animeSlice.actions

export default animeSlice.reducer