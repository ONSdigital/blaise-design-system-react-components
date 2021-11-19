import { ReactElement } from "react";
export interface Props {
    title: string;
    signOutButton?: boolean;
    signOutFunction?: () => void;
}
declare function Header({ title, signOutButton, signOutFunction }: Props): ReactElement;
export default Header;
