import axios from "axios";
import { create } from "zustand";
import { ErrorToast, SuccessToast } from "../src/helper/helper";

const UserStore = create((set) => ({
  loadingRequest: false,

  loginUsersRequest: async (reqBody) => {
    try {
      set({ loadingRequest: true });
      let res = await axios.post("/api/login-user", reqBody);
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
      ErrorToast("Something went wrong!");
      // console.log(e);
      set({ loadingRequest: false });
    }
  },

  // get-single-user
  singleUser: null,
  singleUsersRequest: async (id) => {
    try {
      let res = await axios.get(`/api/get-single-user/${id}`);
      console.log(res);

      if (res?.data?.success === true) {
        set({ singleUser: res?.data?.user });
      } else {
        set({ singleUser: null });
        ErrorToast(res?.data?.message);
      }
    } catch (e) {
      set({ singleUser: null });
      ErrorToast("Something went wrong!");
      console.log(e);
    }
  },
}));

export default UserStore;
