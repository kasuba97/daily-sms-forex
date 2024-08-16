require("dotenv").config();

type ZanacoResponse = {
  data: [
    {
      // uncomment if needed
      created?: string;
      id?: string;
      message?: any;
      shortType?: string;
      type?: string;
      participantId?: string;
      updated?: string;
      buyRate: number;
      currencyCode: string;
      midRate: number;
      sellRate: number;
    }
  ];
};

const getTodaysRate = async () => {
  const zanacoForexAPI = process.env.ZANACOFOREX;
  if (!zanacoForexAPI) throw new Error("zanaco forex API is not available");

  const res = await (await fetch(zanacoForexAPI)).json();

  res as unknown;
  const response = res as ZanacoResponse;

  const wantedRates = response.data.filter((data) => {
    if (data.currencyCode == "USD" || data.currencyCode == "GBP") {
      // cleaning data
      delete data.created;
      delete data.id;
      delete data.message;
      delete data.participantId;
      delete data.shortType;
      delete data.type;
      delete data.updated;

      return data;
    }
  });
  return wantedRates;
};

export default getTodaysRate;
