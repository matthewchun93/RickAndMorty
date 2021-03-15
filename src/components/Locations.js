import {useSelector} from 'react-redux';    
import {H1S, Paper, DivSC2} from './Styles';
import "../assets/styles.css"

function Locations() {

    const viewLocations = useSelector(state => state.locations);
    return (
        <DivSC2>
            <H1S>Locations</H1S>
            <div className="container">
            {viewLocations.map((theInfo) => {
            return (
                <Paper width="45%" height="auto">
                    <p>
                        Location Name: <strong>{theInfo.name}</strong><br/>
                        Location Type: <strong>{theInfo.type}</strong><br/>
                        Dimension: <strong>{theInfo.dimension}</strong><br/>
                        <div className="dropdown">
                            <span>Residents of Location</span>
                            <div className="dropdown-content">
                                <p>{theInfo.residents}</p>
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

export default Locations;