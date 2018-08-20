import React from 'react';
import {
  View,
  Text
} from 'react-native';

const TutorWantedCard = (props) => {
  return (
    <View style={styles.containerStyle}>
      <View style={styles.headerContainerStyle}>
        <View style={{alignSelf: 'flex-start', justifyContent: 'flex-start', flex: 2}}>
          <Text style={styles.titleTextStyle}>{props.title}</Text>
        </View>
        <View style={{alignSelf: 'flex-end', justifyContent: 'flex-end', flex: 1}}>
          <Text style={styles.timeStyle}>{props.time}</Text>
        </View>
      </View>

      <View style={styles.bodyStyle}>
        <Text style={{fontFamily: 'raleway-regular'}}>
          {/* Looking for a tutor beast at math and physics (like Shehryar) for my son's upcoming SAT test. */}
          {props.description}
        </Text>
      </View>
      <View style={styles.postedByStyle}>
        <Text>
          Posted by: {props.poster}
        </Text>
      </View>
    </View>
  )
};

const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  headerContainerStyle: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  titleTextStyle: {
    fontSize: 25,
    fontFamily: 'raleway-bold',
  },
  timeStyle: {
    textAlign: 'right',
    marginRight: 5,
  },
  bodyStyle: {

  },
  postedByStyle: {
    marginTop: 10
  }
}

export default TutorWantedCard;