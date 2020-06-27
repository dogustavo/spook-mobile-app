import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthLogin from './pages/auth/login';
import UserRegister from './pages/auth/register';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'transparent' }
            }}>
                <Stack.Screen 
                    name='AuthLogin'
                    component={AuthLogin}
                />
                <Stack.Screen 
                    name='UserRegister'
                    component={UserRegister}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}