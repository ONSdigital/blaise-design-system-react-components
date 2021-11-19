import { ReactElement } from 'react';
export interface Props {
    children: ReactElement;
    title: string;
}
declare function Collapsible({ children, title }: Props): JSX.Element;
export default Collapsible;
