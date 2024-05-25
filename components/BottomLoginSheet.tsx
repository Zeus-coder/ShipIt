import { Colors } from "@/constants/Colors";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Button from "@/components/button";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
export const BottomLoginSheet = () => {
  const { bottom } = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <Button
        size="lg"
        variant="solid"
        onPress={() => {router.push('/register')}}
        icon={
          <Ionicons
            name="mail"
            size={20}
            style={styles.btnIcon}
            color={"#fff"}
          />
        }
      >
        Sign up with email
      </Button>
      <Button
        size="lg"
        style={{marginBottom: 10}}
        variant="solid"
        onPress={() => {router.push('/login')}}
        icon={
          <AntDesign
            name="login"
            size={20}
            style={styles.btnIcon}
            color={"#fff"}
          />
        }
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.lightprimaryColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 26,
    gap: 14,
  
  },
  btnLight: {
    backgroundColor: "#fff",
  },
  btnLightText: {
    color: "#000",
    fontSize: 20,
  },
  btnDark: {
    backgroundColor: Colors.primaryColor,
  },
  btnDarkText: {
    color: "#fff",
    fontSize: 20,
  },
  btnOutline: {
    borderWidth: 3,
    borderColor: Colors.lightprimaryColor,
  },
  btnIcon: {
    paddingRight: 6,
  },
});
