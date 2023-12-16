import { FlatList, View, Text, StyleSheet, Image, Pressable} from 'react-native'

const ProductItem = ({item, route, navigation}) => {
    return (
        <Pressable style={styles.container} onPress={()=>navigation.navigate("Product",{id:item.id})}>
            <Text style={styles.textInput }>{item.title}</Text>
            <Image 
                style={styles.image}
                resizeMode='cover'
                source={{uri:item.thumbnail}}
            />
        </Pressable>
    )
}

export default ProductItem

const styles = StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: "yellow",
        marginHorizontal: "10%",
        marginVertical: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between",
        gap: 30
    },
    image:{
        width: 90,
        height:90,
    },
    textInput:{
        width:"60%",
        textAlign:"center",
        fontSize: 20
    },
    textMind: {
        width:"60%",
        textAlign:"center",
        fontSize: 10
    }
})