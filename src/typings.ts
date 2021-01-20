import { FlattenSimpleInterpolation } from 'styled-components';

export type ExcludeProperties<T, E> = Pick<T, Exclude<keyof T, E>>;

export type StyledComponentsCSS = FlattenSimpleInterpolation;
