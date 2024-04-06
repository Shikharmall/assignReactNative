import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import React, { useState } from "react";
import UserDetails from "../components/UserDetails";
import SearchSection from "../components/SearchSection";
import QuickNotification from "../components/QuickNotification";
import ServiceRequest from "../components/ServiceRequest";
import PopularService from "../components/PopularService";

export default function Home() {
  return (
    <View style={{ height: "100%", backgroundColor: "#f6f3f0" }}>
      <StatusBar backgroundColor="#d66029" />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <SafeAreaView style={{ marginHorizontal: 25 }}>
          <SearchSection />
          <UserDetails />
          <QuickNotification />
          <ServiceRequest />
          <PopularService />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
