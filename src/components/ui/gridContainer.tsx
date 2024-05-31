

interface GridContainerProps {
  children: React.ReactNode;
}

export const GridContainer = ({ children}: GridContainerProps) => {

  return <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>{children}</div>;
};
