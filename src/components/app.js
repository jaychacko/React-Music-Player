import React, {Component} from 'react';
import SearchBar from './searchBar/SearchBar';
import Spotifydata from './utils/spotifydata';
import SongItem from './SongItem/SongItem';
import styles from './app.css';
import SongList from './SongList/SongList';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initialMessage: 'Song Name: ',
            MusicTitle: '',
            tracks:{},
            songPosition:0,
        };
    }

    fetchMusic = () => {

    Spotifydata(this.state.MusicTitle)
    .then(({tracks}) => this.setState({tracks}));
    }


    render() {
        const {tracks, MusicTitle,songPosition} = this.state;
        console.log("tracks: ", tracks);
        return (
            <div className={styles.root}>
                <h2 className={styles.h2}>{MusicTitle}</h2>
                <SearchBar yourtitle={MusicTitle} songTitle={(MusicTitle) => this.setState({MusicTitle: MusicTitle})} fetchMusic={this.fetchMusic}/>
      {tracks.items && <SongItem songData ={tracks.items[songPosition]} />}
{   tracks.items &&   <SongList listOfSongs={tracks.items} selectSong={(songPosition)=> this.setState({songPosition})}/>
}            </div>
        );
    }
}
