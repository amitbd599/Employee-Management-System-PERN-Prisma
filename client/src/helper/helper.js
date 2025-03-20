import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

class FormHelper {
  IsEmpty(value) {
    return value.length === 0;
  }

  ErrorToast(msg) {
    toast.error(msg, {
      position: "bottom-right",
    });
  }
  SuccessToast(msg) {
    toast.success(msg, {
      position: "bottom-right",
    });
  }

  DeleteAlert(apiFun, id) {
    return MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      // icon: "warning",
      iconHtml: '<i class="ri-error-warning-line icon__inner"></i>',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        return apiFun(id).then((result) => {
          return result;
        });
      }
    });
  }
}

export const { IsEmpty, ErrorToast, SuccessToast, DeleteAlert } =
  new FormHelper();
