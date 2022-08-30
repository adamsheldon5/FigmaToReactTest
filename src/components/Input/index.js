import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineGray300: "bg-white_A700 border border-gray_300 border-solid",
  srcFillGray50: "bg-gray_50",
  srcOutlineGray3001_2: "border border-gray_300 border-solid",
  OutlineGray400: "border border-gray_400 border-solid",
  FillGray50: "bg-gray_50",
  OutlineGray4001_2: "border border-gray_400 border-solid",
};
const shapes = {
  srcRoundedBorder15: "rounded-radius15",
  srcRoundedBorder8: "rounded-radius8",
  RoundedBorder8: "rounded-radius8",
  RoundedBorder15: "rounded-radius15",
};
const sizes = {
  smSrc:
    "px-[11px] 3xl:px-[13px] lg:px-[8px] xl:px-[9px] xl:py-[10px] py-[12px] 3xl:py-[14px] lg:py-[9px]",
  mdSrc:
    "lg:pb-[13px] xl:pb-[15px] pb-[17px] 3xl:pb-[20px] lg:pt-[16px] xl:pt-[18px] pt-[21px] 3xl:pt-[25px] lg:px-[13px] xl:px-[15px] px-[17px] 3xl:px-[20px]",
  sm: "lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
  md: "lg:pb-[10px] xl:pb-[12px] pb-[14px] 3xl:pb-[16px] lg:pt-[14px] xl:pt-[16px] pt-[19px] 3xl:pt-[22px] lg:px-[10px] xl:px-[12px] px-[14px] 3xl:px-[16px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcRoundedBorder15",
    "srcRoundedBorder8",
    "RoundedBorder8",
    "RoundedBorder15",
  ]),
  variant: PropTypes.oneOf([
    "srcOutlineGray300",
    "srcFillGray50",
    "srcOutlineGray3001_2",
    "OutlineGray400",
    "FillGray50",
    "OutlineGray4001_2",
  ]),
  size: PropTypes.oneOf(["smSrc", "mdSrc", "sm", "md"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "srcRoundedBorder15",
  variant: "srcOutlineGray300",
  size: "",
};

export { Input };
