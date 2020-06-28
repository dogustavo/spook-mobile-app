import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentScreen } from './ducks/navigation';

import AuthLogin from './pages/auth/login';
import UserRegister from './pages/auth/register';
import Profile from './pages/profile';

import BookStack from './pages/book/navigation';

const Stack = createStackNavigator();

export default function Routes() {

    const { isAuth } = useSelector(state => state.auth)
    const routeNameRef = useRef();
    const navigationRef = useRef();
    
    const dispatch = useDispatch();

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => routeNameRef.current = navigationRef.current.getCurrentRoute().name }
            onStateChange={() => {
                const previousRouteName = routeNameRef.current;
                const currentRouteName = navigationRef.current.getCurrentRoute().name;

                
                if( previousRouteName !== currentRouteName ) {
                    dispatch(setCurrentScreen(currentRouteName))
                }

                routeNameRef.current = currentRouteName;
            }}
        >
            <Stack.Navigator screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'transparent' }
            }}>
                {isAuth ? (
                    <>
                        <Stack.Screen
                            name='Profile'
                            component={Profile}
                        />
                        <Stack.Screen
                            name='AppNavigator'
                            component={BookStack}
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