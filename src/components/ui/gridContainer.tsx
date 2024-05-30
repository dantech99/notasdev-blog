interface GridContainerProps {
  children: React.ReactNode;
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}

export const GridContainer = ({ children, cols = {} }: GridContainerProps) => {
  const { sm = 1, md = 2, lg = 3, xl = 4 } = cols;

  const className = `grid grid-cols-${sm} md:grid-cols-${md} lg:grid-cols-${lg} xl:grid-cols-${xl} gap-10`;

  return <div className={className}>{children}</div>;
};
