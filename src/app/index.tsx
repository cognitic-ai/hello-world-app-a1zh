import ShadcnDemo from "@/components/shadcn-demo";

export default function IndexRoute() {
  return (
    <ShadcnDemo
      dom={{
        scrollEnabled: true,
        contentInsetAdjustmentBehavior: "automatic",
      }}
    />
  );
}
