import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ManageTime from './screens/ManageTime';
import TodayTime from './screens/TodayTime';
import AllTime from './screens/AllTime';
import { GlobalStyles } from './constants/styles';
import IconButton from './components/UI/iconButton';
import TimeContextProvider from './store/expenses-context';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function TimeOverview() {
  return <BottomTabs.Navigator screenOptions={({ navigation }) => ({
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    headerRight: ({ tintColor }) => (
      <IconButton icon="add" size={24}
        color={tintColor}
        onPress={() => {
          navigation.navigate('ManageTime')
        }}
      />
    ),

  })}
  >
    <BottomTabs.Screen
      name='TodayTime'
      component={TodayTime}
      options={{
        title: 'Today Time',
        tabBarLabel: 'Today',
        tabBarIcon: ({ color, size }) => <Ionicons name="star"
          size={size} color={color}
        />

      }}
    />
    <BottomTabs.Screen name='AllTime' component={AllTime}
      options={{
        title: 'All Time',
        tabBarLabel: 'All',
        tabBarIcon: ({ color, size }) => <Ionicons name="calendar"
          size={size} color={color} />
      }}
    />
  </BottomTabs.Navigator >
}

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <TimeContextProvider>
        <NavigationContainer screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: 'white'
        }} >
          <Stack.Navigator>
            <Stack.Screen
              name='TimeOverview'
              component={TimeOverview}
              options={{ headerShown: false }}
            />
            <Stack.Screen name='ManageTime' component={ManageTime}
              options={{
                presentation: 'modal'

              }} />
          </Stack.Navigator>
        </NavigationContainer>
      </TimeContextProvider>
    </>
  );
}


