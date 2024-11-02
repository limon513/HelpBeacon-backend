function isValidPhone(number) {
  const bangladeshPhoneRegex = /^(?:\+8801|8801|01)(3|4|5|6|7|8|9)\d{8}$/;
  return bangladeshPhoneRegex.test(number);
}

function isValidBloodGroup(data) {
  const bloodGroupRegex = /^(A|B|AB|O)[+-]$/;
  const bloodGroup = data.trim().toUpperCase();
  return bloodGroupRegex.test(bloodGroup);
}

function isValidPassword(password) {
  const passwordRegex = /^[\S]{8,}$/;
  return passwordRegex.test(password);
}

function isValidLocation({ latitude, longitude }) {
  if (
    +latitude < -90 ||
    +latitude > 90 ||
    +longitude < -180 ||
    +longitude > 180
  )
    return false;
  return true;
}

module.exports = {
  isValidPhone,
  isValidBloodGroup,
  isValidPassword,
  isValidLocation,
};
