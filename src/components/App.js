import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {setCharacters, setEpisodes, setLocations} from '../actions/templateAction';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchCharacter = async() => {
      let charHold = [];
      for (let i = 1; i <= 34; i++) {
        const url = `https://rickandmortyapi.com/api/character?page=${i}`
        const response = await fetch(url)
        const data = await response.json()
        charHold = charHold.concat(data.results)
      }
      dispatch(setCharacters(charHold));
    }
    fetchCharacter();

    const fetchEpisode = async() => {
      let episodeHold = [];
      for (let i = 1; i <= 3; i++) {
        const url = `https://rickandmortyapi.com/api/episode`
        const response = await fetch(url)
        const data = await response.json()
        episodeHold = episodeHold.concat(data.results)
      }
      dispatch(setEpisodes(episodeHold))
    }
    fetchEpisode();

    const fetchLocation = async() => {
      let locationHold = [];
      for (let i = 1; i <= 6; i++) {
        const url = `https://rickandmortyapi.com/api/location`
        const response = await fetch(url)
        const data = await response.json()
        locationHold = locationHold.concat(data.results)
      }
      dispatch(setLocations(locationHold))
    }
    fetchLocation();
  }, [])

  return (
    <>
      <div className="parallax"></div>
    </>
  );
}

export default App;
