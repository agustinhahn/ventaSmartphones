import { View, StyleSheet, Text} from 'react-native'
import Header from "../../components/Header"
import Categories from '../../components/Categories'

const Home = ({navigation, route}) => {
    return (
        <>
            <Categories navigation={navigation} route={route}/>
        </>
    )
}

const styles = StyleSheet.create({
})

export default Home