import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import React, { useState } from "react";
//import { Calendar } from "react-native-calendars";

import Calendar from "react-native-calendars/src/calendar";

const Services = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setShowCalendar(false);
  };

  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <View
      style={{
        /*backgroundColor: "red",*/ height: "100%",
        position: "relative",
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
        <SafeAreaView style={{ marginHorizontal: 25 }}>
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              marginVertical: 20,
              marginBottom: 10,
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
                borderWidth: 0.5,
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
                borderWidth: 0.5,
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
                borderWidth: 0.5,
                borderColor: "gray",
              }}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontWeight: "semibold",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Attach Photo/Video
            </Text>
            <Text style={{ fontWeight: "semibold", fontSize: 15 }}>
              Need atleast one Photo/video for quick response
            </Text>
            <Text style={{ fontWeight: "semibold", fontSize: 15 }}>
              (File size should not exceed 10Mb)
            </Text>
            <View
              style={{
                padding: 10,
                marginVertical: 10,
                color: "black",
                borderRadius: 10,
                fontSize: 15,
                height: 150,
                backgroundColor: "#d6d6d6",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 16 }}>Front</Text>
            </View>
          </View>
          <View style={{ marginVertical: 10 }}>
            <Text
              style={{
                fontWeight: "semibold",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              When you prefer us to visit
            </Text>
          </View>

          <View style={{ marginVertical: 10, position: "relative" }}>
            <Text style={{ fontWeight: "semibold", fontSize: 15 }}>
              Pick a date
            </Text>
            <TextInput
              placeholder="Select Date"
              placeholderTextColor="gray"
              value={selectedDate}
              style={{
                padding: 10,
                marginVertical: 10,
                color: "black",
                borderRadius: 10,
                fontSize: 15,
                borderWidth: 0.5,
                borderColor: "gray",
              }}
            />
            <TouchableWithoutFeedback
              onPress={() => {
                setShowCalendar(true);
              }}
            >
              <Svg
                width="30px"
                height="30px"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", right: 10, bottom: 21 }}
              >
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.5 1a.5.5 0 01.5.5V2h5v-.5a.5.5 0 011 0V2h1.5A1.5 1.5 0 0114 3.5v9a1.5 1.5 0 01-1.5 1.5h-10A1.5 1.5 0 011 12.5v-9A1.5 1.5 0 012.5 2H4v-.5a.5.5 0 01.5-.5zM10 3v.5a.5.5 0 001 0V3h1.5a.5.5 0 01.5.5V5H2V3.5a.5.5 0 01.5-.5H4v.5a.5.5 0 001 0V3h5zM2 6v6.5a.5.5 0 00.5.5h10a.5.5 0 00.5-.5V6H2zm5 1.5a.5.5 0 111 0 .5.5 0 01-1 0zM9.5 7a.5.5 0 100 1 .5.5 0 000-1zm1.5.5a.5.5 0 111 0 .5.5 0 01-1 0zm.5 1.5a.5.5 0 100 1 .5.5 0 000-1zM9 9.5a.5.5 0 111 0 .5.5 0 01-1 0zM7.5 9a.5.5 0 100 1 .5.5 0 000-1zM5 9.5a.5.5 0 111 0 .5.5 0 01-1 0zM3.5 9a.5.5 0 100 1 .5.5 0 000-1zM3 11.5a.5.5 0 111 0 .5.5 0 01-1 0zm2.5-.5a.5.5 0 100 1 .5.5 0 000-1zm1.5.5a.5.5 0 111 0 .5.5 0 01-1 0zm2.5-.5a.5.5 0 100 1 .5.5 0 000-1z"
                  fill="gray"
                />
              </Svg>
            </TouchableWithoutFeedback>
          </View>

          <View style={{ marginVertical: 10 }}>
            <Text style={{ fontWeight: "semibold", fontSize: 15 }}>
              Alternate Contact Number
            </Text>
            <TextInput
              placeholder="Enter phone number"
              placeholderTextColor="gray"
              value="+1 565 756 545"
              style={{
                padding: 10,
                marginVertical: 10,
                color: "black",
                borderRadius: 10,
                fontSize: 15,
                borderWidth: 0.5,
                borderColor: "gray",
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
              marginBottom: 8,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 18 }}>submit</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
      {showCalendar ? (
        <TouchableOpacity
          activeOpacity={1}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            width: "100%",
            height: "100%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderColor: "gray",
          }}
          onPress={() => {
            setShowCalendar(false);
          }}
        >
          <View
            style={{
              width: "75%",
              marginVertical: 25,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <Calendar
              onDayPress={onDayPress}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  marked: true,
                  selectedColor: "blue",
                },
              }}
            />
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Services;
