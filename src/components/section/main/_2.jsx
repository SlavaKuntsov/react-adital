import React from 'react'

import BigButton from '../../buttons/BigButton'
import GraySmallP from '../../text/GraySmallP'
import Heading from '../../text/Heading'
import OrangeSmall from '../../text/OrangeSmall'

import rest from '../../../../src/assets/_2/Rectangle 40.png'

export default function _2(props) {
	return (
		<section className='mt-44 flex flex-row items-center min-w-[1540px] justify-between'>
			<div className='left w-[51%] flex flex-col items-start gap-4'>
				<OrangeSmall>Featured case study</OrangeSmall>
				<div className='text flex flex-col gap-8 items-start w-[500px]'>
					<Heading size='48' align='start'>
						Logo, Identity & Web Design for Uber
					</Heading>
					<GraySmallP size='18'>
						Donec metus lorem, vulputate at sapien sit amet, auctor
						iaculis lorem. In vel hendrerit nisi. Vestibulum eget
						risus vent. Aliquam tristique libero at dui sodales, et
						placerat orci lobortis.
					</GraySmallP>
					<GraySmallP size='18'>
						Maecenas ipsum neque, elementum id dignissim et, <br />
						imperdiet vitae mauris.
					</GraySmallP>
				</div>
				<div className='info mt-8 flex flex-row justify-between items-center w-full'>
					<BigButton color='turquoise' size='20'>Read Case Study</BigButton>
					<div className="numbers flex flex-row items-center h-[80px]">
						<div className="number h-full flex flex-col justify-between">
							<p className='font-dm text-orange font-bold text-5xl'>0%</p>
							<GraySmallP size='18'>ROI increase</GraySmallP>
						</div>
						<hr className='h-[1px] w-[97px] rotate-90 bg-[#373737]'/>
						<div className="number h-full flex flex-col justify-between">
							<p className='font-dm text-orange font-bold text-5xl'>0k</p>
							<GraySmallP size='18'>Monthly website Visits</GraySmallP>
						</div>
					</div>
				</div>
			</div>
			<div className='right w-[46%]'>
				<img src={rest} alt="rest"/>
			</div>
		</section>
	)
}
