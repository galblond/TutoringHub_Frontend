import AxiosInstance from "./utils/AxiosInstance";

export interface IUserPresentedData {
  fullName: string;
  email: string;
}

export interface IClass {
  id: string;
  name: string;
}

export interface ITeacher {
  id: string;
  classes: IClass[];
}


export class TeacherService {
 
  static async getAllRelatedClasses() {
    try {
      let result = await AxiosInstance.get(`/Teacher/relatedClasses`);
      return result.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
