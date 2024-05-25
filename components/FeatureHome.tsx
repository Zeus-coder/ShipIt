import { View, Text } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export const FeatureHome = () => {
  return (
    <View>
      <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
        Features
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", width: "100%" , marginVertical: 20}}>
        <View
          style={{
            backgroundColor: Colors.lightprimaryColor,
            width: "auto",
            flexDirection: "column",
            paddingHorizontal: 16,
            paddingVertical: 8,

            borderRadius: 6,
          }}
        >
          <AntDesign name="scan1" size={24} color="white" />
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            Scan
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.lightprimaryColor,
            width: "auto",
            flexDirection: "column",
            paddingHorizontal: 16,
            paddingVertical: 8,

            borderRadius: 6,
          }}
        >
          <AntDesign name="scan1" size={24} color="white" />
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            Scan
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.lightprimaryColor,
            width: "auto",
            flexDirection: "column",
            paddingHorizontal: 16,
            paddingVertical: 8,

            borderRadius: 6,
          }}
        >
          <AntDesign name="scan1" size={24} color="white" />
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            Scan
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.lightprimaryColor,
            width: "auto",
            flexDirection: "column",
            paddingHorizontal: 16,
            paddingVertical: 8,

            borderRadius: 6,
          }}
        >
          <AntDesign name="scan1" size={24} color="white" />
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            Scan
          </Text>
        </View>
      </View>
    </View>
  );
};
