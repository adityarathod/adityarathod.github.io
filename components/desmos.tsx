import React, { FC } from 'react'

interface DesmosProps {
	url: string
}

const Desmos: FC<DesmosProps> = (props: DesmosProps) => {
	return (
		<iframe
			src={props.url}
			width='600px'
			height='300px'
			style={{ border: '1px solid #ccc' }}
			frameBorder='0'
		/>
	)
}

export default Desmos
