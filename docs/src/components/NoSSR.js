import React from 'react'
import PropTypes from 'prop-types'

const NoSSR = ({ children, fallback = null }) => {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return mounted ? children : fallback
}

NoSSR.propTypes = {
  children: PropTypes.node.isRequired,
  /**
   * The fallback content to display.
   */
  fallback: PropTypes.node,
}

export default NoSSR
