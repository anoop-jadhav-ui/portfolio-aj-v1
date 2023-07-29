import { I18nextProvider } from "react-i18next";
import React, { ReactNode } from "react";
import i18n from "../translations/i18next-config";

const TranslationSeed = ({ children }: { children: ReactNode }) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationSeed;
