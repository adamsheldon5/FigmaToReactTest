import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder14: "rounded-radius14",
  RoundedBorder10: "rounded-radius10",
  CircleBorder18: "rounded-radius18",
  icbCircleBorder15: "rounded-radius15",
  icbCircleBorder25: "rounded-radius25",
  icbCircleBorder18: "rounded-radius18",
  icbRoundedBorder8: "rounded-radius8",
  icbCircleBorder21: "rounded-radius21",
};
const variants = {
  Outline: "bg-gray_900_26 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-gray_902",
  OutlineGray100: "outline outline-[0.75px] outline-gray_100 text-black_900",
  FillGray902: "bg-gray_902 text-white_A700",
  FillBlack900: "bg-black_900 text-white_A700",
  FillGray100: "bg-gray_100 text-gray_500",
  FillGreen600: "bg-green_600 text-white_A700",
  FillGray50: "bg-gray_50 text-black_900",
  OutlineGray902: "outline outline-[0.5px] outline-gray_902 text-gray_902",
  OutlineWhiteA700:
    "outline outline-[0.75px] outline-white_A700 text-white_A700",
  Outline1_2: "bg-gray_902 text-white_A700",
  icbOutline: "bg-gray_900_26",
  icbOutlineGray5003f: "bg-white_A700 shadow-bs",
  icbFillWhiteA700: "bg-white_A700",
  icbOutlineGray100: "outline outline-[0.75px] outline-gray_100",
  icbFillGray50: "bg-gray_50",
  icbFillGray90067: "bg-gray_900_67",
  icbFillGray100: "bg-gray_100",
};
const sizes = {
  sm: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  md: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  lg: "lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  xl: "lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
  smIcn: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  mdIcn: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  lgIcn: "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder14",
    "RoundedBorder10",
    "CircleBorder18",
    "icbCircleBorder15",
    "icbCircleBorder25",
    "icbCircleBorder18",
    "icbRoundedBorder8",
    "icbCircleBorder21",
  ]),
  variant: PropTypes.oneOf([
    "Outline",
    "FillWhiteA700",
    "OutlineGray100",
    "FillGray902",
    "FillBlack900",
    "FillGray100",
    "FillGreen600",
    "FillGray50",
    "OutlineGray902",
    "OutlineWhiteA700",
    "Outline1_2",
    "icbOutline",
    "icbOutlineGray5003f",
    "icbFillWhiteA700",
    "icbOutlineGray100",
    "icbFillGray50",
    "icbFillGray90067",
    "icbFillGray100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smIcn", "mdIcn", "lgIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder10",
  variant: "icbOutline",
  size: "sm",
};

export { Button };
