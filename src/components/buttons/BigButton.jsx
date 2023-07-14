import tw from 'tailwind-styled-components'

export default function BigButton({children, color, width}) {
	return (
		<div className='links-big w-[220px] h-full rounded-[37px] bg-purple flex items-center justify-center'>
			<Link $size='18px'>{children}</Link>
		</div>
	)
}

const Link = tw.p`
	h-4
	link
	font-pop 
	${s => (s.$size === '16px' ? 'text-[16px]' : 'text-[18px]')}
	font-medium 
	text-white 
	flex 
	items-center
	z-20
`
