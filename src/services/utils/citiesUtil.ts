import axios from "axios";

export interface ICity {
  cityName: string;
}

export const getAllCities = async () => {
  let cities: ICity[] = [];

  try {
    const result = await axios.get(
      "https://data.gov.il/api/action/datastore_search?resource_id=d4901968-dad3-4845-a9b0-a57d027f11ab&limit=1272"
    );

    cities = result.data.result.records.map((record: any) => {
      if (record["שם_ישוב_לועזי"]) {
        let currentCity: ICity = {
          cityName: record["שם_ישוב_לועזי"],
        }
        return currentCity;
      }
    });

    return cities;
  } catch (e) {
    console.log(e);
  }
};