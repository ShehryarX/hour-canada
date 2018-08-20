import React, { Component } from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

export default class Popup extends Component {
  state = {
    title: '',
    dateAndTime: '',
    description: '',
  }

  render() {
    return (
      <View styles={styles.containerStyle}>
        <View style={{backgroundColor: '#F05C4B', paddingTop: 30, paddingBottom: 10}}>
          <Image source={require('../assets/images/hourglass.png')} style={{height: 60, width: 60, alignSelf: 'center',}} />
        </View>

        <View style={{flexDirection: 'row', paddingVertical: 5}}>
          <TouchableOpacity style={styles.buttonStyle1}>
            <Text style={{fontFamily: 'raleway-bold', fontSize: 24, textAlign: 'center', color: 'white'}}>REQUEST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle2}>
            <Text style={{fontFamily: 'raleway-bold', fontSize: 24, textAlign: 'center', color: '#F05C4B'}}>GIVE</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={{fontFamily: 'raleway-bold', fontSize: 32, textAlign: 'center', color: '#F05C4B'}}>Hours left: 5 </Text>
          <View style={{margin: 20}}>
            <TextInput
              style={{height: 40, fontSize: 24}}
              onChangeText={(title) => this.setState({title})}
              placeholder=' TITLE'
              value={this.state.title}
              underlineColorAndroid={'red'}
            />
            <TextInput
              style={{height: 40, fontSize: 24}}
              onChangeText={(dateAndTime) => this.setState({dateAndTime})}
              placeholder=' DATE AND TIME'
              value={this.state.dateAndTime}
              underlineColorAndroid={'red'}
            />
            <TextInput
              style={{height: 40, fontSize: 24}}
              onChangeText={(description) => this.setState({description})}
              placeholder=' DESCRIPTION'
              value={this.state.description}
              multiline={true}
              numberOfLines={10}
              underlineColorAndroid={'red'}
              editable={true}
            />
          </View>
        </View>
      </View>
    ) 
  }
}

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
  },
  buttonStyle1: {
    backgroundColor: '#F05C4B',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    flex: 1,
  },
  buttonStyle2: {
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    margin: 10,
    padding: 10,
    flex: 1,
  }
}