import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import AuthLogin from './pages/auth/login';
import UserRegister from './pages/auth/register';
import Home from './pages/book/home';

const Stack = createStackNavigator();

export default function Routes() {
    const { isAuth } = useSelector(state => state.auth)

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'transparent' }
            }}>
                {isAuth ? (
                    <>
                        <Stack.Screen
                            name='Home'
                            component={Home}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen 
                            name='AuthLogin'
                            component={AuthLogin}
                        />
                        <Stack.Screen 
                            name='UserRegister'
                            component={UserRegister}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}