import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../data/Global/colors'
import CardShadow from '../wrapper/CardShadow'

export default function CategoryItem({category}) {
    return (
        <Pressable onPress={()=>console.log(category)}>
            <CardShadow style={styles.container}>
                <Text>{category}</Text>
            </CardShadow>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        width:"80%",
        marginHorizontal:"10%",
        backgroundColor: colors.green1,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center",
    }
})