import { faCube } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';


export const Header = ({ handleSearch, myRef }) => {
    const headerRef = useRef(null)

    const executeScroll = () => {
        myRef.current.scrollIntoView()
    }
    const change3D = (ev) => {
        //either toggles the 3d model view (for peasants)
        ev.target.checked ? (headerRef.current.style.display = 'none') : (headerRef.current.style.display = 'block')
    }

    return <header className="header-3d full">
        <div className='switcher-container flex align-center'>
            <div className='swticher-3d-svgs'>
                <FontAwesomeIcon className='fa-xl' icon={faCube} />
            </div>
            <label title='toggle 3D' className="switch" onChange={change3D}>
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
        <iframe ref={headerRef} title="3d-model" src='https://my.spline.design/untitled-e56ac7ddb3c38e91c58df6a9e0a07acb/' frameBorder='0' width='100%' height='100%'></iframe>
        <section className="header-search">
            <h1>One place for all your <br />
                <span>anime</span> information</h1>
            <form onSubmit={handleSearch}>
                <div className="search-bar-header">
                    <input type="text" placeholder='Search anime...' />
                    <button onClick={executeScroll}>Search</button>
                </div>
            </form>
        </section>
        <div className="watermark-remover"></div>
    </header>
}