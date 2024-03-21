import { ReactNode } from "react";

export interface IDialog {
  open: boolean;
  content?: ReactNode;
  toggleOpen: (content?: ReactNode) => void;
} 