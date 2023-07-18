import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface AppContainerProps {
  className?: string;
  item: any;
}

const AppContainer: FC<AppContainerProps> = (props) => {
  const { className = '', item } = props;

  const { applicationName, image, developer, lastModified, size, version } = item as TMockApp;

  const componentClass = twMerge(
    `
      contact-card
      w-full
    `,
    className,
  );

  return (
    <div className={componentClass}>
      <div className="contact-card__image w-full flex p-4">
        <Image
          src={image}
          alt={applicationName}
          width={200}
          height={200}
          className="bg-neutral-300 rounded-full overflow-hidden mx-auto"
        />
      </div>
      <div className="contact-card__info flex flex-col text-center items-stretch justify-start">
        <h1 className="text-xl font-normal w-full leading-none mb-2">{applicationName}</h1>
        <h2 className="text-xs font-normal w-full leading-none mb-2 text-teal-600 dark:text-amber-600">{version}</h2>
        <p className="address text-xs">{developer}</p>
        <p className="address text-xs">lastModified: {lastModified}</p>
        <p className="address text-xs italic">version: {version}</p>
      </div>
    </div>
  );
};

export default AppContainer;
