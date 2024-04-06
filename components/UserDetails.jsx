import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import Collapsible from "react-native-collapsible";
import Svg, { Path } from "react-native-svg";
import React, { useState } from "react";

const UserDetails = () => {
  const item = [
    {
      data: [
        { id: 1, name: "1400 sq.ft.", icon: "icon1" },
        { id: 2, name: "2 BHK", icon: "icon2" },
        { id: 3, name: "2 Bathroom", icon: "icon3" },
        { id: 4, name: "1 Garage", icon: "icon4" },
      ],
    },
  ];
  const getIcon = (iconName) => {
    switch (iconName) {
      case "icon1":
        return (
          <Svg
          fill="#000"
          width="18px"
          height="18px"
          style={{ marginRight: 5 }}
          viewBox="0 0 24 24"
          data-name="Line Color"
          xmlns="http://www.w3.org/2000/svg"
          className="icon line-color"
        >
          <Path
            d="M19 21L3 21 3 5 19 21z"
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </Svg>
        );
      case "icon2":
        return (
          <Svg
            width="18px"
            height="18px"
            style={{ marginRight: 5 }}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path d="M0 0h48v48H0z" fill="none" />
            <Path d="M40 12H8v16H4v16h4v-4h32v4h4V28h-4V12zM16 26c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2s-.897 2-2 2H18c-1.103 0-2-.897-2-2zm-4-10h24v10c0-3.309-2.691-6-6-6H18c-3.309 0-6 2.691-6 6V16zm28 20H8v-4h32v4z" />
          </Svg>
        );
      case "icon3":
        return (
          <Svg
            width="18px"
            height="18px"
            style={{ marginRight: 5 }}
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              fill="#000"
              d="M464 280H80V100a51.258 51.258 0 0115.113-36.485l.4-.4a51.691 51.691 0 0158.6-10.162 79.1 79.1 0 0011.778 96.627l10.951 10.951-20.157 20.158 22.626 22.626 20.157-20.157L311.157 71.471l20.157-20.157-22.627-22.627-20.158 20.157-10.951-10.951a79.086 79.086 0 00-100.929-8.976A83.61 83.61 0 0072.887 40.485l-.4.4A83.054 83.054 0 0048 100v180H16v32h32v30.7a23.95 23.95 0 001.232 7.589L79 439.589A23.969 23.969 0 00101.766 456h12.9L103 496h33.333L148 456h208.1l12 40h33.4l-12-40h20.73A23.969 23.969 0 00433 439.589l29.766-89.3A23.982 23.982 0 00464 342.7V312h32v-32zM188.52 60.52a47.025 47.025 0 0166.431 0L265.9 71.471 199.471 137.9l-10.951-10.949a47.027 47.027 0 010-66.431zM432 341.4L404.468 424H107.532L80 341.4V312h352z"
              className="ci-primary"
            />
          </Svg>
        );
      case "icon4":
        return (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="18px"
            height="18px"
            style={{ marginRight: 5 }}
            viewBox="0 0 316.324 316.323"
            xmlSpace="preserve"
            enableBackground="new 0 0 316.324 316.323"
          >
            <Path d="M259.337 155.958l-15.143-53.331a7.803 7.803 0 00-5.403-5.4c-26.44-7.427-53.907-11.192-81.631-11.192-47.314 0-78.777 10.885-80.098 11.347a7.806 7.806 0 00-4.92 5.251l-14.959 53.342c-11.987.322-21.632 10.176-21.632 22.236v61.428c0 12.264 9.986 22.252 22.251 22.252h2.234v9.664c0 12.268 9.986 22.251 22.252 22.251h4.819c12.268 0 22.251-9.983 22.251-22.251v-9.664h100.026v9.664c0 12.268 9.983 22.251 22.251 22.251h4.819c12.269 0 22.252-9.983 22.252-22.251v-9.664h.63c12.268 0 22.257-9.988 22.257-22.252V178.21c.001-12.269-9.982-22.252-22.256-22.252zm6.658 83.68c0 3.667-2.986 6.652-6.657 6.652h-8.43a7.802 7.802 0 00-7.8 7.8v17.464c0 3.666-2.986 6.651-6.652 6.651h-4.819a6.66 6.66 0 01-6.651-6.651V254.09c0-4.306-3.494-7.8-7.8-7.8H101.554a7.802 7.802 0 00-7.8 7.8v17.464c0 3.666-2.986 6.651-6.652 6.651h-4.819c-3.667 0-6.652-2.985-6.652-6.651V254.09c0-4.306-3.494-7.8-7.8-7.8H57.797a6.66 6.66 0 01-6.652-6.652V178.21c0-3.666 2.986-6.652 6.652-6.652h5.299a7.79 7.79 0 007.508-5.697l15.412-54.938c9.392-2.734 35.609-9.288 71.145-9.288 24.829 0 49.437 3.184 73.206 9.466l15.361 54.761a7.802 7.802 0 007.511 5.697h6.099c3.671 0 6.657 2.986 6.657 6.652v61.427z" />
            <Path d="M85.896 186.065c-13.269 0-24.059 10.791-24.059 24.064 0 13.269 10.791 24.06 24.059 24.06 13.271 0 24.06-10.791 24.06-24.06 0-13.273-10.789-24.064-24.06-24.064zm0 32.525c-4.664 0-8.459-3.788-8.459-8.46s3.791-8.465 8.459-8.465a8.462 8.462 0 010 16.925zM230.428 186.065c-13.269 0-24.06 10.791-24.06 24.064 0 13.269 10.791 24.06 24.06 24.06 13.273 0 24.06-10.791 24.06-24.06 0-13.273-10.786-24.064-24.06-24.064zm0 32.525c-4.661 0-8.46-3.788-8.46-8.46s3.793-8.465 8.46-8.465c4.672 0 8.46 3.793 8.46 8.465s-3.788 8.46-8.46 8.46zM89.408 172.146H226.92a7.798 7.798 0 006.108-2.945 7.788 7.788 0 001.488-6.621l-8.876-37.999a7.804 7.804 0 00-5.535-5.75C201.327 113.7 181 111.1 159.709 111.1c-36.165 0-62.481 7.446-63.589 7.762a7.82 7.82 0 00-5.441 5.725l-8.871 38.003a7.793 7.793 0 001.488 6.617 7.83 7.83 0 006.112 2.939zm15.386-39.394c8.604-2.009 29.196-6.058 54.916-6.058 18.218 0 35.625 2.021 51.813 6.02l5.57 23.836H99.239l5.555-23.798z" />
            <Path d="M312.127 102.805L158.164 22.519 4.197 102.805a7.8 7.8 0 007.208 13.832L158.164 40.11l146.754 76.533a7.796 7.796 0 0010.522-3.314c1.989-3.822.507-8.534-3.313-10.524z" />
          </Svg>
        );
      default:
        return null;
    }
  };

  const renderItemFunc = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{
          margin: 5,
          borderRadius: 5,
          borderColor: "gray",
          borderWidth: 0.5,
          padding: 10,
          paddingVertical: 5,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {getIcon(item.icon)}
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
        <View>
          <View>
            <Text
              style={{ fontSize: 15, fontWeight: "500", marginVertical: 10 }}
            >
              Other Amenities
            </Text>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <View
              style={{
                margin: 5,
                borderRadius: 5,
                borderColor: "gray",
                borderWidth: 0.5,
                padding: 10,
                paddingVertical: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                style={{ width: "30px", height: "30px" }}
                viewBox="0 0 291.04 291.04"
                xmlSpace="preserve"
                enableBackground="new 0 0 291.04 291.04"
              >
                <Path d="M47.287 18.958h-18.75v37.5h9.375v-9.375h9.375c7.753 0 14.063-6.309 14.063-14.063 0-7.755-6.309-14.062-14.063-14.062zm0 18.75h-9.375v-9.375h9.375c2.583 0 4.688 2.1 4.688 4.688a4.692 4.692 0 01-4.688 4.687z" />
                <Path d="M216.038 243.958c0-25.847-21.028-46.875-46.875-46.875s-46.875 21.028-46.875 46.875c0 15.342 7.444 28.945 18.872 37.5H70.725v-18.75H56.662V159.583h-9.375V75.208h21.839l16.073-37.5L69.126.208H16.073L0 37.708l16.073 37.5h21.839v84.375h-9.375v103.125H14.475v18.75H.412v9.375h290.626v-9.375h-93.872c11.428-8.555 18.872-22.159 18.872-37.5zM22.252 65.833L10.2 37.708 22.252 9.583h40.697L75 37.708 62.948 65.833H22.252zm15.66 103.125h9.375v93.75h-9.375v-93.75zm23.439 112.499H23.85v-9.375H61.351v9.375zm107.812 0c-20.677 0-37.5-16.823-37.5-37.5s16.823-37.5 37.5-37.5 37.5 16.823 37.5 37.5-16.823 37.5-37.5 37.5z" />
                <Path d="M259.008 37.708c-19.148 0-35.925 12.933-40.8 31.448l-15.159 57.614h-24.511c-31.584 0-60.816 16.861-76.795 44.095l-12.267 4.088v31.505h-18.75v37.5h42.188v-9.375H98.85V181.713l12.834-4.28a164.792 164.792 0 0152.223-8.475h3.366c20.625 0 39.839 9.239 52.72 25.341 9.145 11.428 14.297 25.673 14.714 40.284h-9.295v9.375h65.626v-9.375H244.14c-.417-16.734-6.352-33.056-16.823-46.144-14.672-18.337-36.553-28.856-60.042-28.856h-3.366a174.276 174.276 0 00-47.686 6.642c14.991-18.811 37.875-30.08 62.316-30.08h31.739l17.002-64.598c3.788-14.405 16.838-24.464 31.73-24.464h32.03v-9.375h-32.032zM89.475 234.583H80.1v-18.75h9.375v18.75z" />
                <Path d="M169.163 220.52c-12.923 0-23.438 10.514-23.438 23.438s10.514 23.437 23.438 23.437c12.923 0 23.438-10.514 23.438-23.437 0-12.922-10.515-23.438-23.438-23.438zm0 37.5c-7.753 0-14.063-6.309-14.063-14.062 0-7.753 6.309-14.063 14.063-14.063 7.753 0 14.063 6.309 14.063 14.063-.001 7.752-6.31 14.062-14.063 14.062zM237.778 71.585l-13.748 51.563a13.964 13.964 0 002.438 12.192 13.946 13.946 0 0011.147 5.494h53.423v-9.375h-53.423a4.66 4.66 0 01-3.717-1.833 4.66 4.66 0 01-.811-4.064l13.748-51.563a4.695 4.695 0 014.533-3.478h39.67v-9.375h-39.67c-6.362-.001-11.954 4.293-13.59 10.439z" />
              </Svg>
              <Text
                style={{
                  fontSize: 14,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                Under Cover Parking
              </Text>
            </View>

            <View
              style={{
                margin: 5,
                borderRadius: 5,
                borderColor: "gray",
                borderWidth: 0.5,
                padding: 10,
                paddingVertical: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Svg
                fill="#000"
                width="30px"
                height="30px"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path d="M269.506 329.877c0-49.125-39.966-89.091-89.091-89.091v10c43.611 0 79.091 35.479 79.091 79.091h10z" />
                <Path d="M26.241 326.526h81.591v-95.081h40.897v39.425c0 25.222 10.573 49.567 29.008 66.795 19.394 18.123 30.517 43.186 30.517 68.761v49.02h10v-49.02c0-28.334-12.279-56.061-33.688-76.067-16.419-15.344-25.836-37.026-25.836-59.488v-51.302c0-13.647 11.103-24.751 24.75-24.751h60.826a4.579 4.579 0 014.573 4.573c0 12.592-10.244 22.836-22.836 22.836h-45.215v10h45.215c8.919 0 17.014-3.579 22.938-9.37 4.767 4.283 11.001 6.755 17.69 6.755 8.859 0 16.713-4.366 21.536-11.054 4.82 6.688 12.67 11.054 21.524 11.054 10.951 0 20.372-6.665 24.421-16.148h9.35v97.123c0 9.082-2.871 17.719-8.301 24.971-9.832 13.121-15.029 28.297-15.029 43.889v76h10v-76c0-13.412 4.506-26.515 13.033-37.894 6.736-8.997 10.297-19.706 10.297-30.966v-97.123h50.666v7.982h-37.086v10h37.086v95.081h81.591v-60.294l19.404-23.864V140.713l-19.404-23.864V56.555h-81.591v113.063h-67.899v-26.332c0-7.083-2.762-13.745-7.771-18.755-5.002-5.019-11.666-7.782-18.766-7.782a26.386 26.386 0 00-16.658 5.907 26.257 26.257 0 00-7.642-16.073c-5.014-5.015-11.677-7.776-18.761-7.776-8.851 0-16.697 4.363-21.518 11.049a26.856 26.856 0 00-2.782-3.272c-5.015-5.015-11.673-7.776-18.748-7.776-13.718 0-25.039 10.463-26.399 23.829-4.698-3.813-10.515-5.887-16.661-5.887-14.633 0-26.537 11.904-26.537 26.537v31.332h10v-31.332c0-9.118 7.418-16.537 16.537-16.537 4.422 0 8.571 1.72 11.689 4.848a16.416 16.416 0 014.834 11.689h10v-17.943c0-9.118 7.418-16.536 16.537-16.536 4.404 0 8.55 1.722 11.676 4.848s4.848 7.277 4.848 11.688v12.978h10v-12.978c0-9.118 7.413-16.536 16.523-16.536 4.413 0 8.563 1.721 11.695 4.854 3.122 3.111 4.842 7.261 4.842 11.683v17.943h10c0-9.118 7.412-16.537 16.523-16.537 4.422 0 8.571 1.72 11.689 4.848a16.425 16.425 0 014.848 11.689v59.801c0 9.111-7.419 16.524-16.537 16.524-9.111 0-16.523-7.413-16.523-16.524v-39.61h-10v39.61c0 9.111-7.419 16.524-16.537 16.524-4.468 0-8.61-1.769-11.648-4.802a32.626 32.626 0 003.856-15.419c0-5.957-3.598-11.085-8.731-13.342v-33.68h-10v32.448h-33.061v-21.445h-10v21.445h-13.607c-13.352 0-24.961 7.573-30.778 18.646h-44.869v-23.845h33.013v-10h-33.013V56.555H26.241v60.294L6.837 140.713v101.655l19.404 23.864v60.294zm468.922-182.26v94.55l-9.404 11.566V132.699l9.404 11.567zm-80.995-77.711h25.796v216.674h10V66.555h25.795v249.971h-25.795v-18.979h-10v18.979h-25.796V66.555zm-10 113.063v23.845h-67.909c.002-.126.01-.25.01-.376v-23.469h67.899zm-254.891 33.845a34.699 34.699 0 00-.548 6.105v1.877h-40.897v-7.982h41.445zM36.241 66.555h25.795v18.979h10V66.555h25.796v249.971H72.036V99.853h-10v216.674H36.241V66.555zm-19.404 172.26v-94.55l9.404-11.565v117.681l-9.404-11.566z" />
              </Svg>
              <Text
                style={{
                  fontSize: 14,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                Gym
              </Text>
            </View>

            <View
              style={{
                margin: 5,
                borderRadius: 5,
                borderColor: "gray",
                borderWidth: 0.5,
                padding: 10,
                paddingVertical: 5,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Svg
                width=" 30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Path
                  d="M3 15c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3M3 20c2.483 0 4.345-3 4.345-3s1.862 3 4.345 3c2.482 0 4.965-3 4.965-3s2.483 3 4.345 3M5 10.5L9 8 7.813 6.516a1.262 1.262 0 01.228-1.797v0a1.261 1.261 0 011.726.202L14 10M16.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                  stroke="gray"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
              <Text
                style={{
                  fontSize: 14,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}
              >
                Swimming Pool
              </Text>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text
              style={{ fontSize: 15, fontWeight: "500", marginVertical: 10 }}
            >
              Rental Details
            </Text>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                paddingVertical: 20,
                backgroundColor: "#fff8f2",
                margin: 5,
                borderRadius: 5,
              }}
            >
              <Text>Monthly</Text>
              <Text>$ 600</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                paddingVertical: 20,
                backgroundColor: "#fff8f2",
                margin: 5,
                borderRadius: 5,
              }}
            >
              <Text>Maintenance/Month</Text>
              <Text>$ 20</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                paddingVertical: 20,
                backgroundColor: "#fff8f2",
                margin: 5,
                borderRadius: 5,
              }}
            >
              <Text>Home Insurance</Text>
              <Text>$ 300</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                paddingVertical: 20,
                backgroundColor: "#edf7ff",
                margin: 5,
                borderRadius: 5,
              }}
            >
              <Text>Deposite</Text>
              <Text>$ 300</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 30,
                paddingVertical: 20,
                backgroundColor: "#edf7ff",
                margin: 5,
                borderRadius: 5,
              }}
            >
              <Text>Holding Deposite</Text>
              <Text>$ 300</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 20,
                paddingLeft: 30,
                paddingRight: 10,
                backgroundColor: "#f2f2f2",
                margin: 5,
                borderRadius: 5,
              }}
            >
              <Text>Lease Breakage</Text>
              <Text style={{ fontStyle: "italic", fontSize: 13 }}>
                Refer Lease Agreement
              </Text>
            </View>
          </View>
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
