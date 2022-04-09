import React from 'react'
import formStyles from './formStyles.module.css'
import { useFormik } from 'formik'

export default function ContactForm() {
  console.log(formStyles.input);
    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
      <form className={formStyles.form} onSubmit={formik.handleSubmit}>
        <div className={formStyles.inputsWrapper}>
          <div className={formStyles.formColumn}>
            <div className={formStyles.inputLabelWrapper}>
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className={formStyles.input}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className={formStyles.inputLabelWrapper}>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={formStyles.input}
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className={formStyles.inputLabelWrapper}>
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="text"
                className={formStyles.input}
                onChange={formik.handleChange}
                value={formik.values.phone}
                />
            </div>
          </div>
          <div className={formStyles.formColumn}>
            <div className={formStyles.inputLabelWrapper}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                type="text"
                className={`${formStyles.input} ${formStyles.textarea}`}
                onChange={formik.handleChange}
                value={formik.values.message}
              />
            </div>
          </div>
        </div>
        <button className={formStyles.submitButton} type="submit">Send message</button>
      </form>
    );
  }
