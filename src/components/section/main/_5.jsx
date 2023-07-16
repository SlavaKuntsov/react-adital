import React from 'react'

import OrangeSmall from '../../text/OrangeSmall'
import Heading from '../../text/Heading'
import GraySmallP from '../../text/GraySmallP'
import WorkCard from '../../cards/WorkCard'

export default function _5 (props) {

	let arr = [
		{img: '../../../../src/assets/_5/1.png', heading: 'Creative agency', text: 'Full Branding, Website, App'},
		{img: '../../../../src/assets/_5/2.png', heading: 'Digital Marketing', text: 'Logo, Website & Mobile App'},
		{img: '../../../../src/assets/_5/3.png', heading: 'Digital agency', text: 'Website, UI/UX'},
		{img: '../../../../src/assets/_5/4.png', heading: 'Plan Management', text: 'Branding, Website, IOS App'},
		{img: '../../../../src/assets/_5/5.png', heading: 'Social Engagement', text: 'Design, Development'},
		{img: '../../../../src/assets/_5/6.png', heading: 'Web Application', text: 'Logo, Webappp, App'}
	]
	
	return (
		<section className='mt-52 flex flex-col w-[1290px] items-center gap-[70px]'>
			<div className="header flex flex-row justify-between items-end w-full">
				<div className="text flex flex-col gap-4">
					<OrangeSmall>Our Project</OrangeSmall>
					<Heading size="48" bold={true}>Some of Our Finest <br/> Work</Heading>
				</div>
				<div className="options flex flex-row gap-20 justify-end pb-8">
					<GraySmallP bool={true} active={true} size='18'>All Works</GraySmallP>
					<GraySmallP bool={true} size='18'>Branding</GraySmallP>
					<GraySmallP bool={true} size='18'>Mobile app</GraySmallP>
				</div>
			</div>
			<div className="main">
				<div className="all-cards flex flex-row flex-wrap justify-between items-center gap-[70px]">
					{arr.map((item, id) => {
						return <WorkCard key={id} img={item.img} heading={item.heading} text={item.text}/>
					})}
				</div>
			</div>
		</section>
	)
};

