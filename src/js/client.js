import ReactDom from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from './Layout';
import Header from './components/Header';
import Footer from './components/Footer';



const app = document.getElementById('app');

ReactDom.render(
	<Router history={hashHistory}>
		<Route path='/' component={Layout}>
			<IndexRoute component={Header}></IndexRoute>
			<Route path="footer" component={Footer}></Route>
		</Route>
	</Router>,
app);