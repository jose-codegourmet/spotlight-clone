import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface ResultPreviewProps {
  className?: string;
  item: any;
}

const ContactContainer: FC<ResultPreviewProps> = (props) => {
  const { className = '', item } = props;

  const {
    firstName,
    lastName,
    image,
    address: { address, city, postalCode, state },
    company: { title: jobTitle },
  } = item as TContactInfo;

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
          alt={`${firstName} ${lastName}`}
          width={200}
          height={200}
          className="bg-orange-500 dark:bg-blue-500 rounded-full overflow-hidden mx-auto"
        />
      </div>
      <div className="contact-card__info flex flex-col text-center items-stretch justify-start">
        <h1 className="text-xl font-normal w-full leading-none mb-2">
          {firstName} {lastName}
        </h1>
        <h2 className="text-xs font-normal w-full leading-none mb-2 text-teal-600 dark:text-amber-600">{jobTitle}</h2>
        <p className="address text-xs">
          {postalCode} {state},{city},
        </p>
        <p className="address text-xs">{address}</p>
      </div>
    </div>
  );
};

export default ContactContainer;
