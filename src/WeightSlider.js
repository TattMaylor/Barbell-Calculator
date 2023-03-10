import React, { Component } from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default class WeightSlider extends Component {
	constructor(props) {
		super(props)
		const { value } = this.props
		this.state = { value }
	}
	setValue(e) {
		this.setState({ value: e })
	}
	update() {
		this.props.update(this.state)
	}
	render() {
		return <>
		<h2>{this.props.heading}: {this.state.value}</h2>
      <Slider step='2.5' max={this.props.max} value={this.state.value} onChange={this.setValue.bind(this)}/>
    </>
	}
}
