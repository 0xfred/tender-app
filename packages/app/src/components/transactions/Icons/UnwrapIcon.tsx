import { FC } from "react";

type props = {
  fill: string;
}


export const UnwrapIcon: FC<props> = ({fill}) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.002 4.744a.84.84 0 00.003 1.175l3.64 3.679.084.074a.807.807 0 001.072-.077.835.835 0 00-.002-1.174l-3.64-3.68-.083-.073a.81.81 0 00-1.074.076zm-9.286 6.432A.827.827 0 003 12c0 .458.367.83.818.83h14.383l-5.196 5.251-.074.085a.84.84 0 00.072 1.09.81.81 0 001.156.002l6.6-6.67.073-.084a.836.836 0 00.106-.82.817.817 0 00-.756-.514H3.818l-.102.006z"
      fill={fill}
    />
  </svg>
);
