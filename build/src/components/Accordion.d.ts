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
}
export default function Accordion({ ShowAllEnabled, Expandables, ContentId }: AccordionProps): ReactElement;
export {};
