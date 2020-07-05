import React from 'react';
import { 
    createStackNavigator, 
    TransitionSpecs, 
    HeaderStyleInterpolators 
} from '@react-navigation/stack';

const Stack = createStackNavigator();

import BookPhoto from './bookPhoto';
import BookNameDescription from './bookNamDescription';
import BookDetails from './bookDetails';
import BookList from './bookList';
import BookModalDetails from './bookList/bookDetails';
import MatchScreen from './bookList/matchScreen';

const fadeTransition = {
	gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({ current }) => {
    return {
      cardStyle: {
            opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        }),
      }
    };
  },
};

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
				name="MatchScreen" 
                component={MatchScreen}
                initialParams={{ book: null }}
                options={{
                    ...fadeTransition
                }}
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
