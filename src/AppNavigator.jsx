import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SongScreen from './SongScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="SongScreen" component={SongScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigator;