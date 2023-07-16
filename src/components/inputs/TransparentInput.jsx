import React from 'react'
import GraySmallP from '../text/GraySmallP'

export default function TransparentInput({ text, type, placeholder }) {
	const [input, setInput] = React.useState('')

	return (
		<div className='input flex flex-col gap-[10px]'>
			<GraySmallP size='16'>{text}</GraySmallP>
			<input
				className='font-pop text-lg font-medium text-white w-[530px] py-[23px] px-[25px] rounded-[20px] border-white border-[1px] border-solid bg-transparent z-30'
				type={type}
				placeholder={placeholder}
				value={input}
				onChange={e => setInput(e.target.value)}
			/>
		</div>
	)
}
