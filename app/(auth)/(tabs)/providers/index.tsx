import { View, Text, Image, FlatList } from "react-native";
import React from "react";
import { ProviderItem } from "@/components/ProviderItem";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

  const handleSingleProvider = ({ item }: any) => {
    router.push(`/deliveryDetails/a`);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={[{ key: "a" }, { key: "b" }, { key: "c" }, { key: "d" }, { key: "e" }, { key: "f" }, { key: "g" }, { key: "h" }]}
          renderItem={({ item }) => <ProviderItem handleSingleProvider={handleSingleProvider} />}
        
        />
      </View>
    </View>
  );
};

export default index;
