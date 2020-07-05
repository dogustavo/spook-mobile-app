import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import BookPhoto from './bookPhoto';
import BookNameDescription from './bookNamDescription';
import BookDetails from './bookDetails';
import BookList from './bookList';
import BookModalDetails from './bookList/bookDetails'

const bookStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
            headerMode="none"
        >

            <Stack.Screen 
				name="BookList" 
				component={BookList}
			/>
            <Stack.Screen 
				name="BookModalDetails" 
                component={BookModalDetails}
                initialParams={{ book: null }}
			/>

            <Stack.Screen 
				name="BookPhoto" 
				component={BookPhoto}
			/>
            <Stack.Screen 
				name="BookNameDescription" 
				component={BookNameDescription}
			/>
            <Stack.Screen 
				name="BookDetails" 
				component={BookDetails}
			/>

        </Stack.Navigator>
    );
};

export default bookStack;
