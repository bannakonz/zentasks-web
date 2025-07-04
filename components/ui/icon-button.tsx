import Image from 'next/image';

interface IconButton {
  iconPath: string;
  alt: string;
  onClick: () => void;
}

const IconButton = ({ iconPath, alt, onClick }: IconButton) => {
  return (
    <>
      <button className="cursor-pointer" onClick={onClick}>
        <Image src={iconPath} alt={alt} width={24} height={24} />
      </button>
    </>
  );
};
export default IconButton;
