import * as yup from 'yup';

const validationPatternHelper = {
  default: yup.string().min(2).max(50).required('Field is required'),
};

export default validationPatternHelper;
