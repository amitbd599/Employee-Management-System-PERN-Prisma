import { Spinner } from "@material-tailwind/react";
const SubmitButton = ({ submitFun, text, isSubmitting }) => {
  return (
    <>
      {isSubmitting ? (
        <button
          type='submit'
          disabled
          className='px-[26px] flex gap-2 items-center cursor-wait  py-[12px] rounded bg-[#487FFF] text-white hover:bg-blue-600 focus:outline-none transition'
        >
          <Spinner />
          Processing
        </button>
      ) : (
        <button
          onClick={submitFun}
          type='submit'
          className='px-[26px]  py-[12px] rounded bg-[#487FFF] text-white hover:bg-blue-600 focus:outline-none transition'
        >
          {text}
        </button>
      )}
    </>
  );
};

export default SubmitButton;
