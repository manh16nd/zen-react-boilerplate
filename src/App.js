import React from 'react'
import './scss/index.scss'
import { Switch, Route } from 'react-router-dom'
import HomePageContainer from './app/homepage/components/HomePageContainer'
import ProtectedRoute from './app/shared/ProtectedRoute'
import UserPageContainer from './app/userpage/components/UserPageContainer';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path='/' component={HomePageContainer} />
				<ProtectedRoute exact path='/a' component={UserPageContainer} />

				<Route component={HomePageContainer} />
			</Switch>
		</div>
	)
}

export default App
