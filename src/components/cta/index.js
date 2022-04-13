import MailchimpSubscribe from "react-mailchimp-subscribe";

import CustomForm from "./customForm";

/* 
 REMEMBER:
 WELCOMING NEW SUBSCRIPTION NEEDS A PAID MAILCHIM PLAN
 
 Contacts are added when
 Signs up

  You'll need:
  A paid Mailchimp plan, an Audience

  Journey objective:
  Nurture relationships
*/

export default function Cta() {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL; 
  return (
    <section className="text-gray-600 body-font" id="cta">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4">
            Want product news and updates?
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-indigo-600">
            {`Sign up to our newsletter to stay up to date.`}
          </p>
        </div>
        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={(props) => {
            const { subscribe, status, message } = props || {};
            return (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            );
          }}
        />
      </div>
    </section>
  );
}
