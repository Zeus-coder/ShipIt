import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Input from "@/components/input";
import { Colors } from "@/constants/Colors";
import Button from "@/components/button";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  const [pickupLocation, setPickupLocation] = useState("");
  const [deliverToLocation, setDeliverToLocation] = useState("");
  const [parcelWeight, setParcelWeight] = useState("");
  const [category, setCategory] = useState("");

  const handleCreateDelivery = () => {
    console.log("handleCreateDelivery");
    Alert.alert("Delivery Created Successfully")
    router.push("/deliveries");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 20, flexDirection: "column" }}>
        <View style={{ paddingVertical: 20 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: Colors.primaryColor,
            }}
          >
            Create Delivery
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={20}
        >
          <ScrollView>
            <View style={{ gap: 10 }}>
              <Text>Pickup Location</Text>
              <Input
                size="xl"
                variant="rounded"
                placeholder="Pickup Location"
                value={pickupLocation}
                onChangeText={setPickupLocation}
              />
            </View>
            <View style={{ gap: 10 }}>
              <Text>Deliver To Location</Text>
              <Input
                size="xl"
                variant="rounded"
                placeholder="Deliver To Location"
                value={deliverToLocation}
                onChangeText={setDeliverToLocation}
              />
            </View>
            <View style={{ gap: 10 }}>
              <Text>Parcel Weight</Text>
              <Input
                size="xl"
                variant="rounded"
                placeholder="Parcel Weight"
                value={parcelWeight}
                onChangeText={setParcelWeight}
              />
            </View>
            <View style={{ gap: 10 }}>
              <Text>Category</Text>
              <Input
                size="xl"
                variant="rounded"
                placeholder="Category"
                value={category}
                onChangeText={setCategory}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>

        <View
          style={{ padding: 20, gap: 20, flex: 1, justifyContent: "flex-end" }}
        >
          <Button size="lg" variant="solid" onPress={() => {handleCreateDelivery()}}>
            Create
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
