import React from 'react';
import {
  TouchableOpacity,
  Image
} from 'react-native';

const IdeasCard = ({imagePath}) => (
  <TouchableOpacity style={styles.ideasContainer}>
    <Image source={require('../img/plumbing.jpg')} style={styles.imageStyle} />
  </TouchableOpacity>
)

const styles = {
  ideasContainer: {
    paddingHorizontal: 5,
  },
  imageStyle: {
    width: 150,
    height: 120,  
    borderWidth: 1,
    borderRadius: 10,
  },
  ideasText: {
    fontSize: 20,
    color: '#fff',
  }
}


export default IdeasCard;

