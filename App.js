import { StyleSheet, Text, View } from 'react-native';
import Home from './src/data/Screen/Home'
import ItemListCategories from './src/data/Screen/ItemListCategories'
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import ItemDetail from './src/data/Screen/ItemDetail';
import { useState } from 'react';

const App = () => {

  const [categorySelect, setCategorySelect] = useState("")

  return (
    <View style={styles.container}>
      {categorySelect ?
      <ItemListCategories category = {categorySelect}  />
      :
      <Home setCategorySelect={setCategorySelect} />
    }
    </View>
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
