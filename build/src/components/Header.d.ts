import { ReactElement } from "react";
export interface NavigationLinks {
    label: string;
    endpoint: string;
}
export interface Props {
    title: string;
    signOutButton?: boolean;
    noSave?: boolean;
    signOutFunction?: () => void;
    navigationLinks?: NavigationLinks[];
}
declare function Header({ title, signOutButton, noSave, signOutFunction, navigationLinks, }: Props): ReactElement;
export default Header;
