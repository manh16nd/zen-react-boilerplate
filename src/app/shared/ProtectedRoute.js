import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import { getCookie } from '../../services/cookies'

const ProtectedRoute = function (props) {
    const { component, path, exact } = props
    const bearerToken = getCookie('bearertoken')

    return (bearerToken) ? <Route component={component} path={path} exact={exact} /> : <Redirect to='/' />
}

ProtectedRoute.defaultProps = {
    exact: false,
}

ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool,
}

export default ProtectedRoute