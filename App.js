import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import Services from "./screens/Services";
import Activity from "./screens/Activity";
import More from "./screens/More";

import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import HomeIcon from "./icons/HomeIcon";
import ServiceIcon from "./icons/ServiceIcon";
import ActivityIcon from "./icons/ActivityIcon";
import MoreIcon from "./icons/MoreIcon";

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: "gray",
          tabBarActiveTintColor: "#d66029",
          tabBarLabelStyle: { fontSize: 14, paddingBottom: 10 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={({ route }) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
              paddingVertical: 10,
              height: 60,
            },
            tabBarIcon: ({ color, size }) => (
              <HomeIcon color={color} size={size} />
            ),
          })}
        />
        <Tab.Screen
          name="Services"
          component={Services}
          options={({ route }) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
              paddingVertical: 10,
              height: 60,
            },
            tabBarIcon: ({ color, size }) => (
              <ServiceIcon color={color} size={size} />
            ),
          })}
        />
        <Tab.Screen
          name="Activity"
          component={Activity}
          options={({ route }) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
              paddingVertical: 10,
              height: 60,
            },
            tabBarIcon: ({ color, size }) => (
              <ActivityIcon color={color} size={size} />
            ),
          })}
        />
        <Tab.Screen
          name="More"
          component={More}
          options={({ route }) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
              paddingVertical: 10,
              height: 60,
            },
            tabBarIcon: ({ color, size }) => (
              <MoreIcon color={color} size={size} />
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const getTabBarVisibility = (route) => {
  //console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
  //console.log(routeName);

  if (
    routeName === "PodcastDetails" ||
    routeName === "VideoStreaming" ||
    routeName === "ProfileImageUpdate" ||
    routeName === "CoverImageUpdate" ||
    routeName === "Login" ||
    routeName === "OtpCheck" ||
    routeName === "UserDetails"
  ) {
    return "none";
  }

  return "flex";
};
