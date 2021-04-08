import AxiosInstance from "./utils/AxiosInstance";

export class LessonService {
  static async deleteClass(id: string) {
    let result = await AxiosInstance.delete(`/lessons/${id}`);
    return result.data;
  }
}
