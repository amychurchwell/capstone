import React, { Component } from 'react';
import { Platform, View, Text, TextInput, StyleSheet } from 'react-native';
import {RkButton, RkTextInput} from 'react-native-ui-kitten';


class SizeSurvey extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.screenProps.value.toString()}</Text>
        <Text>{this.props.screenProps.bandSize.toString()}</Text>
        <RkTextInput
          placeholder='Loose Underbust'
          onChangeText={(text) => this.props.screenProps.updateState(text)}/>
        <RkTextInput placeholder='Snug Underbust'/>
        <RkTextInput placeholder='Tight Underbust'/>
        <RkButton
          onPress={() => {this.props.navigation.navigate('Form2')}}>
          Next!
        </RkButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  button: {
    padding: 20,
    margin: 10,
  }
})

export default SizeSurvey;
