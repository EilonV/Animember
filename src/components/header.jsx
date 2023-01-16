import { faCube } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useRef } from 'react'
import bg from '../assets/imgs/bg.png'
import $ from 'jquery';

export const Header = ({ handleSearch, myRef }) => {
    const modelRef = useRef(null)
    const imgRef = useRef(null)
    const modelValueRef = useRef(null)

    useEffect(() => {
        if (localStorage.getItem('3D-toggle') === 'true') {
            console.log('NO 3D in STORAGE')
            modelRef.current.style.display = 'none'
            // $('.switcher-input').checked()
        }
        console.log('useEffect')
    }, [])

    const executeScroll = () => {
        myRef.current.scrollIntoView()
    }

    const change3D = (ev) => {
        //either toggles the 3d model view (for peasants)
        if (ev.target.checked) {
            modelRef.current.style.display = 'none'
            imgRef.current.style.display = 'block'
        }
        else {
            modelRef.current.style.display = 'block'
            imgRef.current.style.display = 'none'
        }
        ev.target.checked ? ((modelRef.current.style.display = 'none') && (imgRef.current.style.display = 'block')) : ((modelRef.current.style.display = 'block') && (imgRef.current.style.display = 'none'))
        localStorage.setItem('3D-toggle', ev.target.checked)
        console.log('changed to: ', ev.target.checked)
        console.log(ev)
    }

    const checkStorage = () => {
        // console.log(localStorage.getItem('3D-toggle'))
        // $('.slider').addClass('off')
        // console.log(modelValueRef.current.checked)
        var iframe = document.querySelector('iframe')
        var el = iframe.contentWindow.frames
        console.log(el)

    }
    const reload = () => {
        console.log('reload')
    }


    return <header className="header-3d full">
        <div className='switcher-container flex align-center'>
            <button onClick={checkStorage}>TEST IT HERE</button>

            <div className='swticher-3d-svgs'>
                <FontAwesomeIcon className='fa-xl' icon={faCube} />
            </div>

            <label title='toggle 3D' className="switch" onChange={change3D}>
                <input ref={modelValueRef} className='switcher-input' id='switcher-input' type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>

        <iframe ref={modelRef} title="3d-model" src='https://my.spline.design/untitled-e56ac7ddb3c38e91c58df6a9e0a07acb/' frameBorder='0' width='100%' height='100%' ></iframe>
        <img ref={imgRef} src={bg} alt="" />

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