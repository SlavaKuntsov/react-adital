import React from 'react'
import styled from 'styled-components'

import ServiceCard from '../../cards/ServiceCard'
import Heading from '../../text/Heading'


export default function _1(props) {
	let cards = [
		{
			active: false,
			logo: '../../../src/assets/_1/1.svg',
			heading: 'Logo a Branding'
		},
		{
			active: true,
			logo: '../../../src/assets/_1/2.svg',
			heading: 'Development'
		},
		{
			active: false,
			logo: '../../../src/assets/_1/3.svg',
			heading: 'Online Marketing'
		},
		{
			active: false,
			logo: '../../../src/assets/_1/4.svg',
			heading: 'Logo a Branding'
		},
		{
			active: false,
			logo: '../../../src/assets/_1/5.svg',
			heading: 'Startup'
		},
		{
			active: false,
			logo: '../../../src/assets/_1/6.svg',
			heading: 'Motion Graphic'
		}
	]

	return (
		<section className='mt-28 flex flex-col items-center gap-[70px]'>
			<Heading size='48' align='center'>
				Services we can help with
			</Heading>
			<div className='service-cards max-w-[1150px] flex flex-row flex-wrap gap-15 justify-between relative'>
				{cards.map((card, id) => {
					return (
						<ServiceCard
							key={id}
							active={card.active}
							logo={card.logo}
							heading={card.heading}
						/>
					)
				})}
				<Gradient></Gradient>
			</div>
		</section>
	)
}

const Gradient = styled.div`
	position: absolute;
	z-index: 0;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	height: 400px;
	width: 1150px;
	top: 100px;
	background: radial-gradient(
		50% 50% at 50% 50%,
		rgba(8, 91, 89, 0.18) 38.99%,
		rgba(26, 129, 127, 0) 100%
	);
`
