import AxiosInstance from "./utils/AxiosInstance";

export enum classTypes {
  zoom,
  frontal
};

export interface IUserPresentedData {
  fullName: string;
  email: string;
}

export interface IClass {
  id: string;
  subject: string;
  city: string;
  ageRangeMin: number;
  ageRangeMax: number;
  classType: classTypes;
}

export interface ITeacher {
  id: string;
  classes: IClass[];
}

export class TeacherService {
 
  static async getAllRelatedClasses() {
    try {
      // TODO
      // let result = await AxiosInstance.get(`/Teacher/relatedClasses`);
      // return result.data;
      const classes: IClass[] = [
        {
          id: "1",
          subject: "Math",
          city: "Holon",
          ageRangeMin: 10,
          ageRangeMax: 25,
          classType: classTypes.zoom,
        },
        {
          id: "2",
          subject: "English",
          city: "Tel Aviv",
          ageRangeMin: 15,
          ageRangeMax: 120,
          classType: classTypes.frontal,
        },
        {
          id: "3",
          subject: "Physics",
          city: "Bat Yam",
          ageRangeMin: 15,
          ageRangeMax: 18,
          classType: classTypes.frontal,
        },
        {
          id: "4",
          subject: "Painting",
          city: "Bat Yam",
          ageRangeMin: 15,
          ageRangeMax: 18,
          classType: classTypes.frontal,
        },
        {
          id: "5",
          subject: "Chemistry",
          city: "Bat Yam",
          ageRangeMin: 30,
          ageRangeMax: 99,
          classType: classTypes.frontal,
        },
      ];
      return classes;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
