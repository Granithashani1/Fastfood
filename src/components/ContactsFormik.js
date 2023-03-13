import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import "../img/ContactForm.css";

const ContactFormSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  age: Yup.number().required("Required").positive("Must be positive"),
  email: Yup.string().email("Invalid email").required("Required"),
  description: Yup.string().required("Required"),
});

const key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const ContactForm = () => {
  const recaptchaRef = React.createRef();

  const handleFormSubmit = (values, { resetForm }) => {
    console.log("Form submitted:", values);
    resetForm();
    recaptchaRef.current.reset();
  };

  const handleRecaptchaChange = (token) => {
    console.log("Recaptcha token:", token);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          age: "",
          email: "",
          description: "",
        }}
        validationSchema={ContactFormSchema}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="fname">
              <label htmlFor="firstname">First Name</label>
              <Field id="firstname" name="firstname" />
              {errors.firstname && touched.firstname ? (
                <div>{errors.firstname}</div>
              ) : null}
            </div>

            <div className="fname">
              <label htmlFor="lastname">Last Name</label>
              <Field id="lastname" name="lastname" />
              {errors.lastname && touched.lastname ? (
                <div>{errors.lastname}</div>
              ) : null}
            </div>

            <div className="age">
              <label htmlFor="age">Age</label>
              <Field id="age" name="age" type="number" className="fage" />
              {errors.age && touched.age ? <div>{errors.age}</div> : null}
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" className="femail" />
              {errors.email && touched.email ? (
                <div>{errors.email}</div>
              ) : null}
            </div>

            <div className="description">
                
              <label htmlFor="description" className="description">Description</label>
              <Field
                id="description"
                name="description"
                as="textarea"
                rows="4"
                             />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
            </div>

            <div className="fname">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={key}
                onChange={handleRecaptchaChange}
              />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
