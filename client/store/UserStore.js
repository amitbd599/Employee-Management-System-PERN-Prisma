import axios from "axios";
import { create } from "zustand";
import { ErrorToast, SuccessToast } from "../src/helper/helper";

const UserStore = create((set) => ({
  loadingRequest: false,
  createUserRequest: async (reqBody) => {
    try {
      set({ loadingRequest: true });
      let res = await axios.post("api/create-user", reqBody);
      console.log(res);

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
      set({ loadingRequest: false });
      ErrorToast("Something went wrong!");
      console.log(e);
      return false;
    } finally {
      // Reset loading state on request completion
      set({ loadingRequest: false });
    }
  },
}));

export default UserStore;
