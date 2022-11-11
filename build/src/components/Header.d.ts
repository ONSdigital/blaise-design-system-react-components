import { ReactElement } from "react";
export interface Props {
    title: string;
    signOutButton?: boolean;
    noSave?: boolean;
    signOutFunction?: () => void;
}
declare function Header({ title, signOutButton, noSave, signOutFunction, }: Props): ReactElement;
export default Header;
