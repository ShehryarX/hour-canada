import React from 'react';
import {
  TouchableOpacity,
  Image
} from 'react-native';

const IdeasCard = ({image}) => {
  return (
    <TouchableOpacity style={styles.ideasContainer}>
      <Image source={image} style={styles.imageStyle} />
    </TouchableOpacity>
  );
}

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

