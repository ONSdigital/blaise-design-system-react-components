import { ReactElement } from "react";
export interface Props {
    text: string;
    link: string;
    ariaLabel?: string;
    id?: string;
}
declare function ExternalLink(props: Props): ReactElement;
export default ExternalLink;
