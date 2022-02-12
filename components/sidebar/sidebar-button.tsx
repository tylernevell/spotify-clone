interface SidebarButtonProps {
  children: string | React.ReactNode;
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
}

const SidebarButton = (props: SidebarButtonProps) => {
  const { children, onClick } = props;

  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 hover:text-white"
    >
      {children}
    </button>
  );
};

export { SidebarButton };
