import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Services from "./screens/Services";
import Home from "./screens/Home";
//import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import * as React from 'react';
//import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <>
      <Home />
      <Services />
    </>
  );
}
