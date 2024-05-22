import { View, StyleSheet } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";
import Button from '@/components/button';
import Input from '@/components/input';
import { useState } from 'react';
const Page = () => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      <Button size="md" variant="solid" icon={<MaterialIcons name="add" size={24} color="black" />} onPress={() => console.log('pressed')}>Hello</Button>
      <Input value={value} onChangeText={(text) => setValue(text)} size="xl" variant='rounded' placeholder="Placeholder" icon={<MaterialIcons name="add" size={24} color="black" />} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Page;