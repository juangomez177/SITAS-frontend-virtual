
export const validatePassword = (password: string): boolean => {
  console.log("Esto valida el password del usuario");
  let valid = false;
  var exp = /^(?!\s)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%*?&])([A-Za-z\d#$@!%*?&]|[^ ]){8,25}$/;
  if (exp.test(password)) {
    valid = true;
  }
  return valid;
}
