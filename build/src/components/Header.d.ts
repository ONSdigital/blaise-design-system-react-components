import { ReactElement, ReactNode } from "react";
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
    currentLocation?: string;
    createLink: (label: string, endpoint: string) => ReactNode;
}
declare function Header({ title, signOutButton, noSave, signOutFunction, navigationLinks, currentLocation, createLink }: Props): ReactElement;
export default Header;
