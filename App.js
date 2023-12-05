import { StyleSheet, Text, View } from 'react-native';
import Home from './src/data/Screen/Home'
import ItemListCategories from './src/data/Screen/ItemListCategories'
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import ItemDetail from './src/data/Screen/ItemDetail';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start'
  },
});
