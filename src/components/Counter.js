import { StyleSheet , View,Button, Text, TextInput} from 'react-native'
import { useState } from 'react'

const Counter = () => {

    
    const [count, setcount] = useState(0)
    const [amount, setAmount] = useState(0)

    const increment = () =>{
        setcount(count + 1)
    }
    const decrement = () =>{
        setcount(count -1)
    }
    const incrementarbycount = () =>{
        setcount(count + amount)
    }

    return (
        <View  style={styles.container}>
        <Button title='incrementar' onPress={increment}/>
        <Text>{count}</Text>
        <Button title='decrementar' onPress={decrement}/>
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} onChangeText={(t)=> setAmount(parseInt(t))}/>
            <Button title='agregar' onPress={incrementarbycount(amount)} />
        </View>
    </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        margin: 15,
    },
    inputContainer: {
        gap: 10
    },
    input: {
        borderWidth: 2
    }
})