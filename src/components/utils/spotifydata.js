import React from 'react';

import axios from 'axios';

const Spotifydata = (searchItem) =>  new Promise ((resolve , reject)=>{

   axios.get(`https://api.spotify.com/v1/search?q=${searchItem}&type=track`)

   .then( ({data}) => resolve(data))
   .catch((err) => reject(err));

});



export default Spotifydata;
