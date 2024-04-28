export const PageHeader = ({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent?: string;
}) => {
  return (
    <div className={`mb-4 text-center`}>
      <p className='text-5xl font-display font-medium mb-4'>{children}</p>
      <hr className={`border-2 border-${accent} border-solid rounded`} />
    </div>
  );
};
