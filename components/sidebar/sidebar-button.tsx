interface SidebarButtonProps {
  children: string | React.ReactNode;
}

const SidebarButton = (props: SidebarButtonProps) => {
  const { children } = props;

  return (
    <button className="flex items-center space-x-2 hover:text-white">
      {children}
    </button>
  );
};

export { SidebarButton };
