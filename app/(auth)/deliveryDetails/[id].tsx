import { View, Text, Image } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { Colors } from "@/constants/Colors";
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";

const singleDelivey = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          height: 5,
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("@/assets/fedex.png")}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <Animatable.View
        animation="fadeInUp"
        duration={1200}
        easing={"ease-out"}
        style={{
          flex: 2,
          height: "auto",
          // padding: 20,
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 16,
          width: "auto",
          justifyContent: "flex-start",
          backgroundColor: Colors.lightprimaryColor,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
        }}
      >
        <Animatable.View
          animation="fadeInUp"
          duration={1200}
          easing={"ease-out"}
          style={{
            flex: 1,
            height: "auto",
            padding: 20,
            width: "auto",
            justifyContent: "flex-start",
            backgroundColor: "white",
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          }}
        >
          <View style={{ flexDirection: "column", gap: 40 }}>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View>
                <FontAwesome6
                  name="truck-droplet"
                  size={24}
                  color={Colors.lightprimaryColor}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    color: Colors.lightprimaryColor,
                    fontWeight: "500",
                  }}
                >
                  Pickup From
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "800" }}>
                  21, Jibowu Street, Lagos{" "}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View>
                <FontAwesome6
                  name="truck-droplet"
                  size={24}
                  color={Colors.lightprimaryColor}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    color: Colors.lightprimaryColor,
                    fontWeight: "500",
                  }}
                >
                  Deliver To
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "800" }}>
                  21, Yaba Bustop, Lagos{" "}
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View>
                <FontAwesome6
                  name="weight-hanging"
                  size={24}
                  color={Colors.lightprimaryColor}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    color: Colors.lightprimaryColor,
                    fontWeight: "500",
                  }}
                >
                  Parcel Weight
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "800" }}>12kg</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View>
                <MaterialIcons
                  name="category"
                  size={24}
                  color={Colors.lightprimaryColor}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    color: Colors.lightprimaryColor,
                    fontWeight: "500",
                  }}
                >
                  Category
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "800" }}>
                  Machinery
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <View>
                <MaterialIcons
                  name="track-changes"
                  size={24}
                  color={Colors.lightprimaryColor}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 15,
                    color: Colors.lightprimaryColor,
                    fontWeight: "500",
                  }}
                >
                  Status
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "800" }}>Pending</Text>
              </View>
            </View>
          </View>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default singleDelivey;
