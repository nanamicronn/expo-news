import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Text} from 'react-native'
import { WebView } from 'react-native-webview';
import { useDispatch } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default function ArticleScreen({route}) {
  const {article} = route.params;
  const dispatch = useDispatch();
  console.log(article);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => { dispatch(addClip({clip: article})) }}>
        <Text style={{ margin: 10, fontSize: 30 }}>Add Clip</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { dispatch(deleteClip({ clip: article })) }}>
        <Text style={{margin: 10, fontSize: 30}}>DELETE_CLIP</Text>
      </TouchableOpacity>
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  );
};
