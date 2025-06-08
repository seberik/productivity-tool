import classNames from "classnames"
import styles from './Text.module.scss';
import { TextProps } from "./Text.types";

export function Text({ size, color, weight, children }: TextProps) {
  const classname = classNames({
    [styles.small]: size === 'small',
    [styles.colorSecondary]: color === 'secondary',
    [styles.colorHighlighted]: color === 'highlighted',
    [styles.weightMedium]: weight === 'medium',
  })

  return <span className={classname}>{children}</span>
}