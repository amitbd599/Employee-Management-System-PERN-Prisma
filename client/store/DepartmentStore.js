import axios from "axios";
import { create } from "zustand";
import { ErrorToast, SuccessToast } from "../src/helper/helper";

const DepartmentStore = create((set) => ({
  loadingRequest: false,

  // create-department
  createDepartmentRequest: async (reqBody) => {
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

  // get-all-department
  allDepartments: null,
  getAllDepartmentsRequest: async () => {
    try {
      const res = await axios.get("/api/get-all-department");
      if (res?.data?.success === true) {
        set({ allDepartments: res?.data?.allDepartment });
      } else {
        ErrorToast(res?.data?.message);
        return [];
      }
    } catch (e) {
      ErrorToast("Something went wrong!");
      console.log(e);
    }
  },

  // delete-single-department
  deleteDepartmentRequest: async (id) => {
    try {
      const res = await axios.delete(`/api/delete-single-department/${id}`);
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

  // get-single-department
  singleDepartment: null,
  getSingleDepartmentRequest: async (id) => {
    try {
      const res = await axios.get(`/api/get-single-department/${id}`);
      if (res?.data?.success === true) {
        set({ singleDepartment: res?.data?.department });
      } else {
        ErrorToast(res?.data?.message);
      }
    } catch (e) {
      ErrorToast("Something went wrong!");
      console.log(e);
    }
  },

  // update-single-department
  updateDepartmentRequest: async (reqBody, id) => {
    try {
      set({ loadingRequest: true });
      const res = await axios.put(
        `/api/update-single-department/${id}`,
        reqBody
      );
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

export default DepartmentStore;
