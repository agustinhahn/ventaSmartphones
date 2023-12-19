import { View, Text, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'; 


const CartItem = ({item}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>{item.title}</Text>
                <Text style={styles.text2}>{item.brand}</Text>
                <Text style={styles.text2}>${item.price}</Text>
            </View>
            <Entypo name="trash" size={24} color="black" />
        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    container : {
        backgroundColor:"green",
        margin: 10,
        padding: 10,
        height: 100,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius: 10,
        borderWidth: 2
    },
    textContainer: {
        width: "70%",
        gap: 5
    },
    text1:{
        fontSize: 19,
        color: "white"
    },
    text2:{
        fontSize: 17,
        color:"white"
    }
})