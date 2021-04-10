import AxiosInstance from "./utils/AxiosInstance";

export enum classTypes {
  zoom,
  frontal,
}

export enum Gender {
  Male = 0,
  Female = 1,
}

export enum Score {
  score_0 = 0,
  score_1 = 1,
  score_2 = 2,
  score_3 = 3,
  score_4 = 4,
  score_5 = 5,
}

export enum Area {
  south = 0,
  north = 1,
  central = 2,
}

export interface IUserPresentedData {
  uid: string;
  fullName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IClass {
  id: string;
  subject?: string;
  city?: string;
  ageRangeMin?: number;
  ageRangeMax?: number;
  classType?: classTypes;
  teacherId?: string;
  // students?: Array<string>;
}

export interface ITeacher {
  _id: string;
  name: string;
  gender?: Gender;
  score?: Score;
  education?: string;
  availability?: boolean;
  areas?: Area[];
  tutoringSubjects?: IClass[];
  firebaseId?: string;
}

export class TeacherService {

  static async createTeacher(teacher: ITeacher) {
    let result;

    try {
      result = await AxiosInstance.post("/teachers", teacher);
    } catch (e) {
      throw e;
    }

    return result.data;
  }

  static async getTeacherByFirebaseId(firebaseId: string) {
    let result;

    try {
      result = await AxiosInstance.get(`/teachers/firebaseId/${firebaseId}`);
      console.log("teacherrrr => ", result.data[0])
    } catch (e) {
      throw e;
    }

    return result.data[0];
  }
}
