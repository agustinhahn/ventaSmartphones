import { View, StyleSheet, Text, FlatList} from 'react-native'
import categories from '../data/categories.json' //importo json
import CategoryItem from './CategoryItem'

const Categories = ({navigation, route}) => {
    return (
        <FlatList
            style = {styles.container}
            data = {categories} //data que quiero recorrer
            keyExtractor={item => item} //clave, en este caso un valor de la lista
            renderItem={({item})=> <CategoryItem category={item} navigation={navigation} route={route} />} //renderizar mediante la funcion
        />
    )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        width:"100%",
    }
})