import Swal from "sweetalert2";

export const successAlert = (title: string, text?: string) => {
    return Swal.fire({
        icon: "success",
        title,
        text,confirmButtonText: "Oke",
        confirmButtonColor: "#25b647",
    })
}

export const errorAlert = (title: string, text?: string) => {
    return Swal.fire({
        icon: "error",
        title,
        text,
        confirmButtonText: "Close",
        confirmButtonColor: "#ff5a3c",
    })
}

export const warningAlert = (title: string, text?: string) => {
    return Swal.fire({
        icon: "warning",
        title,
        text,
        confirmButtonText: "Close",
        confirmButtonColor: "#ff5a3c"
    })
}

export const confirmAlert = (title: string,text?: string) => {
  return Swal.fire({
    icon: "question",
    title,
    text,
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#25b647",
    cancelButtonColor: "#ff5a3c",
  });
};