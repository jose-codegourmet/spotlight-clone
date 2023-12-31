import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import ContactContainer from './preview/ContactContainer';
import { RootState } from '@/redux/reducers';
import { type } from 'os';
import { useSelector } from 'react-redux';
import AppContainer from './preview/AppContainer';

interface ResultPreviewProps {
  className?: string;
}

const ResultPreview: FC<ResultPreviewProps> = (props) => {
  const { className = '' } = props;
  const { openedObj, objType = '' as string } = useSelector((state: RootState) => state.spotlight);

  const componentClass = twMerge(
    `
      preview-card
      preview-card--${type}
      w-full
    `,
    className,
  );

  if (openedObj === null) {
    return (
      <div className="w-full h-full overflow-x-hidden overflow-y-auto flex items-center justify-center">
        <span className="text-center block text-sm text-italic text-black dark:text-white">
          Type on the searchbar above to see preview
        </span>
      </div>
    );
  }

  const renderPreview = () => {
    switch (objType) {
      case 'contact':
        return <ContactContainer item={openedObj} />;
      case 'apps':
        return <AppContainer item={openedObj} />;
      default:
        return null;
    }
  };

  return <div className={componentClass}>{renderPreview()}</div>;
};

export default ResultPreview;
