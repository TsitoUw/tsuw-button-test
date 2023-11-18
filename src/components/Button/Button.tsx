import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}
const Button: FC<Props> = ({ children }: Props) => {
  return (
    <button
      style={{
        padding: "4px",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
