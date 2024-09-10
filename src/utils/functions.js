import { myBus } from "./eventBus";

export const MyError = (error) => {
  let ErrorMessage = "Something went wrong!";

  if (error) {
    if (error.response && error.response.data && error.response.data.message) {
      ErrorMessage = error.response.data.message;
    } else {
      ErrorMessage = error.message || ErrorMessage;
    }
  }

  // Emit the error message using myBus
  myBus.emit("toast", {
    type: "Error",
    message: ErrorMessage,
  });

  return ErrorMessage;
};

export const MySuccess = (payload) => {
  let SuccessMessage = "Success";

  if (payload) {
    if (
      payload.response &&
      payload.response.data &&
      payload.response.data.message
    ) {
      SuccessMessage = payload.response.data.message;
    } else {
      SuccessMessage = payload.message || SuccessMessage;
    }
  }

  // Emit the success message using myBus
  myBus.emit("toast", {
    type: "Success",
    message: SuccessMessage,
  });

  return SuccessMessage;
};
