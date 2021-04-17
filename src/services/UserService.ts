import { db } from "../firebase";
import AxiosInstance from "./utils/AxiosInstance";

export interface IUserPresentedData {
  fullName: string;
  email: string;
}

export class UserService {
  static async getCurrentUser(uid: string) {
    var docRef = db.collection("users").doc(uid);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          return doc.data();
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }
}
