import * as Haptics from 'expo-haptics';

export const haptics = {
  success: async () => await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success),
  error: async () => await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error),
  warning: async () => await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning),
  selection: async () => await Haptics.selectionAsync(),
  impactLight: async () => await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
  impactMedium: async () => await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
  impactHeavy: async () => await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy),
};

// onPress={() => (haptics.success, navigation.navigate("Champions"))}>
