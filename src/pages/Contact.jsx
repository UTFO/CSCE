import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import './Contact.css';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required('We need to know where to send our reply.'),
  name: yup.string().required('We need to know who to address our reply to.'),
  subject: yup.string(),
  message: yup
    .string()
    .required('There is a 100 character requirement.')
    .min(100, 'Message must be at least 100 characters long.'),
});

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    // Send a POST request to FormSubmit
    console.log(data);
    const response = await fetch(
      'https://formsubmit.co/ajax/jennifer.sunny@mail.utoronto.ca',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      // The form was successfully submitted to FormSubmit
      console.log('Form was successfully submitted!');
      // Convert the response to JSON and print the response data to the console
      const responseData = await response.json();
      console.log(responseData);

      //reset form fields
      reset();
    } else {
      // There was an error submitting the form to FormSubmit
      console.log('Error submitting form:', response.status);
    }
  };

  return (
    <div className="backdrop contact">
      <Row className="page-content">
        <Col className="text-white" lg={6}>
          <Container>
            <Row>
              <Col>
                <h2>Connect with Us!</h2>
                <p>
                  As part of our engineering community, we value your input.
                  Here are some reasons you might want to reach out:
                </p>
                <ul>
                  <li>
                    <strong>Interested in Membership:</strong> Want to join? We
                    can provide details.
                  </li>
                  <li>
                    <strong>Seeking Event Information:</strong> We can update
                    you on upcoming events.
                  </li>
                  <li>
                    <strong>Needing Assistance:</strong> Our team is ready to
                    help members.
                  </li>
                  <li>
                    <strong>Sharing Feedback or Ideas:</strong> We welcome your
                    suggestions.
                  </li>
                  <li>
                    <strong>General Inquiries:</strong> Feel free to ask any
                    other questions.
                  </li>
                </ul>
                <p>
                  Please fill out the form with your details and your message.
                  We will aim to respond within 2-3 business days. In the mean
                  time please follow our Instagram and Facebook pages linked
                  below!
                </p>
                <p>Thank you for reaching out.</p>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col lg={6}>
          <Container className="bg-light rounded p-4 shadow-lg">
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
              <Row className="mb-3">
                <Form.Group
                  as={Col}
                  lg={6}
                  controlId="formGridEmail"
                  className="mb-3 mb-lg-0"
                >
                  <Form.Label>
                    Email <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="example@mail.utoronto.ca"
                        isInvalid={errors.email}
                        {...field}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} lg={6} controlId="formGridName">
                  <Form.Label>
                    Name <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Chris Yip"
                        isInvalid={errors.name}
                        {...field}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridSubject">
                  <Form.Label>Subject</Form.Label>
                  <Controller
                    name="subject"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Form.Control
                        type="text"
                        name="_subject"
                        placeholder="What's your message about?"
                        {...field}
                      />
                    )}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridMessage">
                  <Form.Label>
                    Message <span style={{ color: 'red' }}>*</span>
                  </Form.Label>
                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <Form.Control
                        as="textarea"
                        name="message"
                        rows={10}
                        placeholder="Give us some details"
                        isInvalid={errors.message}
                        {...field}
                      />
                    )}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Button variant="success" type="submit">
                  Submit
                </Button>
              </Row>
              <Form.Text className="text-body-secondary">
                * If the form resets, your message has been successfully
                received!
              </Form.Text>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
