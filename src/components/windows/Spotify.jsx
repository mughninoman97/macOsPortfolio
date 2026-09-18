import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({windowName, setWindowState}) => {
    return (
        <MacWindow width='50vw' height='50vh' windowName={windowName} setWindowState={setWindowState}>
            <div className="spotify-window">
                <iframe data-testid="embed-iframe" style={{ borderRadius: "10px" }} src="https://open.spotify.com/embed/artist/4npEfmQ6YuiwW1GpUmaq3F?utm_source=generator&si=b7300506a71446eb" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </MacWindow>
    )
}

export default Spotify