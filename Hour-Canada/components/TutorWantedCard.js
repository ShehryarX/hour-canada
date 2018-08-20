import React from 'react';
import {
  View,
  Text
} from 'react-native';

const TutorWantedCard = (props) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerContainerStyle}>
        <View style={{alignSelf: 'flex-start', justifyContent: 'flex-start', flex: 1}}>
          <Text style={styles.titleTextStyle}>TUTORS WANTED</Text>
        </View>
        <View style={{alignSelf: 'flex-end', justifyContent: 'flex-end', flex: 1}}>
          <Text style={styles.timeStyle}>50 minutes ago</Text>
        </View>
      </View>

      <View style={styles.bodyStyle}>
        <Text>
          Lorem ipsum your mom. Lorem ipsum your mom. Lorem ipsum your mom. Lorem ipsum your mom. 
          Lorem ipsum your mom. Lorem ipsum your mom. Lorem ipsum your mom. Lorem ipsum your mom. 
        </Text>
      </View>
      <View style={styles.postedByStyle}>
        <Text>
          Posted by: Shehryar Assad
        </Text>
      </View>
    </View>
  )
};

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  headerContainerStyle: {
    paddingTop: 20,
    flexDirection: 'row',
  },
  titleTextStyle: {
    fontSize: 32,
  },
  timeStyle: {
  },
  bodyStyle: {

  },
  postedByStyle: {

  }
}

export default TutorWantedCard;