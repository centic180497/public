import { Options } from "../types/client";
import axios from "axios";
import _ from "lodash";

const HEADER_AUTH = "Authorization";
const HEADER_BEARER = "BEARER";

export default class Client {
  token = "";
  url = "http://103.101.76.162:9002";
  urlPolitical = "http://103.101.76.162:9002";
  urlVersion = "/api/v1";
  urlSearchViolations = "http://103.101.76.162:9005";
  defaultHeaders: { [x: string]: string } = {};
  userId = "";
  userRole?: string;

  getUrl() {
    return this.url;
  }

  setUrl(url: string) {
    this.url = url;
  }

  getUrlVersion() {
    return this.urlVersion;
  }

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  setUserId(userId: string) {
    this.userId = userId;
  }

  setUserRole(userRole: string) {
    this.userRole = userRole;
  }

  getBaseRoute() {
    return `${this.url}${this.urlVersion}`;
  }

  getBaseRoutePolitical() {
    return `${this.urlPolitical}${this.urlVersion}`;
  }
  //searchViolation
  getBaseRouteSearchViolation() {
    return `${this.urlSearchViolations}${this.urlVersion}`;
  }
  //endsearch
  getUsersRoute() {
    return `${this.getBaseRoute()}/users`;
  }

  getParkingRoute() {
    return `${this.getBaseRoute()}/parking`;
  }

  getNoParkingRoute() {
    return `${this.getBaseRoute()}/no_parking`;
  }

  getPolitical() {
    return `${this.getBaseRoutePolitical()}/political`;
  }

  getDetailNoParking(id: string) {
    return `${this.getBaseRoute()}/no_parking/${id}`;
  }

  getOptions(options: Options) {
    const newOptions = { ...options };
    let headers = { ...this.defaultHeaders };

    if (options.headers) {
      headers = { ...headers, ...options.headers };
    }

    if (this.token) {
      headers[HEADER_AUTH] = `${HEADER_BEARER} ${this.token}`;
    }

    return { ...newOptions, headers };
  }

  login = (username: string, password: string) => {};

  logout = () => {};
  getSearchViolation = async (value: any) => {
    let plate = value;
    if (typeof value === "object") {
      plate = value.plate;
    }

    const { data } = await this.doFetchWithResponse(
      `${this.getBaseRouteSearchViolation()}/violations/search`,
      {
        method: "post",
        data: {
          plate: plate,
          page: value.page,
        },
      }
    );
    return data;
  };
  ///endSearch
  getProvinces = async () => {
    const { data } = await this.doFetchWithResponse(
      `${this.getPolitical()}/provinces`,
      {
        method: "get",
        data: {},
      }
    );
    return data;
  };

  getDistricts = async (code: string) => {
    const {
      data,
    } = await this.doFetchWithResponse(
      `${this.getPolitical()}/districts?province=${code}`,
      { method: "get", data: {} }
    );
    return data;
  };

  getCommunes = async (code: string) => {
    const {
      data,
    } = await this.doFetchWithResponse(
      `${this.getPolitical()}/communes?district=${code}`,
      { method: "get", data: {} }
    );
    return data;
  };

  // manage noParking
  getDataNoParking = async () => {
    const { data } = await this.doFetchWithResponse(
      `${this.getNoParkingRoute()}`,
      {
        method: "get",
        data: {},
      }
    );
    return data;
  };

  getDataNoParkingDetail = async (id: string) => {
    const { data } = await this.doFetchWithResponse(
      `${this.getDetailNoParking(id)}`,
      { method: "get", data: { id } }
    );
    return data;
  };

  addOneNoParking = async (payload: object) => {
    const { data } = await this.doFetchWithResponse(
      `${this.getNoParkingRoute()}`,
      {
        method: "post",
        data: { ...payload },
      }
    );
    return data;
  };

  updateOneNoParking = async (payload: any) => {
    const { data } = await this.doFetchWithResponse(
      `${this.getDetailNoParking(payload.id)}`,
      { method: "put", data: { ...payload } }
    );

    return data;
  };

  deleteOneNoParking = async (id: string) => {
    const { data } = await this.doFetchWithResponse(
      `${this.getDetailNoParking(id)}`,
      { method: "delete", data: { id } }
    );
    return data;
  };

  searchParking = async (payload: any) => {
    const { data } = await this.doFetchWithResponse(
      `${this.getParkingRoute()}?district=${payload.district}&commune=${
        payload.commune
      }&type=${payload.type}&query=${payload.q}&fee=${payload.fee}`,
      {
        method: "get",
        data: {},
      }
    );
    return data;
  };

  searchNoParking = async (payload: any) => {
    const { data } = await this.doFetchWithResponse(
      `${this.getNoParkingRoute()}?type=${payload.type}&query=${payload.q}`,
      {
        method: "get",
        data: {},
      }
    );
    return data;
  };
  // end manage noParking

  getParking = async () => {
    const { data }: any = await this.doFetchWithResponse(
      `${this.getParkingRoute()}`,
      {
        method: "get",
        data: {},
      }
    );
    return data;
  };

  doFetch = async (url: string, options: Options) => {
    const { data } = await this.doFetchWithResponse(url, options);
    return data;
  };

  doFetchWithResponse = async (url: string, options: Options) => {
    try {
      const response = await axios({ url: url, ...this.getOptions(options) });

      const { data, headers } = response;

      return { data, headers };
    } catch (error) {
      return error.messages;
    }
  };
}
