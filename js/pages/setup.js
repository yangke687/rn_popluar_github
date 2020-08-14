import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomePage from './WelcomePage';
import HomePage from './HomePage';

const Stack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomePage,
    },
    Home: {
      screen: HomePage,
    },
  },
  {
    initialRouteName: 'Welcome',
  }
);

function setup() {
  // init
  return createAppContainer(Stack);
}

export default setup;
