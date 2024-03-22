import { ReactNode } from "react";

export interface IWrapperComponent {
  children: ReactNode;
}

export interface IStyledComponent {
  className?: string;
}