import * as AC from "@bacons/apple-colors";
import { Image } from "expo-image";
import { ScrollView, Text, View } from "react-native";

const features = [
  { icon: "sf:bolt.fill", title: "Fast Refresh", description: "See changes instantly as you code", color: AC.systemYellow },
  { icon: "sf:iphone.gen3", title: "Cross Platform", description: "iOS, Android, and Web from one codebase", color: AC.systemBlue },
  { icon: "sf:arrow.down.app.fill", title: "OTA Updates", description: "Push updates without app store review", color: AC.systemGreen },
  { icon: "sf:sparkles", title: "Native APIs", description: "Full access to device capabilities", color: AC.systemPurple },
];

export default function IndexRoute() {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={{ padding: 20, gap: 32 }}
    >
      <View style={{ alignItems: "center", gap: 12, paddingTop: 40 }}>
        <Image
          source="sf:globe.americas.fill"
          style={{ fontSize: 64, color: AC.systemBlue }}
        />
        <Text
          selectable
          style={{ fontSize: 34, fontWeight: "800", color: AC.label }}
        >
          Hello, World!
        </Text>
        <Text
          selectable
          style={{
            fontSize: 17,
            color: AC.secondaryLabel,
            textAlign: "center",
            maxWidth: 300,
          }}
        >
          Welcome to Expo — the platform for building universal native apps.
        </Text>
      </View>

      <View style={{ gap: 12 }}>
        {features.map((feature) => (
          <View
            key={feature.title}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 14,
              padding: 16,
              backgroundColor: AC.secondarySystemGroupedBackground,
              borderRadius: 14,
              borderCurve: "continuous",
            }}
          >
            <Image
              source={feature.icon}
              style={{ fontSize: 28, color: feature.color }}
            />
            <View style={{ flex: 1, gap: 2 }}>
              <Text
                selectable
                style={{ fontSize: 17, fontWeight: "600", color: AC.label }}
              >
                {feature.title}
              </Text>
              <Text
                selectable
                style={{ fontSize: 15, color: AC.secondaryLabel }}
              >
                {feature.description}
              </Text>
            </View>
          </View>
        ))}
      </View>

      <Text
        selectable
        style={{
          fontSize: 13,
          color: AC.tertiaryLabel,
          textAlign: "center",
        }}
      >
        Built with Expo SDK 55
      </Text>
    </ScrollView>
  );
}
