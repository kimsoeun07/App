import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";

const Start2 = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text>d</Text>
      </View>
      <Text style={styles.hello}>아기랑 사용을 환영해요!</Text>
      <Button
        onPress={() => router.push("../start3")}
        title="카카오로 로그인 하기"
      />
      <Button title="구글로 로그인 하기" />
      <Button title="네이버로 로그인 하기" />
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
  imageContainer: {
    width: 294,
    height: 419,
    backgroundColor: "#d9d9d9",
    borderColor: "black",
  },
  hello: {
    fontSize: 24,
    fontWeight: "700",
  },
});

export default Start2;
