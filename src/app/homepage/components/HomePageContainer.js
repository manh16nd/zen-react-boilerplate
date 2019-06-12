import React from 'react'
import DocTitle from '../../shared/DocTitle'
import HomePage from './HomePage'

const HomePageContainer = (props) => {
    return (
        <div className="homepage-container">
            <DocTitle title="Homepage" {...props} />
            <HomePage />
        </div>
    )
}

export default HomePageContainer