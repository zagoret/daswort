import React from 'react';

export default (props) => {

    return (
        <div className="container-audio a">
            <audio controls loop preload="none">
                <source src={props.src}/>
                Your browser dose not Support the audio Tag
            </audio>
        </div>
    );
}