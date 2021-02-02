import React = require("react");
import {ReactElement} from "react";
import NotProductionWarning from "./NotProductionWarning"
import Footer from "./Footer"
import {Props as HeaderProps}  from "./Header"

declare module "blaise-design-system-react-components" {
    // declare function NotProductionWarning  React.ReactElement<{ }, { }>;
    // declare function Footer React.ReactElement<{ }, { }>;

    export function NotProductionWarning(): ReactElement
    export function Footer(): ReactElement
    export function Header(props: HeaderProps): ReactElement<HeaderProps>

}
// declare namespace NotProductionWarning {
//
// }
//
// declare namespace Footer {
//
// }
//
// module Organization {
//     export class Employee {
//         constructor(public name: string, public Id: string, public department: Department) {
//         }
//     }
//
//     export class Department {
//         constructor(public DepartmentName: string) {
//         }
//     }
// }