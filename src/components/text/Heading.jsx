import classNames from 'classnames'
import React from 'react'
import tw from 'tailwind-styled-components'

export default function Heading({ children, size, align }) {
	return (
		<h3
			className={classNames(`heading font-dm text-white font-bold z-30`)}
			style={{ fontSize: `${size}px`, textAlign: `${align}` }}
		>
			{children}
		</h3>
	)
}
