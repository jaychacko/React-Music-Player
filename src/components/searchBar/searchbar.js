import React, { PropTypes} from 'react';
import styles from './searchbar.css';


const SearchBar = (props) =>(

<div className={styles.root}>
<input className= {styles.input} onChange={(e) => props.songTitle(e.target.value)} type="text"  placeholder="Search for..."/>
    <button  onClick={props.fetchMusic} className={styles.button}type="button">Search</button>
</div>

);

SearchBar.propTypes={

songTitle: PropTypes.func,
fetchMusic:PropTypes.func,

}
export default SearchBar ;
