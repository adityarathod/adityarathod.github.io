import React, { FC } from 'react'

interface DesmosProps {
	url: string
}

const Desmos: FC<DesmosProps> = (props: DesmosProps) => {
	return (
		<iframe
			src={props.url}
			className='w-full max-w-lg h-80 border border-slate-300'
			frameBorder='0'
		/>
	)
}

export default Desmos
