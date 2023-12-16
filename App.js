import { StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import { useEffect, useState } from 'react';
import Navigator from './src/Navigation/Navigator';
import { useFonts } from 'expo-font';
import {fonts} from './src/data/Global/fonts'



const App = () => {

  const [fontLoaded] = useFonts(fonts)
  const [categorySelect, setCategorySelect] = useState("")
  const [productDetailId, setProductDetailId] = useState(0)


  useEffect(()=>{
    console.log(productDetailId)
  },[productDetailId])

  return (
<>
    <StatusBar />
    <Navigator />
</>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
