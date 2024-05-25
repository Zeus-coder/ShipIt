import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export const ShipmentItem = ({ handleSingleDelivery }: any) => {
  return (
    <Pressable onPress={handleSingleDelivery}>
      <View
        style={{
          flex: 1,
          padding: 20,
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            gap: 10,
            borderWidth: 1,
            borderColor: Colors.lightprimaryColor,
            borderRadius: 50,
          }}
        >
          <Image
            source={require("@/assets/fedex.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            gap: 5,
            alignItems: "flex-start",
          }}
        >
          <Text style={{ fontSize: 15 }}>Item 1</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 12 }}>Date: 10/10/2022</Text>
            <Text style={{ fontSize: 12 }}>Status: Pending</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
