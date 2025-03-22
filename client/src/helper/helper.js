import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import moment from "moment";
import UserStore from "../../store/UserStore";
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

  formatDate(date) {
    const formattedDate = moment(date).format("DD-MM-YYYY");
    return formattedDate;
  }

  DeleteAlert() {
    return MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        return true;
      } else {
        return false;
      }
    });
  }
}

export const { IsEmpty, ErrorToast, SuccessToast, formatDate, DeleteAlert } =
  new FormHelper();
