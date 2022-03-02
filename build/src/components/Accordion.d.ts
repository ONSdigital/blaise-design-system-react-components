import { ReactElement } from "react";
export declare type ExpandableContent = {
    content: ReactElement;
    title: string;
};
export interface ExpandableProps extends ExpandableContent {
    id: number;
    panelsOpen: boolean[];
    setPanelsOpen: (panelsOpen: boolean[]) => void;
}
interface AccordionProps {
    ShowAllEnabled?: boolean;
    Expandables: ExpandableContent[];
}
export default function Accordion({ ShowAllEnabled, Expandables }: AccordionProps): ReactElement;
export {};
