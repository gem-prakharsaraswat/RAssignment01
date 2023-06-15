import React from 'react';
const Info = (parameters) => {
    if (parameters.visible) {
        return (
            <>
                <span>This is my React-Assignment-01</span>
                <br /><br />
                <button onClick={() => { parameters.setvisible(); }} className="btn">Display Details</button>
            </>
        )
    }
    else {
        return (
            <>
                <button onClick={() => { parameters.setvisible(); }} className="btn">Display Details</button>
            </>
        )
    }
}

export default Info;