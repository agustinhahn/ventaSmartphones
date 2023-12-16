import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../data/Screen/Home'
import ItemListCategories from '../data/Screen/ItemListCategories'
import ItemDetail from '../data/Screen/ItemDetail'
import Header from '../components/Header';


const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={
                    ({route})=>{
                        return {
                            header: () => <Header title={
                                route.name === "Home" ? "Categorias":
                                route.name === "Category" ? route.params.category:
                                "Detalle"    
                            } />
                        }
                    }
                }
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Category" component={ItemListCategories} />
                <Stack.Screen name="Product" component={ItemDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator