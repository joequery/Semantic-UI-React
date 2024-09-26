import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import { childrenUtils, customPropTypes, getElementType, getUnhandledProps } from '../../lib'

/**
 * A feed can contain a user element.
 */
const FeedUser = React.forwardRef(function (props, ref) {
  const defaultProps = { as: 'a' }
  const mergedProps = { ...defaultProps, ...props }
  const { children, className, content } = mergedProps
  const classes = cx('user', className)
  const rest = getUnhandledProps(FeedUser, mergedProps)
  const ElementType = getElementType(FeedUser, mergedProps)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

FeedUser.displayName = 'FeedUser'
FeedUser.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default FeedUser
