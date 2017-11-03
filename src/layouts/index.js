import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () => (
    <div>
    </div>
)

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet>
            <title>CODELINE.co</title>
        </Helmet>
        <Header />
        <div>
            {children()}
        </div>
    </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
