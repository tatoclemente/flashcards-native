import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { ROUTES } from '../constants/navigation.constant'
import SingUp from '../screens/SingUp.screen'
import Cards from '../screens/Cards.screen'

const Stack = createStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={ROUTES.cards}>
                <Stack.Screen name={ROUTES.signUp} component={SingUp} />
                <Stack.Screen name={ROUTES.cards} component={Cards} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation