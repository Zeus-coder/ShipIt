import { Colors } from "@/constants/Colors";
import React from "react";
import { Modal, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Input from "./input";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  children,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
      transparent={true}
    >
      <View
        style={{
          height: "100%",
          marginTop: 80,
          padding: 20,
          borderWidth: 1,
          borderColor: Colors.lightprimaryColor,
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          backgroundColor: "white",
        }}
      >
        {children}
      </View>
    </Modal>
  );
};



export default CustomModal;
