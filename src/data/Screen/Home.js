import { View, StyleSheet, Text} from 'react-native'
import Header from "../../components/Header"
import Categories from '../../components/Categories'

const Home = ({setCategorySelect}) => {
    return (
        <>
            <Header title='categories' />
            <Categories setCategorySelect={setCategorySelect}  />
        </>
    )
}

const styles = StyleSheet.create({
})

export default Home