import React, { Component } from "react";
import { render } from "react-dom";
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from "./CustomForm";
import CustomFormFooter from "./CustomFormFooter";

function CustomMailchimpForm(props) {
    const url =
      "https://rhesident.us14.list-manage.com/subscribe/post?u=7bd1fc1e8d1b21fa36dd77455&amp;id=0972078ecd";
    return (
    <div>
        <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
            props.variacion =='normal' ?
            <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />

            :

            <CustomFormFooter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />

        )}
        />
    </div>
    );
}

export default CustomMailchimpForm;
