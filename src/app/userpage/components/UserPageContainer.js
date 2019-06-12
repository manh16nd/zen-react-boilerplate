import React from 'react'
import DocTitle from '../../shared/DocTitle'
import UserPage from './UserPage';

const UserPageContainer = function (props) {

    return (
        <div className="userpage-container">
            <DocTitle title="User page" />
            <UserPage {...props} />
        </div>
    )
}

export default UserPageContainer