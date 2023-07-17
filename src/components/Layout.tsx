import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';
import { Work_Sans } from 'next/font/google';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const font_body = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--body-font',
});

const Layout: FC<LayoutProps> = (props) => {
  const router = useRouter();
  const { isMobileOpen, isDarkMode } = useSelector((state: RootState) => state.project);

  const { children, className = '' } = props;

  const pageClass = `page--${router.pathname.replaceAll('/', '-')}`;
  const componentClass = twMerge(
    pageClass,
    'block w-full bg-white dark:bg-black text-black dark:text-white',
    className,
  );

  return (
    <div
      className={`${font_body.variable}`}
      {...(isDarkMode && {
        'data-mode': 'dark',
      })}
    >
      <main className={componentClass}>{children}</main>
    </div>
  );
};

export default Layout;
