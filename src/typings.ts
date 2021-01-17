export type ExcludeProperties<T, E> = Pick<T, Exclude<keyof T, E>>;
