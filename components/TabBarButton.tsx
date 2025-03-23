import { useTheme } from "@react-navigation/native";
import { Pressable, Text } from "react-native";

interface TabBarButtonProps {
  label: string;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  icon: JSX.Element;
  accessibilityLabel?: string;
  testID?: string;
}

export function TabBarButton({
  label,
  isFocused,
  onPress,
  onLongPress,
  icon,
  accessibilityLabel,
  testID,
}: TabBarButtonProps) {
  const { colors } = useTheme();

  return (
    <Pressable
      accessibilityState={isFocused ? { selected: true } : {}}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      onPress={onPress}
      onLongPress={onLongPress}
      style={{ flex: 1 }}
      className="items-center justify-center gap-1 py-2"
    >
      {icon}
      <Text style={{ color: isFocused ? colors.primary : colors.text }}>
        {label}
      </Text>
    </Pressable>
  );
}
