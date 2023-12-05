import { View, StyleSheet, Text} from 'react-native'
import Header from "../../components/Header"
import Categories from '../../components/Categories'

const Home = () => {
    return (
        <>
            <Header title='categories' />
            <Categories />
        </>
    )
}

const styles = StyleSheet.create({
})

export default Home