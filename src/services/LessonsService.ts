import { Area, IClass, IServerClass } from "./TeacherService";
import AxiosInstance from "./utils/AxiosInstance";

export class LessonService {
  static async createClass(classData: IServerClass) {
    let result;

    try {
      result = await AxiosInstance.post("/lessons", classData);
    } catch (e) {
      throw e;
    }

    return result.data;
  }

  static async updateClass(classData: IClass) {
    let result;

    try {
      result = await AxiosInstance.put("/lessons", classData);
    } catch (e) {
      throw e;
    }

    return result.data;
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

    return result.data;
  }

  static async getStatistics(teacherId: string) {
    let result;

    try {
      result = await AxiosInstance.get(`/lessons/statistics/${teacherId}`);
    } catch (e) {
      console.log(e);
      throw e;
    }
    return result.data.results;
  }

  static async getCityStatistics(teacherId: string) {
    let result;

    try {
      result = await AxiosInstance.get(`/lessons/cityStatistics/${teacherId}`);
    } catch (e) {
      console.log(e);
      throw e;
    }

    return result.data;
  }
}
