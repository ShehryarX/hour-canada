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

      <View style={{flexDirection: 'row'}}>
        <Image source={require('../assets/images/shehryar_headshot.jpg')} style={styles.imageStyle} />
        <View style={styles.contributerInfo}>
          <Text style={{color: 'white', fontSize: 32}}>SHEHRYAR ASSAD</Text>
          <Text style={{color: 'white', fontSize: 16,}}>941 hours</Text>
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
    fontSize: 16
  },
  imageStyle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    flex: 1
  },
  contributerInfo: {
    flex: 3,
    paddingLeft: 20,
  }
}

export default TopContributer;