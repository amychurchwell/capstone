import React, { Component } from 'react';
import { Platform, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

class SizeSurvey extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Size Survey</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
})

export default SizeSurvey;