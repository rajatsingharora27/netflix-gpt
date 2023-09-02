export function validateFileds(filedsObj, isSignInForm) {
  var err = {};
  if (!isSignInForm) {
    if (filedsObj?.fullName?.trim() === "") {
      // err["fullName"] = "Full Name is a Required Field";
      return "Full Name is a Required Field";
    }
  }
  if (filedsObj?.email?.trim() === "") {
    // err["emai"] = "Email is Required";
    return "Email is Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(filedsObj.email.trim())
  ) {
    // err.email = "Incorrect Email Id Format";
    return "Incorrect Email Id Format";
  }

  if (filedsObj?.password?.trim() === "") {
    // err.password = "Passord is Reuired";
    return "Passord is Required";
  }
  // return err;
}
