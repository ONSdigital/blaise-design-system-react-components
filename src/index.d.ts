import React = require("react");
import {ReactElement} from "react";
import {Props as HeaderProps} from "./components/Header"
import {Props as ExternalLinkProps} from "./components/ExternalLink"
import {Props as ButtonProps} from "./components/ONSButton"
import {Props as PanelProps} from "./components/ONSPanel"
import {Props as ONSPasswordInputProps} from "./components/ONSPasswordInput";
import {Props as ONSSelectProps} from "./components/ONSSelect";
import {Props as ONSTextInputProps} from "./components/ONSTextInput";
import {Props as UploadProps} from "./components/ONSUpload"
import {StyledFormProps, FormField} from "./components/forms/StyledForm";


declare module "blaise-design-system-react-components" {
    export function NotProductionWarning(): ReactElement

    export function Footer(): ReactElement

    export function Header(props: HeaderProps): ReactElement<HeaderProps>

    export function BetaBanner(): ReactElement

    export function ExternalLink(props: ExternalLinkProps): ReactElement<ExternalLinkProps>

    export function ONSErrorPanel(): ReactElement

    export function ONSButton(props: ButtonProps): ReactElement<ButtonProps>

    export function ONSPanel(props: PanelProps): ReactElement<PanelProps>

    export function ONSPasswordInput(props: ONSPasswordInputProps): ReactElement<ONSPasswordInputProps>

    export function ONSSelect(props: ONSSelectProps): ReactElement<ONSSelectProps>

    export function ONSTextInput(props: ONSTextInputProps): ReactElement<ONSTextInputProps>

    export function ONSUpload(props: UploadProps): ReactElement<UploadProps>

    export function StyledForm(props: StyledFormProps): ReactElement<StyledFormProps>
}