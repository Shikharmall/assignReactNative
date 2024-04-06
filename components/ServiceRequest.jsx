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

const ServiceRequest = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: 500, marginVertical: 16 }}>
          Service Request
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 500,
            marginVertical: 16,
            color: "#437ef0",
          }}
        >
          View All
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
        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              borderLeftColor: "red",
              borderLeftWidth: 2,
            }}
          >
            <View
              style={{
                width: 150,
              }}
            >
              <Text style={{ fontSize: 10, color: "#bfbdbd" }}>
                September 10,2023
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
                Service: AC Repair
              </Text>
            </View>
            <View
              style={{
                width: 70,
              }}
            >
              <Text style={{ fontSize: 10, color: "#bfbdbd" }}>Priority</Text>
              <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
                High
              </Text>
            </View>
            <View
              style={{
                width: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
                In progress
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 10,
              borderLeftColor: "orange",
              borderLeftWidth: 2,
            }}
          >
            <View
              style={{
                width: 150,
              }}
            >
              <Text style={{ fontSize: 10, color: "#bfbdbd" }}>
                September 8,2023
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
                Service: Plumbimg
              </Text>
            </View>
            <View
              style={{
                width: 70,
              }}
            >
              <Text style={{ fontSize: 10, color: "#bfbdbd" }}>Priority</Text>
              <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
                Medium
              </Text>
            </View>
            <View
              style={{
                width: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
                In progress
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              padding: 10,
              borderLeftColor: "green",
              borderLeftWidth: 2,
            }}
          >
            <View
              style={{
                width: 150,
              }}
            >
              <Text style={{ fontSize: 10, color: "#bfbdbd" }}>
                September 6,2023
              </Text>
              <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
                Service: Cleaning
              </Text>
            </View>
            <View
              style={{
                width: 70,
              }}
            >
              <Text style={{ fontSize: 10, color: "#bfbdbd" }}>Priority</Text>
              <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
                Medium
              </Text>
            </View>
            <View
              style={{
                width: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "500", color: "gray" }}>
                Completed
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ServiceRequest;
