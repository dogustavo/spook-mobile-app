import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthLogin from './pages/auth/login';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen 
                    name='AuthLogin'
                    component={AuthLogin}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}