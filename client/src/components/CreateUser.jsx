import { Option, Select } from "@material-tailwind/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import UserStore from "../../store/UserStore";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [role, setRole] = useState("EMPLOYEE");
  let navigate = useNavigate();
  let { createUserRequest } = UserStore();
  return (
    <section>
      <>
        {/* component */}
        <div className='bg-white  shadow-md rounded-lg p-6'>
          <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
            Create a new user
          </h1>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            enableReinitialize={true}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              email: Yup.string().required("Required"),
              password: Yup.string()
                .min(8, "Minium password 8 characters")
                .required("Required"),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              values.role = role;
              let result = await createUserRequest(values);
              if (result) {
                setSubmitting(false);
                navigate("/get-all-user");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className='flex gap-[20px] mb-4'>
                  <div className='w-full grid gap-1'>
                    <label htmlFor='name' className='text-gray-600'>
                      Name:
                    </label>
                    <Field
                      id='name'
                      name='name'
                      type='text'
                      className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                    />
                    <ErrorMessage
                      name='name'
                      component='div'
                      className='error text-red-400'
                    />
                  </div>
                  <div className='w-full grid gap-1'>
                    <label htmlFor='email' className='text-gray-600'>
                      Email:
                    </label>
                    <Field
                      id='email'
                      name='email'
                      type='email'
                      className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                    />
                    <ErrorMessage
                      name='email'
                      component='div'
                      className='error text-red-400'
                    />
                  </div>
                </div>
                <div className='flex gap-[20px] mb-4'>
                  <div className='w-full grid gap-1'>
                    <label htmlFor='password' className='text-gray-600'>
                      Password:
                    </label>
                    <Field
                      id='password'
                      name='password'
                      type='password'
                      className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                    />
                    <ErrorMessage
                      name='password'
                      component='div'
                      className='error text-red-400'
                    />
                  </div>
                  <div className=' w-full'>
                    <div className='w-full grid gap-1'>
                      <label htmlFor='role' className='text-gray-600'>
                        Role:
                      </label>
                      <Select
                        label='Select Version'
                        value={role}
                        onChange={(val) => setRole(val)}
                        className='border p-2 rounded w-full'
                      >
                        <Option value='ADMIN'>ADMIN</Option>
                        <Option value='USER'>USER</Option>
                        <Option value='MANAGER'>MANAGER</Option>
                        <Option value='EMPLOYEE'>EMPLOYEE</Option>
                        <Option value='SUPERVISOR'>SUPERVISOR</Option>
                        <Option value='DEVELOPER'>DEVELOPER</Option>
                      </Select>
                      <ErrorMessage
                        name='color'
                        component='div'
                        className='error text-red-400'
                      />
                    </div>
                  </div>
                </div>

                <SubmitButton
                  text='Create new user'
                  type='submit'
                  isSubmitting={isSubmitting}
                />
              </Form>
            )}
          </Formik>
        </div>
      </>
    </section>
  );
};

export default CreateUser;
