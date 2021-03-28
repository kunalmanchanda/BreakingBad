import React from 'react'
import spin from '../Images/spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img src={spin} style={{ width: '200px', margin: 'auto', display:'block'}} alt="Loading"/>
        </div>
    )
}

export default Spinner
