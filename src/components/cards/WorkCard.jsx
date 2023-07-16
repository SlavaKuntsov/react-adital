import React from 'react'

import GraySmallP from '../text/GraySmallP'
import Heading from '../text/Heading'

export default function WorkCard({ img, heading, text }) {
	return (
		<div className='card flex flex-col rounded-[30px] bg-[#0D0F1A]'>
			<img src={img} alt='card' className='rounded-t-[30px]' width={610}/>
			<div className="info flex flex-col gap-[10px] p-[20px] bg-transparent">
				<Heading size='28'>{heading}</Heading>
				<GraySmallP size='16'>{text}</GraySmallP>
			</div>
		</div>
	)
}
