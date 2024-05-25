import { Stack, router, useRouter } from "expo-router";
import { Tabs } from "expo-router";
import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Image, Pressable, Text, View } from "react-native";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 50,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          shadowColor: "#000",
          shadowOpacity: 0.15,
          backgroundColor: Colors.morelighterprimaryColor,
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <View
                    style={{
                      padding: 10,
                      borderWidth: 3,
                      borderColor: Colors.morelighterprimaryColor,
                      borderRadius: 50,
                      position: "absolute",
                      top: -30,
                      backgroundColor: "white",
                    }}
                  >
                    <AntDesign
                      name="home"
                      size={34}
                      color={focused ? Colors.lightprimaryColor : "gray"}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      padding: 10,
                      borderWidth: 3,
                      borderColor: Colors.morelighterprimaryColor,
                      borderRadius: 50,
                      position: "absolute",
                      top: -20,
                      backgroundColor: "white",
                    }}
                  >
                    <AntDesign
                      name="home"
                      size={24}
                      color={focused ? Colors.morelighterprimaryColor : "gray"}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="deliveries/index"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <View
                    style={{
                      padding: 10,
                      borderWidth: 3,
                      borderColor: Colors.morelighterprimaryColor,
                      borderRadius: 50,
                      position: "absolute",
                      top: -30,
                      backgroundColor: "white",
                    }}
                  >
                    <MaterialIcons
                      name="delivery-dining"
                      size={34}
                      color={focused ? Colors.lightprimaryColor : "gray"}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      padding: 10,
                      borderWidth: 3,
                      borderColor: Colors.morelighterprimaryColor,
                      borderRadius: 50,
                      position: "absolute",
                      top: -20,
                      backgroundColor: "white",
                    }}
                  >
                    <MaterialIcons
                      name="delivery-dining"
                      size={24}
                      color={focused ? Colors.morelighterprimaryColor : "gray"}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="createDelivery/index"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <View
                    style={{
                      padding: 10,
                      borderWidth: 3,
                      borderColor: Colors.morelighterprimaryColor,
                      borderRadius: 50,
                      position: "absolute",
                      top: -30,
                      backgroundColor: "white",
                    }}
                  >
                    <AntDesign
                      name="pluscircleo"
                      size={34}
                      color={focused ? Colors.lightprimaryColor : "gray"}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      padding: 10,
                      borderWidth: 3,
                      borderColor: Colors.morelighterprimaryColor,
                      borderRadius: 50,
                      position: "absolute",
                      top: -20,
                      backgroundColor: "white",
                    }}
                  >
                    <AntDesign
                      name="pluscircleo"
                      size={24}
                      color={focused ? Colors.morelighterprimaryColor : "gray"}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />
      <Tabs.Screen
        name="providers/index"
        options={{
          headerShown: false,
          title: "",
          tabBarIcon: ({ focused }) => {
            return (
              <>
                {focused ? (
                  <View
                    style={{
                      padding: 10,
                      borderWidth: 3,
                      borderColor: Colors.morelighterprimaryColor,
                      borderRadius: 50,
                      position: "absolute",
                      top: -30,
                      backgroundColor: "white",
                    }}
                  >
                    <Entypo
                      name="network"
                      size={34}
                      color={focused ? Colors.lightprimaryColor : "gray"}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      padding: 10,
                      borderWidth: 3,
                      borderColor: Colors.morelighterprimaryColor,
                      borderRadius: 50,
                      position: "absolute",
                      top: -20,
                      backgroundColor: "white",
                    }}
                  >
                    <Entypo
                      name="network"
                      size={24}
                      color={focused ? Colors.morelighterprimaryColor : "gray"}
                    />
                  </View>
                )}
              </>
            );
          },
        }}
      />
    </Tabs>
  );
};

export default Layout;
