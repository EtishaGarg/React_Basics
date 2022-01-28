import React from 'react'

const Greet = (props) =>{
    const {name, heroName, children} = props
    return (
        <div>
            <h1>Hello {name}, your favourite superhero is {heroName}</h1>
            {children}
        </div>
    )
}

export default Greet;