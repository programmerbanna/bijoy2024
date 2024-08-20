"use client";
/** Global import block
 * required packages
 * React | Antd | Formik | Yup
 */
import { Button, Form, Input, Modal } from "antd";
import { Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";

/** Validation schema
 * using Yup for validation
 */
const SignupSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Fullname is too short!")
    .max(50, "Fullname is too long!")
    .required("Fullname is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  zipcode: Yup.string()
    .matches(/^\d{5}$/, "Zip code must be exactly 5 digits")
    .required("Zip code is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

/* -------------------------------------------------------------------------- */
/*                                signup module                               */
/* -------------------------------------------------------------------------- */
export default function Signup() {
  /* State declarations */
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    zipcode: "",
  });

  /* Modal close handler */
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-8">Signup</h1>

        <Formik
          initialValues={{
            fullname: "",
            email: "",
            zipcode: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            setFormData({
              fullname: values.fullname,
              email: values.email,
              zipcode: values.zipcode,
            });
            setIsModalVisible(true);
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <Form
              onFinish={handleSubmit}
              layout="vertical"
              className="w-full max-w-md"
            >
              {/* Fullname Field */}
              <Form.Item label="Fullname">
                <Field
                  name="fullname"
                  as={Input}
                  placeholder="Enter your fullname"
                />
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="text-red-500"
                />
              </Form.Item>

              {/* Email Field */}
              <Form.Item label="Email">
                <Field name="email" as={Input} placeholder="Enter your email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </Form.Item>

              {/* Zipcode Field */}
              <Form.Item label="Zip Code">
                <Field
                  name="zipcode"
                  as={Input}
                  placeholder="Enter your zip code"
                />
                <ErrorMessage
                  name="zipcode"
                  component="div"
                  className="text-red-500"
                />
              </Form.Item>

              {/* Password Field */}
              <Form.Item label="Password">
                <Field
                  name="password"
                  as={Input.Password}
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </Form.Item>

              {/* Confirm Password Field */}
              <Form.Item label="Confirm Password">
                <Field
                  name="confirmPassword"
                  as={Input.Password}
                  placeholder="Confirm your password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500"
                />
              </Form.Item>

              {/* Submit Button */}
              <Button
                type="primary"
                htmlType="submit"
                className="w-full"
                loading={isSubmitting}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
      {/* Modal to display submitted form data */}
      <Modal
        title="Signup Information"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="close" onClick={handleCloseModal}>
            Close
          </Button>,
        ]}
      >
        <p>
          <strong>Fullname:</strong> {formData.fullname}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Zip Code:</strong> {formData.zipcode}
        </p>
      </Modal>
    </>
  );
}
