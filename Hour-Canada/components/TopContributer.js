import React from 'react';
import { 
  View,
  Text,
  Image,
} from 'react-native';

const TopContributer = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>TOP CONTRIBUTER</Text>

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={require('../assets/images/shehryar_headshot.jpg')} style={styles.imageStyle} />
        <View style={styles.contributerInfo}>
          <Text style={{color: 'white', fontSize: 32, fontFamily: 'raleway-bold'}}>SHEHRYAR ASSAD</Text>
          <Text style={{color: 'white', fontSize: 16, fontFamily: 'raleway-bold'}}>941 hours</Text>
          <Text style={{color: 'white', fontSize: 16, paddingTop: 3}}>ENGLISH, URDU, HINDI</Text>
        </View>
      </View>
    </View>
  );
}

const styles = {
  containerStyle: {
    margin: 3,
    paddingVertical: 10,
    backgroundColor: '#F05C4B',
    paddingHorizontal: 10,
  },
  titleStyle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'raleway-bold',
    paddingBottom: 5
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    flex: 2
  },
  contributerInfo: {
    flex: 5,
    paddingLeft: 20,
  }
}

export default TopContributer;