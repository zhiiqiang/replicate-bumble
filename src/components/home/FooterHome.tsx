import React from "react";
import { useTranslation } from "react-i18next";

export const FooterHome : React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("welcome")}
    </div>
  )
}