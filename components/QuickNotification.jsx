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

const QuickNotification = () => {
  return (
    <View>
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 15, fontWeight: 500, marginVertical: 16 }}>
          Quick Notification
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          padding: 20,
          borderRadius: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../images/house.jpg")}
            style={{
              width: 100,
              height: 120,
              padding: 2,
              borderRadius: 10,
              flex: 1,
            }}
          />
          <View style={{ marginHorizontal: 10, flex: 2 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: "#d66029",
                marginVertical: 3,
                margin: 3
              }}
            >
              Upcoming rent
            </Text>

            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1 , margin: 3}}>
                <Text style={{ fontWeight: "500" }}>$ 600</Text>
                <Text style={{ color: "gray", fontSize: 10 }}>
                  for month of Sept
                </Text>
              </View>
              <View style={{ flex: 1 , margin: 3}}>
                <Text style={{ fontWeight: "500" }}>$ 0</Text>
                <Text style={{ color: "gray", fontSize: 10 }}>
                  Old Balance
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" , marginVertical: 10 }}>
              <View style={{ flex: 1, margin: 3 }}>
                <Text style={{ fontWeight: "500" }}>5 July 2023</Text>
                <Text style={{ color: "gray", fontSize: 10 }}>
                  Last Payment
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderColor: "gray",
            borderWidth: 0.75,
            opacity: 0.2,
            marginVertical: 20,
            backgroundColor: 'gray'
          }}
        ></View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "500" }}>December 2023</Text>
            <Text style={{ color: "gray", fontSize: 11 }}>Renewal Date</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: "500" }}>November 5 2023</Text>
            <Text style={{ color: "gray", fontSize: 11 }}>
              Renewal Due Date
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default QuickNotification;
