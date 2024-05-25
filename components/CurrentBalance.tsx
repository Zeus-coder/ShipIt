import { View, Text } from "react-native";
import React from "react";
import Button from "@/components/button";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export const CurrentBalance = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.morelighterprimaryColor,
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
        marginTop: -70,
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Text style={{ color: "black", fontSize: 15, fontWeight: "400" }}>
        Current Balance
      </Text>
      <Text style={{ color: "black", fontSize: 25, fontWeight: "bold" }}>
        {" "}
        ₦ 100,000.00
      </Text>
      <View style={{ flexDirection: "row", width: "100%", gap: 5 }}>
        <View
          style={{
            backgroundColor: Colors.lightprimaryColor,
            width: "22%",
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
            width: "39%",
            flexDirection: "column",
            paddingHorizontal: 16,
            paddingVertical: 8,

            borderRadius: 6,
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Entypo name="wallet" size={24} color="white" />
            <View>
              <Text style={{ color: "white", fontSize: 8, fontWeight: "500" }}>
                Wallet
              </Text>
              <Text style={{ color: "white", fontSize: 8, fontWeight: "bold" }}>
                Get Cashback
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: Colors.lightprimaryColor,
            width: "37%",
            flexDirection: "column",
            paddingHorizontal: 16,
            paddingVertical: 8,

            borderRadius: 6,
          }}
        >
          <View style={{ flexDirection: "row", gap: 5 }}>
          <Entypo
                  name="network"
                  size={24}
                  color="white"
                />
            <View>
              <Text style={{ color: "white", fontSize: 8, fontWeight: "500" }}>
                Providers
              </Text>
              <Text style={{ color: "white", fontSize: 8, fontWeight: "bold" }}>
                CHange Now
              </Text>
            </View>
          </View>
          
        </View>
      </View>
    </View>
  );
};
