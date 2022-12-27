export const Header = ({ handleSearch, myRef }) => {
    const executeScroll = () => {
        myRef.current.scrollIntoView()
    }

    return <header className="header-3d full">
        <iframe title="3d-model" src='https://my.spline.design/untitled-e56ac7ddb3c38e91c58df6a9e0a07acb/' frameBorder='0' width='100%' height='100%'></iframe>
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