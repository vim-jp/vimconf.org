import { MicVocal, Zap, Coffee } from "@lucide/astro";

export const getScheduleCardStyle = (title: string) => {
  const isBreak = ["Short break", "Lunch break"].includes(title);
  if (isBreak) {
    return ["bg-gray-50 border-gray-200", Coffee];
  }
  const isLightningTalks = title === "Lightning talks";
  if (isLightningTalks) {
    return ["bg-yellow-50 border-yellow-200", Zap];
  }

  const isOtherEvent = ["Opening", "Closing", "After party"].includes(title);
  if (isOtherEvent) {
    return ["bg-blue-50 border-blue-200", MicVocal];
  }

  return ["bg-green-50", MicVocal];
};

export const formatTime = (date: Date): string => {
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
};
