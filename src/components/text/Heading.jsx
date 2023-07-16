import classNames from 'classnames'
import React from 'react'

export default function Heading({ children, size, bold = true, align = 'start' }) {
	return (
		<h3
			className={classNames(
				`heading font-dm text-white font-bold z-30`,
				{'text-5xl leading-tight' : size === "48"},
				{'text-4xl' : size === "36"},
				{'text-3xl' : size === "28"},
				{'text-2xl' : size === "24"},
				{'text-xl' : size === "20"},
				{'font-bold': bold },
				{'font-medium': !bold },
			)}
			style={{ textAlign: `${align}` }}
		>
			{children}
		</h3>
	)
}
