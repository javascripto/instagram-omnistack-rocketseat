import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import api from '../services/api';

import camera from '../assets/camera.png';

export default class Feed extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')}>
        <Image source={camera} />
      </TouchableOpacity>
    ),
  });

  state = {
    feed: [],
  }

  async componentDidMount() {
    const response = await api.get('posts');

    this.setState({ feed: response.data });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.feed}
          keyExtractor={post => post._id}
          renderItem={({ item }) => (
            <Text>{item.author}</Text>
          )}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  
});
