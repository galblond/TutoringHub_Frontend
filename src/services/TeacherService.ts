import AxiosInstance from "./utils/AxiosInstance";

export enum ClassType {
  Zoom = 0,
  Teachers_Home = 1,
  Students_Home = 2,
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
  _id: string;
  subject?: string;
  city?: string;
  minAgeRange?: number;
  maxAgeRange?: number;
  classType?: ClassType;
  teacherId?: string;
}

export interface IServerClass {
  id: string;
  subject?: string;
  city?: string;
  minAgeRange?: number;
  maxAgeRange?: number;
  classType?: ClassType;
  teacherId?: string;
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
  mail?: string;
}

export interface IServerTeacher {
  id: string;
  name: string;
  gender?: Gender;
  score?: Score;
  education?: string;
  availability?: boolean;
  areas?: Area[];
  tutoringSubjects?: IClass[];
  firebaseId?: string;
  mail?: string;
}

export class TeacherService {
  static async createTeacher(teacher: IServerTeacher) {
    let result;

    try {
      result = await AxiosInstance.post("/teachers", teacher);
    } catch (e) {
      throw e;
    }

    return result.data;
  }
  static async updateTeacher(teacher: IServerTeacher) {
    let result;

    try {
      result = await AxiosInstance.put("/teachers", teacher);
    } catch (e) {
      throw e;
    }

    return result.data;
  }
  static async getTeacherByFirebaseId(firebaseId: string) {
    let result;

    try {
      result = await AxiosInstance.get(`/teachers/firebaseId/${firebaseId}`);
    } catch (e) {
      throw e;
    }

    return result.data[0];
  }
}
