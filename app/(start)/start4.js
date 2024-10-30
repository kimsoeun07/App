import { useRouter } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import colors from "../../constants/colors";

const Start4 = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.skip}>나중에 할게요</Text>
      <Text style={styles.inputlabel}>어떻게 불러드리면 될까요?</Text>
      <TextInput style={styles.input} placeholder="ex) 당근아빠" />
      <Text style={styles.inputlabel}>거주지역이 어디인가요?</Text>
      <View style={styles.input}>
        <RNPickerSelect
          onValueChange={() => {}}
          items={[
            { label: "전라남도 목포시", value: "전라남도 목포시" },
            { label: "경기도 수원시", value: "경기도 수원시" },
          ]}
        />
      </View>
      <Text style={styles.inputlabel}>아기가 태어난지 얼마나 됐나요?</Text>
      <View style={styles.input}>
        <RNPickerSelect
          onValueChange={() => {}}
          items={[
            { label: "1개월", value: "1개월" },
            { label: "2개월", value: "2개월" },
            { label: "3개월", value: "3개월" },
            { label: "4개월", value: "4개월" },
            { label: "5개월", value: "5개월" },
            { label: "6개월", value: "6개월" },
          ]}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.dismissAll()}
      >
        <Text style={styles.next}>완료하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 30,
    justifyContent: "flex-end",
  },
  skip: {
    position: "absolute",
    top: 40,
    right: 40,
  },
  inputlabel: {
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    padding: 20,
    borderWidth: 1,
    borderColor: colors.gray0,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginBottom: 40,
  },
  next: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  button: {
    backgroundColor: colors.primary500,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    marginTop: 90,
    borderRadius: 12,
  },
});

export default Start4;
