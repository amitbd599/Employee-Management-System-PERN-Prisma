import axios from "axios";
import { create } from "zustand";
import { ErrorToast, SuccessToast } from "../src/helper/helper";

const RoleStore = create((set) => ({
  loadingRequest: false,

  // create-role
  createRoleRequest: async (reqBody) => {
    try {
      set({ loadingRequest: true });
      const res = await axios.post("/api/create-role", reqBody);
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

  // get-all-role
  allRoles: null,
  getAllRolesRequest: async () => {
    try {
      const res = await axios.get("/api/get-all-role");
      if (res?.data?.success === true) {
        set({ allRoles: res?.data?.allRole });
      } else {
        ErrorToast(res?.data?.message);
        return [];
      }
    } catch (e) {
      ErrorToast("Something went wrong!");
      console.log(e);
    }
  },

  // delete-single-role
  deleteRoleRequest: async (id) => {
    try {
      const res = await axios.delete(`/api/delete-single-role/${id}`);
      if (res?.data?.success === true) {
        SuccessToast(res?.data?.message);
        return true;
      } else {
        ErrorToast(res?.data?.message);
        return false;
      }
    } catch (e) {
      ErrorToast("Something went wrong!");
      console.log(e);
    }
  },

  // get-single-role
  singleRole: null,
  getSingleRoleRequest: async (id) => {
    try {
      const res = await axios.get(`/api/get-single-role/${id}`);
      if (res?.data?.success === true) {
        set({ singleRole: res?.data?.role });
      } else {
        ErrorToast(res?.data?.message);
      }
    } catch (e) {
      ErrorToast("Something went wrong!");
      console.log(e);
    }
  },

  // update-single-role
  updateRoleRequest: async (id, reqBody) => {
    try {
      set({ loadingRequest: true });
      const res = await axios.put(`/api/update-single-role/${id}`, reqBody);
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
    }
  },
}));

export default RoleStore;
