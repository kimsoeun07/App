import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

const Start1 = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>아기랑페이지</Text>
      <Button onPress={() => router.push("../start2")} title="이동" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default Start1;
