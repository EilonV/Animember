import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import './assets/scss/styles.scss'
import { AnimeDetails } from './pages/anime-details'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/anime/:id' element={<AnimeDetails />} />
    </Routes>
  )
}

export default App
