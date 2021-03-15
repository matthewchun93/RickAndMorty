import {useSelector} from 'react-redux';    
import {H1S, Paper, DivSC2} from './Styles';
import "../assets/styles.css"

function Episodes() {

    const viewEpisodes = useSelector(state => state.episodes);
    return (
        <DivSC2>
            <H1S>Episodes</H1S>
            <div className="container">
                {viewEpisodes.map((episode) => {
                    return (
                        <Paper width="30%" height="auto">
                            <p>
                                <strong>{episode.name}</strong><br/>
                                <strong>{episode.air_date}</strong><br/>
                                <div className="dropdown">
                                    <span>Episode Characters Dropdown</span>
                                    <div className="dropdown-content">
                                        <p>{episode.characters}</p>
                                    </div>
                                </div>
                            </p>
                        </Paper>
                    )
                })}
            </div>
            <br /><br />

        </DivSC2>
    )
}

export default Episodes;