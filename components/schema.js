import * as Yup from 'yup';

const schema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
});

export default schema;
