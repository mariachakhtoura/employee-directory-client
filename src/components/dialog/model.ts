import { ReactNode } from "react";

export interface IDialog {
  open: boolean;
  content?: ReactNode;
  toggleOpen: () => void;
} 