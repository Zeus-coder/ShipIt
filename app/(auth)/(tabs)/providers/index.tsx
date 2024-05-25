import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { ShipmentItem } from "@/components/ShipmentItem";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  const handleSingleDelivery = ({ item }: any) => {
    router.push(`/deliveryDetails/a`);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={[{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }, { key: "e" }, { key: "f" }, { key: "g" }, { key: "h" }]}
          renderItem={({ item }) => <ShipmentItem handleSingleDelivery={handleSingleDelivery} />}
        
        />
      </View>
    </View>
  );
};

export default index;
