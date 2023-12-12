import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtGilroyMedium40: "font-gilroy font-medium",
  txtGilroyMedium24Bluegray50: "font-gilroy font-medium",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroySemiBold20: "font-gilroy font-semibold",
  txtGilroyMedium20Bluegray300: "font-gilroy font-medium",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtPublicSansLight18: "font-light font-publicsans",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtGilroySemiBold28: "font-gilroy font-semibold",
  txtGilroySemiBold36Gray50: "font-gilroy font-semibold",
  txtGilroySemiBold16Gray50: "font-gilroy font-semibold",
  txtGilroyRegular14Bluegray700: "font-gilroy font-normal",
  txtGilroyMedium14Gray50: "font-gilroy font-medium",
  txtGilroyMedium20Gray90001: "font-gilroy font-medium",
  txtGilroySemiBold52Gray50: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray300: "font-gilroy font-medium",
  txtMerriweatherBold24: "font-bold font-merriweather",
  txtGilroyRegular14Bluegray100: "font-gilroy font-normal",
  txtGilroyBold18WhiteA700: "font-bold font-gilroy",
  txtGilroySemiBold20Gray50: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroySemiBold52: "font-gilroy font-semibold",
  txtGilroySemiBold24Bluegray50: "font-gilroy font-semibold",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyBold20: "font-bold font-gilroy",
  txtGilroyMedium14WhiteA700: "font-gilroy font-medium",
  txtGilroyRegular16Bluegray50: "font-gilroy font-normal",
  txtGilroyBold20Gray50: "font-bold font-gilroy",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtPublicSansLight18Bluegray100: "font-light font-publicsans",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroySemiBold36: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray700: "font-gilroy font-medium",
  txtGilroyMedium20Bluegray50: "font-gilroy font-medium",
  txtPublicSansLight24: "font-light font-publicsans",
  txtGilroyMedium18Bluegray100: "font-gilroy font-medium",
  txtGilroyMedium16WhiteA700: "font-gilroy font-medium",
  txtGilroySemiBold28Gray50: "font-gilroy font-semibold",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
