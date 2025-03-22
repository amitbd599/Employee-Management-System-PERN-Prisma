import { Option, Select } from "@material-tailwind/react";
import { useRef, useState } from "react";
import UserStore from "../../store/UserStore";
import SubmitButton from "./SubmitButton";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { FaTrashCan } from "react-icons/fa6";
import FileStore from "../../store/FileStore";
import { DeleteAlert, ErrorToast, IsEmpty } from "../helper/helper";
const CreateUser = () => {
  const [role, setRole] = useState("EMPLOYEE");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const [selectImage, setSelectImage] = useState("");
  const [file, setFile] = useState(null);
  let navigate = useNavigate();
  let { createUserRequest, loadingRequest } = UserStore();
  let { nameRef, passwordRef, emailRef } = useRef();
  let { getAllFileRequest, files, uploadFileRequest, deleteFileRequest } =
    FileStore();
  let openModal = async () => {
    setIsOpen(true);
    await getAllFileRequest();
  };

  let closeModal = () => {
    setIsOpen(false);
  };

  const handleImagePreview = (event) => {
    const file = event.target.files[0];
    setFile(file);
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    let result = await uploadFileRequest(file);
    if (result) {
      await getAllFileRequest();
      setImage(null);
    }
  };

  let deleteFile = async (id) => {
    let isConfirmed = await DeleteAlert();

    if (isConfirmed) {
      let result = await deleteFileRequest(id);
      if (result) {
        await getAllFileRequest();
      }
    }
  };

  let submitCreateUser = async () => {
    console.log("Creating user...");

    let name = nameRef.value;
    let password = passwordRef.value;
    let email = emailRef.value;
    let img = selectImage;

    if (IsEmpty(name)) {
      ErrorToast("Name is required. ");
      return;
    } else if (IsEmpty(password)) {
      ErrorToast("Password is required. ");
      return;
    } else if (IsEmpty(email)) {
      ErrorToast("Email is required. ");
      return;
    } else if (IsEmpty(role)) {
      ErrorToast("Role is required. ");
      return;
    } else if (IsEmpty(img)) {
      ErrorToast("Image is required. ");
      return;
    } else {
      console.log(name, password, email, role, img);

      let result = await createUserRequest({
        name,
        password,
        email,
        role,
        img,
      });
      if (result) {
        navigate("/get-all-user");
      }
    }
  };

  return (
    <section>
      <>
        {/* component */}
        <div className='bg-white  shadow-md rounded-lg p-6'>
          <h1 className='text-[26px] font-semibold mb-4 text-gray-900 '>
            Create a new user
          </h1>

          <div className='grid grid-cols-12 gap-[30px]'>
            <div className='col-span-6 mb-4'>
              <div className='grid gap-2'>
                <div className='w-full grid gap-1'>
                  <label htmlFor='name' className='text-gray-600'>
                    Name:
                  </label>
                  <input
                    ref={(input) => (nameRef = input)}
                    id='name'
                    type='text'
                    className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                  />
                </div>
                <div className='w-full grid gap-1'>
                  <label htmlFor='email' className='text-gray-600'>
                    Email:
                  </label>
                  <input
                    ref={(input) => (emailRef = input)}
                    id='email'
                    type='email'
                    className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
                  />
                </div>
                <div className='w-full grid gap-1'>
                  <label htmlFor='password' className='text-gray-600'>
                    Password:
                  </label>
                  <input
                    ref={(input) => (passwordRef = input)}
                    id='password'
                    type='password'
                    className='border p-2 rounded w-full h-[40px] focus:outline-none text-gray-600'
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
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-6 mb-4'>
              <div
                onClick={openModal}
                className='w-full bg-gray-200 cursor-pointer h-full flex justify-center items-center rounded-md'
              >
                {selectImage ? (
                  <div className='w-full h-[200px]'>
                    <img
                      src={`api/get-file/${selectImage}`}
                      alt='Uploaded Preview'
                      className='w-full h-full object-contain object-top '
                    />
                  </div>
                ) : (
                  <p className='text-[40px] font-medium'>Add media file</p>
                )}
              </div>
            </div>
          </div>

          <SubmitButton
            text='Create new user'
            type='submit'
            submitFun={submitCreateUser}
            isSubmitting={loadingRequest}
          />
        </div>
      </>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel='Example Modal'
      >
        <button
          onClick={closeModal}
          className='absolute right-[20px] top-[20px] bg-red-500 px-[16px] py-[6px] rounded-md text-white'
        >
          close
        </button>
        <div className=' z-[99]  mx-auto mt-[30px]'>
          <h3 className='font-semibold text-[20px]  pl-[20px]'>
            Total File: {files?.length}
          </h3>
          <div className='grid grid-cols-12 gap-4  bg-white p-[20px] '>
            <div className='col-span-9 border-r '>
              <div className='h-[calc(100vh-250px)] overflow-auto'>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-5  rounded-md '>
                  {files?.map(({ path, id }, index) => (
                    <div key={index} className='relative '>
                      <img
                        className='h-[160px] w-full border-[3px] shadow-md border-red-500 max-w-full rounded-lg object-contain object-top grayscale hover:grayscale-0 transition-all duration-300 hover:cursor-pointer'
                        src={`api/get-file/${path}`}
                        alt='gallery-photo'
                        onClick={() => {
                          setSelectImage(path);
                          closeModal();
                        }}
                      />
                      <button
                        onClick={() => deleteFile(id)}
                        className='absolute right-[10px] top-[10px] bg-red-500 p-[14px] rounded-full '
                      >
                        <FaTrashCan className='text-[20px] text-white' />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='col-span-3'>
              <div className='border border-gray-300 rounded-md p-[20px] sticky top-0'>
                <>
                  <div className='w-full px-3 mb-8'>
                    <label
                      className='mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-green-400 bg-white p-6 text-center'
                      htmlFor='dropzone-file'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-10 w-10 text-green-800'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokewidth={2}
                      >
                        <path
                          strokelinecap='round'
                          strokelinejoin='round'
                          d='M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12'
                        />
                      </svg>
                      <h2 className='mt-4 text-xl font-medium text-gray-700 tracking-wide'>
                        Category image
                      </h2>
                      <p className='mt-2 text-gray-500 tracking-wide'>
                        Upload or drag &amp; drop your file SVG, PNG, JPG or
                        GIF.{" "}
                      </p>
                      <input
                        id='dropzone-file'
                        type='file'
                        className='hidden'
                        name='category_image'
                        accept='image/*'
                        onChange={handleImagePreview}
                      />
                    </label>
                  </div>
                  {image && (
                    <div>
                      <div className='w-full h-[200px] overflow-hidden border border-red-500 rounded-md'>
                        <img
                          src={image}
                          alt='Uploaded Preview'
                          className='w-full h-full object-contain '
                        />
                      </div>

                      <div className='mt-[20px]'>
                        <button
                          className='px-[26px]  py-[10px] rounded bg-[#487FFF] text-white hover:bg-blue-600 focus:outline-none transition'
                          onClick={handleUpload}
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default CreateUser;
