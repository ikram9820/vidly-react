import React from 'react';

const MovieDetails = (props) => {
    return ( <React.Fragment>
        <div className=" h1">
        {props.match.params.id}
        </div>
        <button className="btn btn-primary" onClick={() => props.history.replace('/' ) }>save</button>
    </React.Fragment>);
}
 
export default MovieDetails;