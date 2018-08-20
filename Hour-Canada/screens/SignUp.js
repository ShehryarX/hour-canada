import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Button,
  TextInput
} from 'react-native';

// import TextInput from '../components/SignUpInput'

export default class Signup extends React.Component {

    state = {
        name: "",
        email: "",
        password: "",
        country: "",
        languages: "",
        skills: ""
    };

    static navigationOptions = {
        header: null,
      };

	render() {
		return(

            <View style={{
                flex: 1,
                backgroundColor:'#F05C4B',
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 50
                }}>
                    <Text style={styles.heading}>Sign Up</Text>

                </View>
                
                <View style={{
                    flex: 4,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -100
                }}>

                    <TextInput
                        autoCapitalize={(this.props.autoCapitalize != undefined && this.props.autoCapitalize) ? "words" : "none"}
                        placeholder="Name"
                        style={{
                            paddingLeft: 10,
                            paddingVertical: 10,
                            width: 280,
                            color: "#333",
                            fontSize: 20,
                            backgroundColor: "#fff",
                            borderWidth: 1,
                            borderColor: "#D3D3D3"
                        }}
                        onChangeText={ name => this.setState({name}) }
                        value={this.state.name}
                    />

                    <TextInput
                        autoCapitalize={(this.props.autoCapitalize != undefined && this.props.autoCapitalize) ? "words" : "none"}
                        placeholder="Email"
                        style={{
                            paddingLeft: 10,
                            paddingVertical: 10,
                            width: 280,
                            color: "#333",
                            fontSize: 20,
                            backgroundColor: "#fff",
                            borderWidth: 1,
                            borderColor: "#D3D3D3"
                        }}
                        onChangeText={ email => this.setState({email}) }
                        value={this.state.email}
                        keyboardType="email-address"
                    />

                    <TextInput
                        secureTextEntry={true}
                        autoCapitalize={(this.props.autoCapitalize != undefined && this.props.autoCapitalize) ? "words" : "none"}
                        placeholder="Password"
                        style={{
                            paddingLeft: 10,
                            paddingVertical: 10,
                            width: 280,
                            color: "#333",
                            fontSize: 20,
                            backgroundColor: "#fff",
                            borderWidth: 1,
                            borderColor: "#D3D3D3"
                        }}
                        onChangeText={ password => this.setState({password}) }
                        value={this.state.password}
                    />

                    <View style={{
                        flexDirection: "row",
                        height: 40,
                        marginTop: -1
                    }}>
                        <TextInput
                            autoCapitalize={(this.props.autoCapitalize != undefined && this.props.autoCapitalize) ? "words" : "none"}
                            placeholder="Country"
                            style={{
                                paddingLeft: 10,
                                paddingVertical: 10,
                                width: 140,
                                height: 40,
                                color: "#333",
                                fontSize: 20,
                                backgroundColor: "#fff",
                                borderWidth: 1,
                                borderColor: "#D3D3D3"
                            }}
                            onChangeText={ country => this.setState({country}) }
                            value={this.state.country}
                        />
                        <TextInput
                            autoCapitalize={(this.props.autoCapitalize != undefined && this.props.autoCapitalize) ? "words" : "none"}
                            placeholder="Languages"
                            style={{
                                paddingLeft: 10,
                                paddingVertical: 10,
                                width: 140,
                                height: 40,
                                color: "#333",
                                fontSize: 20,
                                backgroundColor: "#fff",
                                borderWidth: 1,
                                borderColor: "#D3D3D3"
                            }}
                            onChangeText={ language => this.setState({language}) }
                            value={this.state.language}
                        />

                    </View>

                    <TextInput
                            autoCapitalize={(this.props.autoCapitalize != undefined && this.props.autoCapitalize) ? "words" : "none"}
                            placeholder="Skills"
                            style={{
                                paddingLeft: 10,
                                paddingVertical: 10,
                                width: 280,
                                color: "#333",
                                fontSize: 20,
                                backgroundColor: "#fff",
                                borderWidth: 1,
                                borderColor: "#D3D3D3"
                            }}
                            onChangeText={ skills => this.setState({skills}) }
                            value={this.state.skills}
                        />

                    {/* <TextInput placeholder="Name" />
                    <TextInput placeholder="Email" />
                    <TextInput placeholder="Password" password />
                    <TextInput placeholder="Country of Origin" />
                    <TextInput placeholder="Languages" />
                    <TextInput placeholder="Skills" /> */}

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')} style={{
                        marginTop: 100,
                        paddingHorizontal: 100,
                        paddingVertical: 10,
                        borderRadius: 25,
                        backgroundColor: "#fff"
                    }}>
                        <Text style={{
                            color: "#F05C4B",
                            fontWeight: 'bold'
                        }}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    backgroundColor:'#fff',
    flex: 1,
    alignItems:'center',
    justifyContent :'center',
    flexDirection: 'column'
  },
  heading : {
    color: "#fff",
    fontSize: 30,
    fontWeight: 'bold'
  },
  signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
});