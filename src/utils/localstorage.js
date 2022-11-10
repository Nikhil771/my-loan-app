export function setAuthToken(authToken) {
  return localStorage.setItem("authToken", authToken);
}

export function getAuthToken() {
  return localStorage.getItem("authToken");
}

export function deleteAuthToken() {
  return localStorage.removeItem("authToken");
}

export function setPhone(phone) {
  return localStorage.setItem("phone", phone);
}

export function getPhone() {
  return localStorage.getItem("phone");
}

export function deletePhone() {
  return localStorage.removeItem("phone");
}
