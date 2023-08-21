import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  createShorthandFactory,
  customPropTypes,
  getElementType,
  getUnhandledProps,
} from '../../lib'

/**
 * A message list can contain an item.
 */
const MessageItem = React.forwardRef(function (props, ref) {
  const defaultProps = { as: 'li' }
  const mergedProps = { ...defaultProps, ...props }
  const { children, className, content } = mergedProps

  const classes = cx('content', className)
  const rest = getUnhandledProps(MessageItem, mergedProps)
  const ElementType = getElementType(MessageItem, mergedProps)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

MessageItem.displayName = 'MessageItem'
MessageItem.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

MessageItem.create = createShorthandFactory(MessageItem, (content) => ({ content }))

export default MessageItem
