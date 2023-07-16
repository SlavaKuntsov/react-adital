import React from 'react'

import Heading from '../../text/Heading'
import TransparentInput from '../../inputs/TransparentInput'
import BigButton from '../../buttons/BigButton'

import _1Img from '../../../../src/assets/_4/1.png' 
import _2Img from '../../../../src/assets/_4/2.png' 

export default function _4(props) {

	let arr = [
		{text: 'Name', type: 'text', placeholder: 'Enter your name...'},
		{text: 'Email', type: 'email', placeholder: 'Enter your email...'},
		{text: 'Phone', type: 'tel', placeholder: '+123'},
	]

	return (
		<section className='mt-52 flex flex-row w-[1300px] items-center justify-between'>
			<div className='left flex w-[55%] flex-col items-start gap-8'>
				<Heading size='36' bold={false} align='start'>
					Get a free keystroke <br/> quote now
				</Heading>
				<div className="all-input flex flex-col items-start gap-5 mt-3">
					{arr.map((item, id) => {
						return <TransparentInput key={id} text={item.text} type={item.type} placeholder={item.placeholder}/>
					})}
				</div>
				<BigButton color='turquoise' size='20'>Get Free Quote</BigButton>
			</div>
			<div className='right w-[45%] relative'>
				<img src={_1Img} width={480} height={460} alt="1" className='z-20 relative'/>
				<img src={_2Img} width={725} height={590} alt="2" className='absolute -right-[350px] -top-[85px] min-w-[725px] min-h-[590] z-0'/>
			</div>
		</section>
	)
}
