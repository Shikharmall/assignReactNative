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
    <View style={{}}>
      <View style={{ flex: 1, margin: 2 }}>
        <Text style={{ fontSize: 15, fontWeight: 500 }}>
          Quick Notification
        </Text>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <Image
            source={require("../images/house.jpg")}
            style={{
              width: 100,
              height: 100,
              padding: 2,
              borderRadius: 10,
            }}
          />
          <View style={{ paddingHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: 400,
                color: "#d66029",
                marginVertical: 3,
              }}
            >
              Upcoming rent
            </Text>
            <Text>
              A3, Rich Avenue, Symphony block {"\n"}
              California 11203
            </Text>
          </View>
        </View>
        <View>
            
        </View>
      </View>
    </View>
  );
};

export default QuickNotification;
