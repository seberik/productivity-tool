import { ReactNode } from "react";

export type TextProps = {
  size?: 'small' | 'normal';
  color?: 'primary' | 'secondary' | 'highlighted';
  weight?: 'normal' | 'medium';
  children: ReactNode;
}