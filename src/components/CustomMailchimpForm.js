import React, { Component } from "react";
import { render } from "react-dom";
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from "./CustomForm";
import CustomFormFooter from "./CustomFormFooter";

function CustomMailchimpForm(props) {
    const url =
      "https://instagram.us1.list-manage.com/subscribe/post?u=eb3957c6906f8e323e58a2e95&amp;id=ef1cf9ce0e";
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
