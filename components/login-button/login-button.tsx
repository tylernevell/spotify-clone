import { SpotifySVG } from '../icons/spotify-svg';

interface LoginButtonProps {
  children?: React.ReactNode;
  className?: string;
  logo: 'spotify' | 'facebook' | 'github' | 'google';
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

const LoginButton = (props: LoginButtonProps) => {
  const { className, logo, children, onClick } = props;

  let element;
  let style;

  switch (logo) {
    case 'facebook':
      break;
    case 'github':
      break;
    case 'google':
      break;
    default:
      element = <SpotifySVG />;
      style = 'bg-[#18D860] text-white py-3 px-5 rounded-md flex';
      break;
  }

  return (
    <button onClick={onClick} className={`${style} ${className}`}>
      {element} <span className="px-4">|</span>{' '}
      <span className="font-sans">{children}</span>
    </button>
  );
};

export { LoginButton };
