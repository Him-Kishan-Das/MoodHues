import React from "react";
import Sinaki from './assets/sinaki sinaki.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import './Home.css';
import Shreya from "./assets/shreya ghosal.jpeg";

const Home = () =>{
    return (
        <>
            <div className="home">

                {/* Recent songs playlist */}
                <div className="heading">
                    Recent
                </div>
                <div className="recent-songs">
                    <div className="recent-song">
                        <div className="recent-song-image">
                            <img src={Sinaki} alt="" />
                        </div>
                        <div className="recent-song-title">Sinaki Sinaki</div>
                        <div className="recent-song-playicon">
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    </div>
                    <div className="recent-song">
                        <div className="recent-song-image">
                            <img src={Sinaki} alt="" />
                        </div>
                        <div className="recent-song-title">Sinaki Sinaki</div>
                        <div className="recent-song-playicon">
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    </div>
                    <div className="recent-song">
                        <div className="recent-song-image">
                            <img src={Sinaki} alt="" />
                        </div>
                        <div className="recent-song-title">Sinaki Sinaki</div>
                        <div className="recent-song-playicon">
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    </div>
                    <div className="recent-song">
                        <div className="recent-song-image">
                            <img src={Sinaki} alt="" />
                        </div>
                        <div className="recent-song-title">Sinaki Sinaki</div>
                        <div className="recent-song-playicon">
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    </div>
                    <div className="recent-song">
                        <div className="recent-song-image">
                            <img src={Sinaki} alt="" />
                        </div>
                        <div className="recent-song-title">Sinaki Sinaki</div>
                        <div className="recent-song-playicon">
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    </div>
                    <div className="recent-song">
                        <div className="recent-song-image">
                            <img src={Sinaki} alt="" />
                        </div>
                        <div className="recent-song-title">Sinaki Sinaki</div>
                        <div className="recent-song-playicon">
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    </div>
                    <div className="recent-song">
                        <div className="recent-song-image">
                            <img src={Sinaki} alt="" />
                        </div>
                        <div className="recent-song-title">Sinaki Sinaki</div>
                        <div className="recent-song-playicon">
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    </div>
                    <div className="recent-song">
                        <div className="recent-song-image">
                            <img src={Sinaki} alt="" />
                        </div>
                        <div className="recent-song-title">Sinaki Sinaki</div>
                        <div className="recent-song-playicon">
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    </div>
                    
                </div>

                {/* Playlists made for you */}
                <div className="heading" style={{marginTop: '20px'}}>
                    Recent Playlist
                </div>
                <div className="recent-playlists">
                    <div className="recent-playlist">
                        <div className="recent-playlist-image">
                            <img src={Shreya} alt="" />
                        </div>
                        <div className="recent-playlist-title">
                            Shreya Ghosal Top 100 Hits
                        </div>
                    </div>
                    <div className="recent-playlist">
                        <div className="recent-playlist-image">
                            <img src={Shreya} alt="" />
                        </div>
                        <div className="recent-playlist-title">
                            Shreya Ghosal Top 100 Hits
                        </div>
                    </div>
                    <div className="recent-playlist">
                        <div className="recent-playlist-image">
                            <img src={Shreya} alt="" />
                        </div>
                        <div className="recent-playlist-title">
                            Shreya Ghosal Top 100 Hits
                        </div>
                    </div>
                    <div className="recent-playlist">
                        <div className="recent-playlist-image">
                            <img src={Shreya} alt="" />
                        </div>
                        <div className="recent-playlist-title">
                            Shreya Ghosal Top 100 Hits
                        </div>
                    </div>
                    <div className="recent-playlist">
                        <div className="recent-playlist-image">
                            <img src={Shreya} alt="" />
                        </div>
                        <div className="recent-playlist-title">
                            Shreya Ghosal Top 100 Hits
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Home;