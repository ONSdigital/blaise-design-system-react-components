import { ReactElement } from "react";
export type ExpandableContent = {
    content: ReactElement;
    contentId: string;
    title: string;
};
export interface ExpandableProps extends ExpandableContent {
    expandableIndex: number;
    panelsOpen: boolean[];
    setPanelsOpen: (panelsOpen: boolean[]) => void;
}
interface AccordionProps {
    ShowAllEnabled?: boolean;
    Expandables: ExpandableContent[];
    ContentId: string;
    Expanded?: boolean;
}
export default function Accordion({ ShowAllEnabled, Expandables, ContentId, Expanded, }: AccordionProps): ReactElement;
export {};
