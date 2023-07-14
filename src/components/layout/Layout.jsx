import tw from "tailwind-styled-components"

export default function Layout({ children }) {
	return (
		<Wrapper>
			{/* <Container> */}
				{children}
			{/* </Container> */}
		</Wrapper>
	)
}

const Wrapper = tw.div`
	wrapper
	bg-[#01020A]
	w-screen
`
const Container = tw.div`
	container
	max-w-[1610px] 
	mx-auto my-0
`
