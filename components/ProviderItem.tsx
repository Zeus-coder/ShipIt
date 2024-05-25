import { View, Text, Image, Pressable, FlatList, Alert } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import CustomModal from "./CustomModal";
import Button from "./button";
import Input from "./input";
import { EvilIcons } from "@expo/vector-icons";
import { ShipmentItem } from "./ShipmentItem";
import { useRouter } from "expo-router";

export const ProviderItem = ({ handleSingleProvider }: any) => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleSingleDelivery = ({ item }: any) => {
    console.log("hello");
    closeModal();
    router.push(`/deliveryDetails/a`);
    Alert.alert("Delivery Created Successfully");
  };

  return (
    <>
      <Pressable onPress={handleSingleProvider}>
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
            <Text style={{ fontSize: 15 }}>Provider 1</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Text style={{ fontSize: 12 }}>Shipping Price: ₦ 1,000.00</Text>
            </View>
          </View>
        </View>
      </Pressable>

      <View style={{ paddingHorizontal: 20 }}>
        <Button onPress={openModal}>Select Delivery</Button>
      </View>
      <CustomModal visible={modalVisible} onClose={closeModal}>
        <View style={{ flexDirection: "column", gap: 20 }}>
          <Text>Select Delivery Created for Provider</Text>
          <Input
            size="xl"
            variant="outline"
            placeholder="Search for created delivery"
            value="hello"
            onChangeText={() => {}}
            icon={<EvilIcons name="search" size={24} color="black" />}
          />
          <View style={{ height: 400 }}>
            <FlatList
              data={[
                { key: "a" },
                { key: "b" },
                { key: "c" },
                { key: "d" },
                { key: "e" },
                { key: "f" },
                { key: "g" },
                { key: "h" },
              ]}
              renderItem={({ item }) => (
                <ShipmentItem handleSingleDelivery={handleSingleDelivery} />
              )}
            />
          </View>
        </View>
        <View>
          <Button onPress={closeModal}>Close</Button>
        </View>
      </CustomModal>
    </>
  );
};
