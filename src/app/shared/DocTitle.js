import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const DocTitle = function (props) {
    const { title } = props

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title} | FulfillHub</title>
        </Helmet>
    )
}

DocTitle.defaultProps = {
    title: 'FulfillHub',
}

DocTitle.propTypes = {
    title: PropTypes.string,
}

export default DocTitle