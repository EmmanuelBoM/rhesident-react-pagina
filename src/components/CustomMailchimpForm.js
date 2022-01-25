import React, { Component } from "react";
import { render } from "react-dom";
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from "./CustomForm";


function CustomMailchimpForm() {
    const url ="https://gmail.us20.list-manage.com/subscribe/post?u=c64d240e450177166311e8a00&amp;id=33257d1f19";
    return (
    <div>
        <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
            <CustomForm
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
