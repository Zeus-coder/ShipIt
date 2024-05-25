import { Colors } from "@/constants/Colors";
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import * as Animatable from "react-native-animatable";
import Input from "@/components/input";
import Button from "@/components/button";
import { useState } from "react";
import { useRouter } from "expo-router";

const Register = () => {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      // keyboardVerticalOffset={70}
      style={styles.container}>

      <View style={styles.container}>
        <Animatable.View
          animation="fadeInDown"
          duration={1200}
          easing={"ease-out"}
          style={{
            height: 200,
            padding: 20,
            width: "auto",
            justifyContent: "flex-end",
            backgroundColor: Colors.lightprimaryColor,
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
          }}
        >
          <Text style={styles.title}>Welcome</Text>
        </Animatable.View>

        <View style={{ padding: 20, gap: 20, }}>
          <View>
            <Text style={{ color: "black", fontSize: 40, fontWeight: "bold" }}>Register Now</Text>
          </View>
          <View>
            <Input size="lg" placeholder="Fullname" variant="outline"  value={fullname} onChangeText={setFullname}/>
            <Input size="lg" placeholder="Username" variant="outline"  value={username} onChangeText={setUsername}/>
            <Input size="lg" placeholder="Email" variant="outline"  value={email} onChangeText={setEmail}/>
            <Input size="lg" placeholder="Password" variant="outline" value={password} onChangeText={setPassword}/>
          </View>
        </View>

        <View  style={{ padding: 20, gap: 20 ,flex:1,justifyContent: "flex-end", }}>
          <Button size="lg" variant="solid" onPress={() => {router.push('/home')}}>Register</Button>
        </View>
      </View>
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',

  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",

    marginTop: 50,
  },
});

export default Register