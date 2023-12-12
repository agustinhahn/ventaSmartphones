
import Header from '../../components/Header'
import Search from '../../components/Search';
import { FlatList, View, Text, StyleSheet, Pressable} from 'react-native'
import allProducts from "../products.json"
import {useEffect, useState} from "react"
import ProductItem from '../../components/ProductItem';
import { colors } from '../Global/colors';

const ItemListCategories = ({category, setCategorySelect,setProductDetailId}) => {

    const [keyword, setKeyword] = useState("")
    const [products, setProducts] = useState(allProducts)

    useEffect(()=>{
        if(category){
            const productsCategory = allProducts.filter(product => product.category === category)
            const productFiltered = productsCategory.filter(product => product.title.includes(keyword))
            setProducts(productFiltered)
        }
        else{
            const productFiltered = allProducts.filter(product => product.title.includes(keyword))
            setProducts(productFiltered)
        }
    },[keyword])


    return (
        <>
            <Header />
            <Pressable style={styles.goBack} title='Go back' onPress={()=>setCategorySelect("")}>
                <Text>volver</Text>
            </Pressable>
            <Search setKeyword={setKeyword}/>
            <FlatList 
            style={styles.container}
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item})=> <ProductItem item={item} setProductDetailId={setProductDetailId}/>}
            />
        </>

    )
}

export default ItemListCategories

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    goBack: {
            width: "100%",
            backgroundColor: colors.green1,
            padding: 10,
            paddingStart: 40
    },
})