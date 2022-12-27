import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    anime: '',
    topAnimes: '',
    currAnime: 'topAnimes'
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
        changeAnimeSelection: (state, action) => {
            state.currAnime = action.payload
        },
        getTopAnimes: (state, action) => {
            state.topAnimes = action.payload
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
                }
            }

        }
    },
})

// Action creators are generated for each case reducer function
export const { changeAnime, changeAnimeSelection, getTopAnimes, sortAnimes } = animeSlice.actions

export default animeSlice.reducer