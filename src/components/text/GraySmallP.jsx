import React from 'react'
import tw from 'tailwind-styled-components'

export default function GraySmallP({ children, size, bool, active = false }) {
	
	const highlighting = () => {
		if (bool) {
			active = true
		}
	}

	return (
		<div className='flex flex-col gap-2'>
			<P onClick={highlighting} $size={size}>
				{children}
			</P>
			{active && <hr className='h-[2px] w-full bg-[#ACACAC]'/>}
		</div>
	)
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
