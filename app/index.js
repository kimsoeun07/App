import { Link, useRouter } from "expo-router";
import { StyleSheet, View, Text, StatusBar } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <Text>Expo router!</Text>
      <Link href="/start1">rr</Link>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
