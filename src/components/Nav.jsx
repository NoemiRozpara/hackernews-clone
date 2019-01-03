import React from 'react'

const Nav = (props) => {
    console.log(props.currentCat)
    return (
        <nav>
            <span onClick={() => props.changeCurrentCat('new')}>New</span>
            <span onClick={() => props.changeCurrentCat('top')}>Top</span>
            <span onClick={() => props.changeCurrentCat('best')}>Best</span>
        </nav>
    )
}

export default Nav