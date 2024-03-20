import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import MenuScreen from '../screens/MenuScreen'
import CartScreen from '../screens/CartScreen'
import LoadingScreen from '../screens/LoadingScreen'
import OrderScreen from '../screens/OrderScreen'


const Stack = createStackNavigator()
const screenOptionStyle = {
    headerShown: false,
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Menu" component={MenuScreen} />
                <Stack.Screen name="Cart" component={CartScreen}  />
                <Stack.Screen name="Loading" component={LoadingScreen} />
                <Stack.Screen name="Order" component={OrderScreen}  />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation