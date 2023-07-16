import classNames from 'classnames'
import tw from 'tailwind-styled-components'

export default function BigButton({children, color, size}) {
	return (
		<div className={
			classNames(
				'links-big rounded-[37px] flex items-center justify-center h-[75px]',
				{'bg-purple px-14' : color === 'purple'},
				{'bg-turquoise px-12' : color === 'turquoise'}
			)
		}>
			<Link className={
				classNames(
					{'text-base': size === "16"},
					{'text-lg': size === "18"},
					{'text-xl': size === "20"},
					{'text-2xl': size === "22"},
					{'text-white': color === 'purple'},
					{'text-black': color === 'turquoise'},
				)
			}>{children}</Link>
		</div>
	)
}

const Link = tw.p`
	h-4
	link
	font-pop 
	font-medium 
	flex 
	items-center
	z-20
`
