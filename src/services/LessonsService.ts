import { IClass } from "./TeacherService";
import AxiosInstance from "./utils/AxiosInstance";

export class LessonService {

  static async createClass(classData: IClass) {
    let result;

    try {
      result = await AxiosInstance.post("/lessons", classData);
      return classData;
    } catch (e) {
      throw e;
    }

    return result;
  }

  static async updateClass(classData: IClass) {
    let result;

    try {
      result = await AxiosInstance.post("/lessons", classData);
      return classData;
    } catch (e) {
      throw e;
    }

    return result;
  }

  static async deleteClass(id: string) {
    let result = await AxiosInstance.delete(`/lessons/${id}`);
    return result.data;
  }

  static async getAllRelatedClasses(teacherId: string) {
    let result;

    try {
      result = await AxiosInstance.get(`/lessons/teacherId/${teacherId}`);
    } catch (e) {
      console.log(e);
      throw e;
    }

    return result.data;;
  }
}
