import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { useRouter } from 'next/router';
import { Work_Sans } from 'next/font/google';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/reducers';
import { toggleDarkMode } from '@/redux/reducers/project';
import { BsSunFill, BsFillMoonFill } from 'react-icons/bs';

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
  const dispatch = useDispatch();
  const { isDarkMode } = useSelector((state: RootState) => state.project);

  const { children, className = '' } = props;

  const pageClass = `page--${router.pathname.replaceAll('/', '-')}`;
  const componentClass = twMerge(
    pageClass,
    'block w-full bg-white dark:bg-black text-black dark:text-white',
    className,
  );

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode(!isDarkMode));
  };

  return (
    <div
      className={`${font_body.variable}`}
      {...(isDarkMode && {
        'data-mode': 'dark',
      })}
    >
      <button
        onClick={handleToggleDarkMode}
        className="fixed top-4 z-[99] text-2xl right-4 p-2 rounded-full bg-black bg-opacity-50 text-blue-500 dark:text-amber-400 flex items-center justify-center"
      >
        {isDarkMode ? <BsSunFill /> : <BsFillMoonFill />}
        <span className="text-xs px-4 text-white">{`Press "Ctrl+D"`}</span>
      </button>
      <main className={componentClass}>{children}</main>
    </div>
  );
};

export default Layout;
