import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {} from '../img/Carouselstyle.css';
import { Formik } from 'formik';

const Loginform = () => {
  return (
    <>
    <Formik initialValues={{ email: '', password: '' }} validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
   >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (




    <Container className='loginform'>
      <img src='https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg'  alt='hello' className='img1'/>
      <Form className='login' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleChange} onBlur={handleBlur} value={values.email}/>
        {errors.email && touched.email }
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='password' onChange={handleChange} onBlur={handleBlur} value={values.password}/>
        {errors.password && touched.password && errors.password}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember" />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isSubmitting}>
        Submit
      </Button>
      
    </Form>
      
    </Container>
    
    )}
    </Formik>
    </>
  )
  
}

export default Loginform
