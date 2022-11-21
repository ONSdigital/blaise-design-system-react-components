export interface Props {
    hidden?: boolean;
    message?: string;
}
/**
 * This is a Standard Panel with an info status, with a loading spinner and "Loading" message.
 * Uses [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) for the loading spinner.
 */
export declare const ONSLoadingPanel: ({ hidden, message }: Props) => JSX.Element;
