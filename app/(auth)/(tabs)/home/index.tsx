import { View, Text, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import Input from "@/components/input";
import { CurrentBalance } from "@/components/CurrentBalance";
import { FeatureHome } from "@/components/FeatureHome";
import { StatisticsHome } from "@/components/StatisticsHome";

const index = () => {
  return (
    <View>
      <View
        style={{
          height: 280,
          padding: 20,
          width: "auto",
          justifyContent: "center",
          gap: 20,
          backgroundColor: Colors.lightprimaryColor,
          borderBottomEndRadius: 100,
          borderBottomStartRadius: 100,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={{ color: "black", fontSize: 30, fontWeight: "bold" }}>
              Welcome, Tobi!
            </Text>
            <Text style={{ color: "white", fontSize: 15, fontWeight: "200" }}>
              You have 3 new deliveries
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              justifyContent: "flex-end",
            }}
          >
            <Ionicons name="notifications-outline" size={24} color="black" />
            <AntDesign name="questioncircleo" size={24} color="black" />
          </View>
        </View>
        <View>
          <Input
            value=""
            onChangeText={() => {}}
            placeholder="Enter Delivery Provider"
          />
        </View>
      </View>
      <CurrentBalance />
      <ScrollView
        style={{
          marginBottom: 390,
          padding: 20,
        }}
      >
        <FeatureHome />
        <StatisticsHome />
      </ScrollView>
    </View>
  );
};

export default index;
