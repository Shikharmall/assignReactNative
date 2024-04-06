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

          <View style={{}}>
            <View style={{ flex: 1, margin: 2 }}>
              <Text style={{ fontSize: 15, fontWeight: 500 }}>
                Quick Notification
              </Text>
            </View>
            <View
              style={{
                margin: 2,
                marginLeft: 10,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
