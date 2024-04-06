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
import Collapsible from "react-native-collapsible";
import Svg, { Path } from "react-native-svg";
import React, { useState } from "react";

const UserDetails = () => {
  const item = [
    {
      data: [
        { id: 1, name: "1400 sq.ft." },
        { id: 2, name: "2 BHK" },
        { id: 3, name: "2 Bathroom" },
        { id: 4, name: "1 Garage" },
      ],
    },
  ];
  const renderItemFunc = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{
          margin: 5,
          borderRadius: 5,
          borderColor: "gray",
          borderWidth: 1,
          padding: 10,
          paddingVertical: 5,
        }}
      >
        <Text style={{ fontSize: 12 }}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        position: "relative",
        borderRadius: 5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../images/user.png")}
          style={{ width: 60, height: 60, padding: 2 }}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{ fontSize: 19, fontWeight: 700 }}>Hi Ethan!</Text>
          <Text>
            A3, Rich Avenue, Symphony block {"\n"}
            California 11203
          </Text>
        </View>
      </View>

      <Collapsible collapsed={isCollapsed}>
        <View>
          <FlatList
            data={item[0].data}
            horizontal={true}
            renderItem={renderItemFunc}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Collapsible>
      <View
        style={{
          backgroundColor: "#d66029",
          borderRadius: 50,
          position: "absolute",
          bottom: -18,
          left: "48%",
        }}
      >
        {isCollapsed ? (
          <TouchableOpacity>
            <Svg
              width="30px"
              height="30px"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onPress={() => {
                toggleCollapse();
              }}
            >
              <Path fill="#fff" fillOpacity={0.01} d="M0 0H48V48H0z" />
              <Path
                d="M37 18L25 30 13 18"
                stroke="#fff"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity>
            <Svg
              width="30px"
              height="30px"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onPress={() => {
                toggleCollapse();
              }}
            >
              <Path fill="#fff" fillOpacity={0.01} d="M0 0H48V48H0z" />
              <Path
                d="M37 18L25 30 13 18"
                stroke="#fff"
                strokeWidth={4}
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="rotate(180, 24, 24)"
              />
            </Svg>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default UserDetails;
