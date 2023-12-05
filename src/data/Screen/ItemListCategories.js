import React from 'react'
import { View, StyleSheet, Text} from 'react-native'

const ItemListCategories = () => {
    return (
        <View styles = {styles.container}>
            <Text>
                item list categories
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "center"
    }
})

export default ItemListCategories