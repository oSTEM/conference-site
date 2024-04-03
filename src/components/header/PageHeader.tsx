export const PageHeader = ({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent?: string;
}) => {
  return (
    <div
      className={`border-b-4 border-${accent} border-solid pb-4 mb-4 text-center`}
    >
      <p className='text-5xl font-display font-medium'>{children}</p>
    </div>
  );
};
