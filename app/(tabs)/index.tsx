import React from "react";
import { Text, SafeAreaView } from "react-native";
import { HStack } from "@/components/ui/hstack";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <HStack className="justify-between">
        <Text className="text-lg font-bold">HomeScreen</Text>
        <Text className="text-lg font-bold">Let's test</Text>
      </HStack>
    </SafeAreaView>
  );
}
