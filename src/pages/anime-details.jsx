import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useLocation } from 'react-router-dom'

export const AnimeDetails = () => {

    const location = useLocation()
    const navigate = useNavigate();
    const { item } = location.state
    console.log('CURRENT ANIME', item);

    return <section className='anime-details flex'>
        <div className='go-back flex' onClick={() => navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeftLong} className="fa-xl" />
            <p>&nbsp;back to list</p>
        </div>
        {/* <img src={item.attributes.posterImage.original} alt={item.attributes.titles.en + ' poster image'} /> */}
        {item.attributes.posterImage ? (<img src={item.attributes.posterImage.original} alt={item.attributes.titles.en + ' poster image'} />) : <img className="no-img" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png' alt="no poster for this anime" />}

        <div className='flex column space-between'>
            <div>
                <h1>{item.attributes.titles.en}</h1>
                <h2> {item.attributes.titles.en_jp === item.attributes.titles.en ? '' : item.attributes.titles.en_jp}</h2>
                <h2>{item.attributes.titles.ja_jp}</h2>
            </div>
            <p>{item.attributes.synopsis}</p>
            <div className='flex'>
            </div>
            <div>
                <p>{item.attributes.ageRating}</p>
                <p>{item.attributes.ageRatingGuide}</p>
                <p>{item.attributes.nsfw && <span>NSFW</span>}</p>
                <p>Rating: {item.attributes.averageRating}</p>
                <p>Status: {item.attributes.status}</p>
                <p>Aired: {item.attributes.createdAt.slice(0, 10)}</p>
                <p>Episodes: {item.attributes.episodeCount}</p>
                {item.attributes.episodeLength && <p>Episode length: {item.attributes.episodeLength}min</p>}
                <p>{item.attributes.nextRelease && 'Next release:' + item.attributes.nextRelease}</p>
            </div>
        </div>

    </section>
}