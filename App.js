import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import PostContainer from './PostContainer';
import PhotoViewer from './PhotoViewer';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const wall = require('./SevenWondersImages/wall.png');
const petra = require('./SevenWondersImages/petra.png');
const redeemer = require('./SevenWondersImages/redeemer.png');
const machu = require('./SevenWondersImages/machu.png');
const chichen = require('./SevenWondersImages/chichen.png');
const colosseum = require('./SevenWondersImages/colosseum.png');
const taj = require('./SevenWondersImages/taj.png');

const sevenWonders = [
  { title: 'Great Wall of China', image: wall },
  { title: 'Petra', image: petra },
  { title: 'The Redeemer', image: redeemer },
  { title: 'Machu Picchu', image: machu },
  { title: 'Chichen Itza', image: chichen },
  { title: 'Colosseum', image: colosseum },
  { title: 'Taj Mahal', image: taj },
];

export default class App extends Component {
  state = {
    selected: null,
    position: null,
  };

  showImage = (selected, position) => {
    this.setState({
      selected,
      position,
    });
  }

  closeViewer = () => {
    this.setState({
      selected: null,
      position: null,
    });
  }

  renderViewer() {
    const { selected, position } = this.state;

    if (selected) {
      return (
        <PhotoViewer
          post={selected}
          position={position}
          onClose={this.closeViewer}
        />
      );
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <Text style={styles.toolbar}>Seven Wonders of the World</Text>
        <ScrollView style={styles.content}>
        {
          sevenWonders.map((post, index) =>
            <PostContainer key={index} post={post}
            onPress={this.showImage} />
          )
        }
        </ScrollView>
        {this.renderViewer()}
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1,
  },
});