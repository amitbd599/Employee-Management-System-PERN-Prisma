import axios from "axios";
import { create } from "zustand";
import { ErrorToast, SuccessToast } from "../src/helper/helper";

const EmployeeStore = create((set) => ({
  loadingRequest: false,

  // create-employee
  createEmployeeRequest: async (reqBody) => {
    try {
      set({ loadingRequest: true });
      const res = await axios.post("/api/create-employee", reqBody);
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

  // get-all-employee
  allEmployees: null,
  getAllEmployeesRequest: async () => {
    try {
      const res = await axios.get("/api/get-all-employee");
      if (res?.data?.success === true) {
        set({ allEmployees: res?.data?.allEmployee });
      } else {
        ErrorToast(res?.data?.message);
        return [];
      }
    } catch (e) {
      ErrorToast("Something went wrong!");
      console.log(e);
    }
  },

  // delete-single-employee
  deleteEmployeeRequest: async (id) => {
    try {
      const res = await axios.delete(`/api/delete-single-employee/${id}`);
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

  // get-single-employee
  singleEmployee: null,
  getSingleEmployeeRequest: async (id) => {
    try {
      const res = await axios.get(`/api/get-single-employee/${id}`);
      if (res?.data?.success === true) {
        set({ singleEmployee: res?.data?.employee });
      } else {
        ErrorToast(res?.data?.message);
      }
    } catch (e) {
      ErrorToast("Something went wrong!");
      console.log(e);
    }
  },

  // update-single-employee
  updateEmployeeRequest: async (id, reqBody) => {
    try {
      set({ loadingRequest: true });
      const res = await axios.put(`/api/update-single-employee/${id}`, reqBody);
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

export default EmployeeStore;
