
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Order from '../data/Screen/Order'

const Stack = createNativeStackNavigator();

const OrderStack = () => {
    return (
        <>
        <Stack.Navigator
                        initialRouteName='Home'
                        screenOptions={
                            ({route})=>{
                                return {
                                    header: () => <Header title="Ordenes"  />
                                }
                            }
                        }
                    >
                        <Stack.Screen name="Cart" component={Order} />
                    </Stack.Navigator>
        </>
    )
}

export default OrderStack