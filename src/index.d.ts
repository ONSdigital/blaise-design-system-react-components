import React = require("react");
import {ReactElement} from "react";

declare module "blaise-design-system-react-components" {
    declare function NotProductionWarning  React.ReactElement<{ }, { }>;
    declare function Footer React.ReactElement<{ }, { }>;
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