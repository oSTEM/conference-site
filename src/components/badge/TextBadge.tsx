import styles from './TextBadge.module.css';

export const TextBadge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`${styles['TextBadge']} transition border ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  );
};
