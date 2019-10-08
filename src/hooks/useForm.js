import { useState, useEffect } from 'react';

const useForm = (onSubmit, initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      onSubmit();
      setIsSubmitting(false);
    }
  }, [isSubmitting, onSubmit]);

  const handleSubmit = async event => {
    if (event) event.preventDefault();
    setIsSubmitting(true);
  };

  const handleChange = (name, value) => {
    setValues(values => ({
      ...values,
      [name]: value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
