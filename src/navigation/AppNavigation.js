import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {MainScreen} from '../screens/MainScreen'
import {TypeCollect} from '../screens/TypeCollectScreen'

// const ScreenNavigation = createStackNavigator({
//     Main: MainScreen,
//     TypeCollect: TypeCollectScreen,
// })
const Stack = createStackNavigator()

const ScreenNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={{
                        headerTitle: 'Пожертвования'
                    }}
                />
                <Stack.Screen
                    name="TypeCollect"
                    component={TypeCollect}
                    options={{
                        headerTitle: 'Тип сбора'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

export const AppNavigation = ScreenNavigation