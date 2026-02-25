// Code for UI languages only
export const uiLanguages = ["en", "ne", "new"] as const;

export type UiLanguage = (typeof uiLanguages)[number];