import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind-styled-components'

import arrow from '../../../assets/header/arrow.svg'
import bottom from '../../../assets/header/bottom.svg'
import unsplah from '../../../assets/header/unsplash.png'

export default function HeaderBody() {
	let arr = []
	for (let i = 0; i <= 1900 / 80; i++) {
		arr.push(1)
	}
	return (
		<div className='header-body'>
			<img
				className='unsplash absolute left-0 right-20 mx-auto top-[175px] z-20'
				src={unsplah}
				height={440}
				alt='unsplah'
			/>
			<div className='allLines flex flex-row gap-[70px] w-[1800px] h-[1100px] z-[2] justify-center  absolute top-0 right-0 left-0 mx-auto'>
				{arr.map((line, id) => {
					return <Line key={id} />
				})}
			</div>
			<Gradient></Gradient>

			<div className='text flex flex-col gap-14 items-center'>
				<div className='big flex flex-row gap-20 items-center ml-8'>
					<H1>
						<Z20 className='z-20'>Digit</Z20>
						<span className='z-10 ml-2 text-[#e8e8e8]'>al</span>
					</H1>
					<H1 className=''>
						<Z20 className='z-20'>A</Z20>
						<span className='z-10 -ml-6 text-[#e8e8e8]'>gency</span>
					</H1>
				</div>
				<h3 className='font-pop text-[#F6F6F6] font-normal text-2xl z-30 drop-shadow-2xl shadow-slate-600 w-[745px] text-center'>
					Websites, mobile applications, UX / UI design, logo and
					branding, social media marketing.
				</h3>
				<div className='get-started flex flex-row gap-5 items-center z-20 bg-[#8BE5E3] p-[10px] rounded-[37px]'>
					<p className='font-pop font-medium text-xl ml-7'>
						Get started
					</p>
					<img src={arrow} alt='arrow' />
				</div>
				<img
					src={bottom}
					width={111}
					height={111}
					alt='bottom'
					className='mt-32 z-20'
				/>
			</div>
		</div>
	)
}

const Gradient = styled.div`
	position: absolute;
	z-index: 0;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	top: -200px;
	width: 1600px;
	height: 1400px;
	background: radial-gradient(
		50% 50% at 50% 50%,
		rgba(0, 255, 249, 0.3) 7.22%,
		rgba(0, 234, 234, 0.28) 33.33%,
		rgba(13, 246, 240, 0.12) 66.67%,
		rgba(16, 140, 137, 0) 100%
	);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
const Line = styled.div`
	display: block;
	z-index: 1;
	width: 1px;
	min-height: 100%;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 30.51%, rgba(0, 0, 0, 0.00) 100%);
	);
`
// background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 39.51%, rgba(0, 0, 0, 0.00) 100%);
// 	background: linear-gradient(
// 	180deg,
// 	rgba(0, 0, 0, 0) 0%,
// 	rgba(0, 0, 0, 0.93) 47.92%,
// 	rgba(0, 0, 0, 0) 100%
const H1 = tw.h1`
	font-dm
	mt-52
	text-white
	font-bold
	text-[150px]
	flex
	flex-row
`

const Z20 = styled.span`
	text-shadow: #5e5e5e 0px 5px 5px;
	z-index: 20;
`
