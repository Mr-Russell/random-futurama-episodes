import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

const blankEpisode ={
  season: null,
  number: null,
  name: null,
  image: {original: null, medium: null},
  summary: null
}

function App() {
  const [episodeList, setEpisodeList] = useState([])
  const [episode, setEpisode] = useState(blankEpisode)
  
  useEffect(() => {
    axios.get('http://api.tvmaze.com/shows/347/episodes')
      .then(res => {
        const episodes = res.data
        const randomEpisode = episodes[Math.floor(Math.random() * episodes.length)]
        setEpisodeList(episodes)
        setEpisode({...randomEpisode, summary: randomEpisode.summary.slice(3, -4)})
      })
      .catch(err => console.log("API ERROR: ",err))
  }, [])

  return (
    <div className="App">
      <div>
        <h3>Season: {episode.season}</h3>
        <h3>Episode: {episode.number}</h3>
      </div>
      <h1>{episode.name}</h1>
      <img src={episode.image.medium} alt="Episode Image" />
      <p>{episode.summary}</p>
    </div>
  );
}

export default App;