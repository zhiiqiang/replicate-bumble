import React from "react";
import { useTranslation } from "react-i18next";
import { FOOTER_NAVIGATION } from "../../constants/const";

const Logo = require("../../assets/logo.svg");
const Arrow = require("../../assets/arrow.svg");

const urlSection = () => {
  const { t } = useTranslation("common");
  return (
    <div className="flex-1 flex gap-12 col-span-2">
      {FOOTER_NAVIGATION.map((section, index) => (
        <div key={section.title} className="flex flex-col gap-2">
          <div className="text-[#575656]">
            {t(section.title)}
          </div>
          <div className="flex flex-col gap-2 max-w-[200px]">
            {section.list.map((item) => (
              <div className="flex">
                <a className={index === 2 ? "text-sm mt-2" : "text-xl"} href={item.url} key={item.label}>{t(item.label)}</a>
                { item.hasIcon &&  <img className="h-auto w-6" src={Arrow} alt="arrow"/>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export const FooterHome : React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="p-10">
      <div className="flex place-content-between">
        <div className="flex-1">
          <img className="flex-1 h-auto w-60 self-start" src={Logo} alt=""/>
        </div>
        {urlSection()}
      </div>
    </div>
  )
}