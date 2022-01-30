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

const fields = {
  name: 'Name',
  email: 'Email',
  phone: 'Phone',
};

function Signup() {
  return (
    <div className="h-full w-full">
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
            className="flex flex-col py-4"
          >
            {Object.keys(fields).map((field) => (
              <label
                className="py-2 text-white text-lg flex flex-row"
                key={field}
              >
                <p className="w-12 flex items-center text-center">{fields[field]}</p>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name={field}
                  placeholder={`Please enter your ${field}`}
                  autoComplete="false"
                  autoFocus
                  className="ml-4 text-indigo-900 px-4"
                />
                <div className="text-red-700 h-8 flex items-center px-4">{(touched?.[field] && errors?.[field]) && <p>{errors?.[field]}</p>}</div>
              </label>
            ))}

            <input type="submit" value="Submit" className="text-white border border-white cursor-pointer w-[fit-content] px-4 py-2 self-start my-4" />
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Signup;
