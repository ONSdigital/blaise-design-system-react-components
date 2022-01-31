import React, { ReactElement } from "react";
import { ONSPanel, StyledForm } from "blaise-design-system-react-components";
import { Component } from "react";
import { getUser, validatePassword } from "blaise-login-react";

export function LoginPage(token: any, setToken: (token: any) => void): ReactElement {
  if (token) {
    return <></>
  }
  return <LoginForm setToken={setToken} />
}

type LoginFormProps = {
  setToken: (token: any) => void
}

type LoginFormState = {
  error: string
}

export default class LoginForm extends Component<LoginFormProps, LoginFormState> {
  constructor(props: LoginFormProps) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      error: ""
    };
  }

  formFields(): any {
    return [
      {
        name: "Username",
        id: "username",
        description: "Your Blaise username",
        type: "username",
      },
      {
        name: "Password",
        description: "Your Blaise password",
        type: "password",
      }
    ];
  }

  async login(form: Record<string, string>, setSubmitting: (isSubmitting: boolean) => void): Promise<void> {
    const valid = await validatePassword(form.Username, form.Password);
    if (!valid) {
      this.setState({
        error: "Incorrect username or password"
      });
      setSubmitting(false);
      return;
    }
    const user = await getUser(form.Username);
    if (user.role !== "DST") {
      this.setState({
        error: "You do not have the correct permissions, please try again"
      });
      setSubmitting(false);
      return;
    }
    this.props.setToken(user);
  }

  error(): ReactElement | undefined {
    if (this.state.error != "") {
      return <ONSPanel status="error">{this.state.error}</ONSPanel>;
    }
    return undefined;
  }

  render(): ReactElement {
    return (
      <>
        <h1 className="u-mt-m">Sign in</h1>
        {this.error()}
        <StyledForm fields={this.formFields()} onSubmitFunction={this.login} submitLabel="Sign in" />
      </>
    );
  }
}
