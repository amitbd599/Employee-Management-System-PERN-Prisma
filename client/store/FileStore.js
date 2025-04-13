import axios from "axios";
import { create } from "zustand";
import { ErrorToast, SuccessToast } from "../src/helper/helper";

const FileStore = create((set) => ({
  files: null,
  getAllFileRequest: async () => {
    try {
      let res = await axios.get("/api/get-all-file");
      if (res?.data?.success === true) {
        set({ files: res?.data?.files });
      } else {
        set({ files: null });
        ErrorToast(res?.data?.message);
      }
    } catch (e) {
      set({ files: null });
      ErrorToast("Something went wrong!");
      console.log(e);
    }
  },

  uploadFileRequest: async (file) => {
    try {
      let formData = new FormData();
      formData.append("file", file);
      let res = await axios.post("/api/file-upload", formData);
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
      return false;
    }
  },

  deleteFileRequest: async (id) => {
    try {
      let res = await axios.delete(`/api/delete-file/${id}`);
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
      return false;
    }
  },
}));

export default FileStore;
