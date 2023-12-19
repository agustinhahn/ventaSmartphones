
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Cart from '../data/Screen/Cart'

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <>
        <Stack.Navigator
                        initialRouteName='Home'
                        screenOptions={
                            ({route})=>{
                                return {
                                    header: () => <Header title="carrito"  />
                                }
                            }
                        }
                    >
                        <Stack.Screen name="Cart" component={Cart} />
                    </Stack.Navigator>
        </>
    )
}

export default CartStack