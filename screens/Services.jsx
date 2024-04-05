import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";

const Services = () => {
  return (
    <View
      style={{
        marginHorizontal: 25,
        /*backgroundColor: "red",*/ height: "100%",
      }}
    >
      <StatusBar
        backgroundColor="#d66029" // Set your desired color here
        //barStyle="light-content" // Set the text color of the status bar
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <SafeAreaView>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              marginVertical: 25,
              fontSize: 18,
            }}
          >
            New Request
          </Text>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: "semibold", fontSize: 15 }}>
              Service Type
            </Text>
            <TextInput
              placeholder="AC"
              placeholderTextColor="black"
              style={{
                padding: 10,
                marginVertical: 10,
                color: "black",
                borderRadius: 10,
                fontSize: 15,
                borderWidth: 1.5,
                borderColor: "gray",
              }}
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: "semibold", fontSize: 15 }}>
              Sub Category
            </Text>
            <TextInput
              placeholder="Warmer not working"
              placeholderTextColor="black"
              style={{
                padding: 10,
                marginVertical: 10,
                color: "black",
                borderRadius: 10,
                fontSize: 15,
                borderWidth: 1.5,
                borderColor: "gray",
              }}
            />
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: "semibold", fontSize: 15 }}>
              Description
            </Text>
            <TextInput
              placeholder="Short note"
              placeholderTextColor="gray"
              style={{
                padding: 10,
                marginVertical: 10,
                color: "black",
                borderRadius: 10,
                fontSize: 15,
                borderWidth: 1.5,
                borderColor: "gray",
                height: 150,
              }}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: "semibold", fontSize: 15 }}>
              Description
            </Text>
            <TextInput
              placeholder="Short note"
              placeholderTextColor="gray"
              style={{
                padding: 10,
                marginVertical: 10,
                color: "black",
                borderRadius: 10,
                fontSize: 15,
                borderWidth: 1.5,
                borderColor: "gray",
                height: 150,
              }}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: "semibold", fontSize: 15 }}>
              Description
            </Text>
            <TextInput
              placeholder="Short note"
              placeholderTextColor="gray"
              style={{
                padding: 10,
                marginVertical: 10,
                color: "black",
                borderRadius: 10,
                fontSize: 15,
                borderWidth: 1.5,
                borderColor: "gray",
                height: 150,
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#d66029",
              padding: 5,
              paddingVertical: 15,
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>submit</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};

export default Services;
