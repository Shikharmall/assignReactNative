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
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from "accordion-collapse-react-native";
import Svg, { Path } from "react-native-svg";
import React, { useState } from "react";

const UserDetails = () => {
  const item = [
    {
      id: 1,
      title: "Recent Podcasts",
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
        //onPress={() => {
        //  openPodcast(item.id);
        //}}
        style={{
          margin: 5,
          //marginRight: 0,
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

  return (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <Collapse>
        <CollapseHeader>
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
        </CollapseHeader>

        <CollapseBody>
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
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default UserDetails;
