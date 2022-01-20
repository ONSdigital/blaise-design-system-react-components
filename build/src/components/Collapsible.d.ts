import { ReactElement } from 'react';
export interface Props {
    /**
     * Render any standard HTML (or other React components) within the Collapsible
     */
    children: ReactElement;
    title: string;
}
declare function Collapsible({ children, title }: Props): JSX.Element;
export default Collapsible;
