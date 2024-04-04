function OTPgen(size) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";
  let OTP = "";
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    OTP += charset[randomIndex];
  }
  return OTP;
}

export default OTPgen;
