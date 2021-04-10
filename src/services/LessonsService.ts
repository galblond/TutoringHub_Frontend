import { IClass } from "./TeacherService";
import AxiosInstance from "./utils/AxiosInstance";

export class LessonService {

  static async createClass(classData: IClass) {
    let result;

    try {
      result = await AxiosInstance.post("/lessons", classData);
    } catch (e) {
      console.log("Class creation failed => ", e);
      throw e;
    }

    console.log("Class creation succeeded => ", result.data);
    return result.data;
  }

  static async updateClass(classData: IClass) {
    let result;

    try {
      result = await AxiosInstance.post("/lessons", classData);
    } catch (e) {
      console.log("Class update failed => ", e);
      throw e;
    }

    console.log("Class update succeeded => ", result.data);
    return result.data;
  }

  static async deleteClass(id: string) {
    let result = await AxiosInstance.delete(`/lessons/${id}`);
    return result.data;
  }
}
