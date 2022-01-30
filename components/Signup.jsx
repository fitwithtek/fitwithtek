import React from 'react';
import { Formik } from 'formik';
import schema from './schema';

const initial = {
  name: '',
  email: '',
  phone: '',
};

const onSubmit = (values) => {
  console.log('values is: ', values);
};

function Signup() {
  return (
    <div className="bg-red-200 flex flex-col h-full w-full">
      <Formik
        initialValues={initial}
        enableReinitialize
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          errors,
          touched,
        }) => (
          <form
            onSubmit={handleSubmit}
          >
            <label>
              Name
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                name="name"
                placeholder="Please enter your name"
                autoComplete={false}
                autoFocus
              />
              {touched?.name && errors?.name && <div>{errors?.name}</div>}
            </label>
            <label>
              Email
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                name="email"
                placeholder="Please enter your email"
                autoComplete={false}
                autoFocus
              />
              {touched?.email && errors?.email && <div>{errors?.email}</div>}
            </label>
            <label>
              Phone
              <input
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                name="phone"
                placeholder="Please enter your phone number"
                autoComplete="false"
                autoFocus
              />
              {touched?.phone && errors?.phone && <div>{errors?.phone}</div>}
            </label>
            <input type="submit" value="Submit" />
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
