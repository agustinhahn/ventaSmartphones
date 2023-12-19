import { StyleSheet } from 'react-native-web';
import ShopStack from './ShopStack';
import { NavigationContainer } from '@react-navigation/native';
import CartStack from './CartStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import OrderStack from './OrderStack';


const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar
                }}
            >
                <Tab.Screen
                    name="ShopStack"
                    component={ShopStack}
                    options={{
                        tabBarIcon: () => <Entypo name="shop" size={40} color="black" />
                    }}
                />
                <Tab.Screen
                    name="cart"
                    component={CartStack}
                    options={{
                        tabBarIcon: () => <AntDesign name="shoppingcart" size={40} color="black" />
                    }}
                />
                <Tab.Screen
                    name="ordersStack"
                    component={OrderStack}
                    options={{
                        tabBarIcon: () => <Entypo name="add-to-list" size={40} color="black" />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "blue",
        elevation: 4,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        height: 90,
        borderRadius: 15
    }
})