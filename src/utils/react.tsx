export type As<BaseProps = any> = React.ElementType<BaseProps>;
export type PropsWithAs<
  ComponentType extends As,
  ComponentProps
> = ComponentProps &
  Omit<
    React.ComponentPropsWithRef<ComponentType>,
    "as" | keyof ComponentProps
  > & {
    as?: ComponentType;
  };
