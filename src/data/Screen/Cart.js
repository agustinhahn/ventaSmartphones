import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native'
import allCart from '../Cart.json'
import { useEffect, useState } from 'react'
import CartItem from '../../components/CartItem'

const Cart = () => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(()=>{
        setCart(allCart)
    },[])

    useEffect(() => {
        const totalVar = cart.reduce((acc, product)=>acc + (product.price * product.quantity), 0)
        setTotal(totalVar)
    }, [cart])


    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <CartItem item={item} />}
            />
            <View style={styles.confirmContainer}>
                <Pressable>
                    <Text style={styles.text}>
                        confirmar
                    </Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.text}>
                        Total: $ {total}
                    </Text>
                </Pressable>
            </View>
        </View>

    )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom:130,
    },
    confirmContainer:{
        backgroundColor: "grey",
        padding:25,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    text:{
        color:"white"
    }
})