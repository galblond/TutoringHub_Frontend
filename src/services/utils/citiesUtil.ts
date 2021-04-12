import axios from "axios";

export interface ICity {
  cityName: string;
}

function camelize(str: string) {
  return str.split(' ').map(word => word.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toUpperCase() : word.toLowerCase();
  }).replace(/\s+/g, '')).join(" ").trim();

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
          cityName: camelize(record["שם_ישוב_לועזי"]),
        }
        return currentCity;
      }
    });

    return cities;
  } catch (e) {
    console.log(e);
  }
};