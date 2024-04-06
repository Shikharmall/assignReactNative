import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Services from "./screens/Services";
import Activity from "./screens/Activity";
import More from "./screens/More";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          //tabBarInactiveTintColor: "#868c99",
          //tabBarActiveTintColor: "#e2e6f1",
          //tabBarLabelStyle: { fontSize: 14, paddingBottom: 10 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}

          //options={({route}) => ({
          //  tabBarStyle: {
          //    display: getTabBarVisibility(route),
          //    backgroundColor: '#0f1014',
          //    paddingVertical: 10,
          //    height: 60,
          //  },
          //  tabBarIcon: ({color, size}) => <HomeIcon color={color} size={size} />,
          //})}
        />
        <Tab.Screen name="Services" component={Services} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
