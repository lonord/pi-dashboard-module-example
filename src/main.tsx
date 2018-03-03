import { Button } from '@lonord/react-electron-components'
import * as React from 'react'
import styled from 'styled-components'

interface MainPropsMap {
	str: string
}

interface MainProps extends MainPropsMap {
	updateProps: (props: Pick<MainPropsMap, keyof MainPropsMap>) => void
}

const Wrap = styled.div`
	padding: 8px;
`

export default class Main extends React.Component<MainProps, any> {

	count = 0

	onClick = () => {
		alert('hi')
		this.count++
		this.props.updateProps({
			str: 'guy' + this.count
		})
	}

	render() {
		return (
			<Wrap>
				<div>hello: {this.props.str}</div>
				<div><Button onClick={this.onClick}>click</Button></div>
			</Wrap>
		)
	}
}
