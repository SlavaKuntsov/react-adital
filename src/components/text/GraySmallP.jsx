import React from 'react'
import tw from 'tailwind-styled-components'

export default function GraySmallP({ children, size }) {
	return <P $size={size}>{children}</P>
}

const P = tw.p`
	p
	font-pop
	font-normal
	text-[#ACACAC]
	${s => (s.$size === '16' ? 'text-base' : 'text-lg')}
	z-20
	`
// ${s => (`text-${s.size}`)}
