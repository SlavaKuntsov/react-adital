import React from 'react'
import styled from 'styled-components'

import GraySmallP from '../../text/GraySmallP'
import Heading from '../../text/Heading'

import rest from '../../../../src/assets/_3/dollar.png'

export default function _3(props) {
	return (
		<section className='mt-44 flex flex-row-reverse items-center max-w-[1340px] justify-between relative'>
			<div className='left w-[51%] flex flex-col items-start gap-4'>
				<Heading size='48' align='start'>
					My Regime Design, Development And Marketing.
				</Heading>
				<GraySmallP size='18'>
					Nulla et velit gravida, facilisis quam a, molestie ante.
					Mauris placerat suscipit dui, eget maximus tellus blandit a.
					Praesent non tellus sed ligula commodo blandit in et mauris.
					Quisque efficitur ipsum ut dolor molestie pellentesque.
				</GraySmallP>
				<GraySmallP size='18'>
					Nulla pharetra hendrerit mi quis dapibus. Quisque luctus,
					tortor a venenatis fermentum, est lacus feugiat nisi, id
					pharetra odio enim eget libero.
				</GraySmallP>
			</div>
			<div className='right w-[46%] z-20'>
				<img src={rest} alt='rest'/>
			</div>
			<Gradient></Gradient>
		</section>
	)
}


const Gradient = styled.div`
	position: absolute;
	z-index: 0;
	top: -300px;
	left: -250px;
	height: 1100px;
	width: 1100px;
	background: radial-gradient(
		50% 50% at 50% 50%,
		rgba(8, 91, 89, 0.4) 38.99%,
		rgba(26, 129, 127, 0) 100%
	);
`
