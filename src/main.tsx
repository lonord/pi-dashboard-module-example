import { Button } from '@lonord/react-electron-components'
import * as React from 'react'
import styled from 'styled-components'

export interface MainProps {
	str: string
}

const Wrap = styled.div`
	padding: 8px;
`

export default class Main extends React.Component<MainProps, any> {
	render() {
		return (
			<Wrap>
				<div>hello: {this.props.str}</div>
				<div><Button onClick={() => alert('hi')}>click</Button></div>
			</Wrap>
		)
	}
}
