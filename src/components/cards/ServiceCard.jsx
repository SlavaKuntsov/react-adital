import React from 'react'

import GraySmallP from '../text/GraySmallP'
import Heading from '../text/Heading'

import arrow from '../../../src/assets/_1/arrow.svg'

export default function ServiceCard({ active, logo, heading }) {
	return !active ? (
		<div className='inactive p-[1px] w-96 h-[315px] z-30'>
			<div className='body flex flex-col gap-6 p-8'>
				<img
					src={logo}
					alt=''
					width={70}
					height={70}
					className='mb-1'
				/>
				<Heading size='24'>{heading}</Heading>
				<GraySmallP size='16'>
					Contrary to popular belief, Lorem Ipsum is not simply random
					text. It has roots in a piece of classical Latin
				</GraySmallP>
			</div>
		</div>
	) : (
		<div className='active p-[1px] bg-gradient-to-t from-bg to-[#8BE5E3] rounded-[40px] w-96 h-[290px] mb-14 z-30'>
			<div className='body bg-[#0B1F20] backdrop-blur-[75px] flex flex-col gap-6 p-8 rounded-[40px]'>
				<img
					src={logo}
					alt=''
					width={70}
					height={70}
					className='mb-1'
				/>
				<Heading size='24'>{heading}</Heading>
				<GraySmallP size='16'>
					Contrary to popular belief, Lorem Ipsum is not simply random
					text. It has roots in a piece of classical Latin
				</GraySmallP>
				<div className="read-more flex flex-row items-center justify-end gap-4 mt-3">
					<p className='font-pop text-base font-medium text-[#FF7642]'>Read more</p>
					<img src={arrow} alt="arrow" width={19} height={16}/>
				</div>
			</div>
		</div>
	)
}
