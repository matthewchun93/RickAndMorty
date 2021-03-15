import {useState} from 'react';
import {useSelector} from 'react-redux';    
import {ImageS, H1S, Paper, DescripSC, DivSC2} from './Styles';
import CharacterDetails from './CharacterDetails';
import SearchCharacter from './SearchCharacter';
import "../assets/styles.css"

function Characters() {

    const [charInfo, setCharInfo] = useState([]);
    const viewCharacters = useSelector(state => state.characters);

    const handleClick = async (character) => {
        console.log('clicked', character);
        setCharInfo(character)
    }
    // console.log(viewCharacters);
    // console.log(charInfo);
    return (
        <DivSC2>
            <H1S>Characters</H1S>
                <div className="row">
                    <div className="col container">
                        {viewCharacters.map((theCharacters) => {
                            return (
                                <div className="row">
                                <Paper>
                                    <button className="" onClick={()=>handleClick(theCharacters)}>
                                        <ImageS src={theCharacters.image} alt="" width="300px" height="300px" /> <br/>
                                        {theCharacters.name}
                                    </button>
                                </Paper>
                                </div>
                            )
                        })}
                    </div>
                    <DescripSC className="col">
                        <SearchCharacter char={viewCharacters}/>

                        <CharacterDetails details={charInfo} />
                    </DescripSC> 
                </div>
            <br /><br />

        </DivSC2>
    )
}

export default Characters;