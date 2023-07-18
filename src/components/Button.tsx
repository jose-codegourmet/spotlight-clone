import type { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { omit } from 'lodash';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle?: 'NORMAL' | 'SPECIAL' | 'MUTED';
}

const Button: FC<ButtonProps> = (props) => {
  const { children, className = '', buttonStyle = 'NORMAL' } = props;

  return <button>button</button>;
};

export default Button;
