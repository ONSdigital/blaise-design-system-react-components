// TODO: Remove `as ONS*` aliases when all consumers have migrated to new names
import { NotProductionWarning } from "./components/NotProductionWarning";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BetaBanner } from "./components/BetaBanner";
import { ExternalLink } from "./components/ExternalLink";
import { ErrorPanel as ONSErrorPanel } from "./components/ErrorPanel";
import { Button as ONSButton } from "./components/Button";
import { Panel as ONSPanel } from "./components/Panel";
import { PasswordInput as ONSPasswordInput } from "./components/PasswordInput";
import { Select as ONSSelect } from "./components/Select";
import { TextInput as ONSTextInput } from "./components/TextInput";
import { Upload as ONSUpload } from "./components/Upload";
import { LoadingPanel as ONSLoadingPanel } from "./components/LoadingPanel";
import { Collapsible } from "./components/Collapsible";
import { ErrorBoundary } from "./components/error-handling/ErrorBoundary";
import { DefaultErrorBoundary } from "./components/error-handling/DefaultErrorBoundary";
import { Table as ONSTable } from "./components/Table";
import { SummaryItemRow, SummaryGroupTable, GroupedSummary, Group } from "./components/Summary";
import { FormatTitle, TitleCase } from "./utilities/text-formatting";
import { Accordion } from "./components/Accordion";
import { StyledForm, FormFieldObject } from "./components/forms/StyledForm";
import { StyledFormErrorSummary } from "./components/forms/StyledFormErrorSummary";
import { StyledFormField } from "./components/forms/form-elements/StyledFormFields";

export type { Group, FormFieldObject };

export {
    NotProductionWarning,
    Footer,
    Header,
    BetaBanner,
    ExternalLink,
    ONSErrorPanel,
    ONSButton,
    ONSPanel,
    ONSLoadingPanel,
    ONSUpload,
    ONSSelect,
    ONSPasswordInput,
    ONSTextInput,
    ONSTable,
    Collapsible,
    ErrorBoundary,
    DefaultErrorBoundary,
    SummaryItemRow,
    SummaryGroupTable,
    GroupedSummary,
    FormatTitle,
    TitleCase,
    Accordion,
    StyledForm,
    StyledFormErrorSummary,
    StyledFormField,
};
