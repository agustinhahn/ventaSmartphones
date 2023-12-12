import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Home from './src/data/Screen/Home'
import ItemListCategories from './src/data/Screen/ItemListCategories'
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import ItemDetail from './src/data/Screen/ItemDetail';
import { useEffect, useState } from 'react';

const App = () => {

  const [categorySelect, setCategorySelect] = useState("")
  const [productDetailId, setProductDetailId] = useState(0)


  useEffect(()=>{
    console.log(productDetailId)
  },[productDetailId])

  return (
    <SafeAreaView style={styles.container}>
      {categorySelect ?
          productDetailId != 0 ?
              <ItemDetail productDetailId={productDetailId} setProductDetailId={setProductDetailId}/>
              :
              <ItemListCategories 
                  category = {categorySelect} 
                  setCategorySelect={setCategorySelect} 
                  setProductDetailId={setProductDetailId} />
      :
      <Home setCategorySelect={setCategorySelect} />
    }
    </SafeAreaView>
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
