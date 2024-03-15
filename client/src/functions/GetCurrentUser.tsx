import axios from "axios";

async function GetCurrentUser(token: string) {
  try {
    const res = await axios.post("/api/auth/getcurrentuser", {
      token: token,
    });
    if (res.data.userData) {
      return res.data.userData;
    } else {
      return false;
    }
  } catch (error: any) {
    console.log(error);
    return false;
  }
}

export default GetCurrentUser