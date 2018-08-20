import React from "react";
import {
    View,
    Button,
    TouchableOpacity,
    AsyncStorage,
    Text,
    ImageBackground,
    Image
} from "react-native";
import backgroundImage from "../assets/images/signin.png";
import logo from "../assets/images/logoWhite.png";
import TextInput from "../components/AuthTextInput";

export default class Login extends React.Component {

    static navigationOptions = {
        header: null
    }

    render = () => (

        <ImageBackground source={backgroundImage} style={{width: '100%', height: '100%'}}>
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flex: 2,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image source={logo} style={{width: 250, height: 100}}/>
                </View>
                <View style={{
                    flex: 3,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -50
                }}>
                    <TextInput placeholder="Username" />
                    <TextInput placeholder="Password" password /> 

                    <TouchableOpacity onPress={this._signInAsync} style={{
                        marginTop: 5,
                        paddingHorizontal: 100,
                        paddingVertical: 10,
                        borderRadius: 25,
                        backgroundColor: "#F05C4B"
                    }}>
                        <Text style={{
                            color: "#fff",
                            fontWeight: 'bold'
                        }}>Sign In</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Button title="Create a new account" color='#fff' onPress={this._signUpScreen}/>
                </View>
            </View>
        </ImageBackground>
    )

    _signUpScreen = () => {
        this.props.navigation.navigate('SignUp');
    }

    _signInAsync = async () => {
        this.props.navigation.navigate('Main');
    }

}