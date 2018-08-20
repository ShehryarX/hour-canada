import React from 'react';
import {
	createSwitchNavigator,
	createStackNavigator
} from "react-navigation";
import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Popup from '../screens/Popup';


const AuthStack = createStackNavigator({
	SignIn: Login,
	SignUp: SignUp,
})

const MainStack = createStackNavigator(
	{
		Main: MainTabNavigator,
		Popup: Popup
	},
	{
		initialRouteName: "Main",
		mode: "modal",
	    headerMode: "none"
	}
)

export default createSwitchNavigator(
	{
		Auth: AuthStack,
		Main: MainStack
	},
	{
		initialRouteName: "Auth"
	}
)