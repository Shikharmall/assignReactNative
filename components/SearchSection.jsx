import {
  View,
  TextInput
} from "react-native";
import Svg, { Path } from "react-native-svg";
import React from "react";

const SearchSection = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1, margin: 2 }}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="black"
          style={{
            padding: 10,
            marginVertical: 10,
            color: "black",
            borderRadius: 4,
            fontSize: 15,
            borderWidth: 0.75,
            backgroundColor: "white",
            borderColor: "gray",
          }}
        />
        <Svg
          width="25px"
          height="25px"
          style={{ position: "absolute", top: 21, right: 14 }}
          viewBox="0 0 24 24"
        >
          <Path
            d="M21.71 20.29L18 16.61A9 9 0 1016.61 18l3.68 3.68a1 1 0 001.42 0 1 1 0 000-1.39zM11 18a7 7 0 117-7 7 7 0 01-7 7z"
            fill={"gray"}
          />
        </Svg>
      </View>
      <View
        style={{
          margin: 2,
          marginLeft: 10,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/*<Svg
                width="40px"
                height="40px"
                fill="#d66029"
                viewBox="0 0 36 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  className="clr-i-outline clr-i-outline-path-1"
                  d="M32.51 27.83A14.4 14.4 0 0130 24.9a12.63 12.63 0 01-1.35-4.81v-4.94A10.81 10.81 0 0019.21 4.4V3.11a1.33 1.33 0 10-2.67 0v1.31a10.81 10.81 0 00-9.33 10.73v4.94a12.63 12.63 0 01-1.35 4.81 14.4 14.4 0 01-2.47 2.93 1 1 0 00-.34.75v1.36a1 1 0 001 1h27.8a1 1 0 001-1v-1.36a1 1 0 00-.34-.75zM5.13 28.94a16.17 16.17 0 002.44-3 14.24 14.24 0 001.65-5.85v-4.94a8.74 8.74 0 1117.47 0v4.94a14.24 14.24 0 001.65 5.85 16.17 16.17 0 002.44 3z"
                />
                <Path
                  className="clr-i-outline clr-i-outline-path-2"
                  d="M18 34.28A2.67 2.67 0 0020.58 32h-5.26A2.67 2.67 0 0018 34.28z"
                />
                <Path fill="none" d="M0 0H36V36H0z" />
              </Svg>*/}
        <Svg
          width="30px"
          height="30px"
          fill="#d66029"
          viewBox="-1.5 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path d="M19.945 15.512c-.8-.786-1.619-1.6-1.619-5.44a7.835 7.835 0 00-6.539-7.717l-.046-.006a1.5 1.5 0 10-2.471.005l-.003-.005c-3.753.623-6.579 3.843-6.584 7.723v.001c0 3.84-.822 4.655-1.619 5.44A3.135 3.135 0 003.137 21h4.367a3 3 0 106 0h4.37a3.135 3.135 0 002.076-5.484l-.003-.003zm-9.441 6.613A1.127 1.127 0 019.379 21h2.251a1.127 1.127 0 01-1.126 1.125zm7.36-3.376H3.138a.886.886 0 01-.625-1.509c1.34-1.34 2.418-2.612 2.418-7.17a5.572 5.572 0 0111.144 0c0 4.578 1.089 5.84 2.418 7.17a.886.886 0 01-.625 1.509z" />
        </Svg>
      </View>
    </View>
  );
};

export default SearchSection;
