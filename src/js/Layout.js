import React from 'react';
import { Link } from "react-router";

import Header from './components/Header';
import Footer from './components/Footer';

export default class Layout extends React.Component {

	render(){
		return(
			<div>
				<h1>This is routing test</h1>
				{this.props.children}
				<Link to="footer">Go Footer</Link><br/>
				<Link to="/">Go</Link>
			</div>
		);
	}
}