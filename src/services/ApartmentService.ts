import AxiosInstance from "./utils/AxiosInstance";

export interface IApartment {
  id: string;
  address: string;
  isRelevant: boolean;
  monthlyCost: number;
  apartmentPictures: string[];
  numOfTenants: number;
  expireDate: Date;
  // apartmentPrefrences: IApartmentPrefrences[];
  // apartmentFavorites: IUser[];
  // unlikeUsers: IUser[];
}


export class ApartmentService {
 
  static async getAllRelatedApartments() {
    try {
      let result = await AxiosInstance.get(`/Apartment/relatedApartments`);
      return result.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
