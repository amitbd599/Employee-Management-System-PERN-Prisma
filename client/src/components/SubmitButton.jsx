import { Spinner } from "@material-tailwind/react";
const SubmitButton = ({ text, isSubmitting }) => {
  return (
    <div>
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
          type='submit'
          className='px-[26px]  py-[12px] rounded bg-[#487FFF] text-white hover:bg-blue-600 focus:outline-none transition'
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default SubmitButton;
