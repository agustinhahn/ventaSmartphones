import { StyleSheet , View} from 'react-native'
import Categories from '../Components/Categories'

const Home = ({ navigation, route }) => {

    return (
        <>
            <Categories navigation={navigation} route={route} />
        </>
    )
}

export default Home

