import axios from "axios";
import { create } from "zustand";
import { ErrorToast, SuccessToast } from "../src/helper/helper";

const DepartmentStore = create((set) => ({
  loadingRequest: false,

  // create-department
  createDepartment: async (reqBody) => {
    try {
      set({ loadingRequest: true });
      const res = await axios.post("/api/create-department", reqBody);
      if (res?.data?.success === true) {
        set({ loadingRequest: false });
        SuccessToast(res?.data?.message);
        return true;
      } else {
        set({ loadingRequest: false });
        ErrorToast(res?.data?.message);
        return false;
      }
    } catch (e) {
      ErrorToast("Something went wrong!");
      set({ loadingRequest: false });
      console.log(e);
    }
  },
}));

export default DepartmentStore;
