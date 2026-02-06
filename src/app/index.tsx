import * as AC from "@bacons/apple-colors";
import { ScrollView, Text, View } from "react-native";

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ alignItems: "center", gap: 8 }}>
        <Text
          selectable
          style={{ fontSize: 32, fontWeight: "700", color: AC.label }}
        >
          Hello, World!
        </Text>
        <Text
          selectable
          style={{ fontSize: 17, color: AC.secondaryLabel }}
        >
          Welcome to Expo
        </Text>
      </View>
    </ScrollView>
  );
}
