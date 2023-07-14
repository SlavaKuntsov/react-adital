import tw from "tailwind-styled-components"

import PurpleButton from '../../buttons/BigButton'


export default function Nav (props) {

	let smallLinks = ["Swallow-by", "Projects", "Contact"]
	
	return (
		<Container>
			<NavC>
				<div className="logo flex flex-row gap-4 items-center z-20">
					<img className="h-10" src="/src/assets/header/logo.svg" alt="logo" />
					<h1 className="font-dm text-white text-5xl font-medium ">Adital</h1>
				</div>
				<div className="nav-links flex flex-row gap-24 items-center z-10 h-[75px]">
					<div className="small-links flex flex-row gap-16 items-center">
						{smallLinks.map((link, id) => {
							return <Link 
								$size="16px"
								key={id}
							>
								{link}
							</Link>
						})}
					</div>
					<PurpleButton>Let’s Talk</PurpleButton>
				</div>
			</NavC>
		</Container>
	)
};

const NavC = tw.div`
	nav
	flex
	flex-row
	justify-between
	min-h-[75px]
	pt-6
`

const Link = tw.p`
	h-4
	link
	font-pop 
	${s => (s.$size === "16px" ? 'text-[16px]' : 'text-[18px]')}
	font-medium 
	text-white 
	flex 
	items-center
	z-20
`

const Container = tw.div`
	container
	max-w-[1610px] 
	mx-auto my-0
`