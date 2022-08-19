import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { StyledForm } from './StyledForm';

import { useFormik } from 'formik';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 99) {
    errors.name = 'Must be 99 characters or less';
  }

  if (!values.price) {
    errors.price = 'Required';
  } else if (Number(values.price) <= 0) {
    errors.price = 'Must be more than zero';
  }

  if (!values.rooms) {
    errors.rooms = 'Required';
  } else if (Number(values.rooms) <= 0) {
    errors.rooms = 'Must be more than zero';
  }

  if (values.description.length > 999) {
    errors.description = 'Must be 999 characters or less';
  }

  return errors;
};

export const Form = ({ onSubmit }) => {
  const nameId = nanoid();
  const roomsId = nanoid();
  const priceId = nanoid();
  const descriptionId = nanoid();

  const formik = useFormik({
    initialValues: {
      name: '',
      rooms: '',
      price: '',
      description: '',
    },
    validate,
    onSubmit: values => {
      formik.resetForm();
      onSubmit(values);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor={nameId}>Apartment name</label>
        <input
          onChange={formik.handleChange}
          id={nameId}
          value={formik.values.name}
          type="text"
          name="name"
          required
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor={roomsId}>Number of rooms</label>
        <input
          onChange={formik.handleChange}
          id={roomsId}
          type="number"
          value={formik.values.rooms}
          name="rooms"
          required
          onBlur={formik.handleBlur}
        />
        {formik.touched.rooms && formik.errors.rooms ? (
          <div>{formik.errors.rooms}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor={priceId}>Price</label>
        <input
          onChange={formik.handleChange}
          id={priceId}
          type="number"
          value={formik.values.price}
          name="price"
          required
          onBlur={formik.handleBlur}
        />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor={descriptionId}>Description</label>
        <input
          onChange={formik.handleChange}
          id={descriptionId}
          type="text"
          value={formik.values.description}
          name="description"
          onBlur={formik.handleBlur}
        />
        {formik.touched.description && formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}
      </div>

      <button type="submit">Add apartment</button>
    </StyledForm>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
