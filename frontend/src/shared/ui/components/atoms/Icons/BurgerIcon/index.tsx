import { ComponentProps } from "react";

type Props = ComponentProps<"svg">;

const BurgerIcon = ({ ...props }: Props) => {
  return (
    <svg
      width="30"
      height="20"
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 1H30" stroke="#21243D" strokeWidth="1.6" />
      <path d="M0 10H30" stroke="#21243D" strokeWidth="1.6" />
      <path d="M0 19H30" stroke="#21243D" strokeWidth="1.6" />
    </svg>
  );
};

export default BurgerIcon;