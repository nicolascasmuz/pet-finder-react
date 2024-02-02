import { useState, useEffect } from "react";
import { atom, selector, useSetRecoilState, useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

export var API_BASE_URL: any = "http://localhost:3000";

/* if (process.env.ENV == "development") {
  API_BASE_URL = "http://localhost:3000";
} else if (process.env.ENV == "production") {
  API_BASE_URL = process.env.BACKEND_URL;
} */

export const emptyData = {
  userId: "",
  picURL: "",
  nickname: "",
  email: "",
  password: "",
  address: "",
  location: "",
  lat: "",
  lng: "",
  newUser: "",
  selectedPet: "",
  petsByRadius: [],
  myReportedPets: [],
};

export const petFinderState = atom({
  key: "init",
  default: {
    userId: "",
    picURL: "",
    nickname: "",
    email: "",
    password: "",
    address: "",
    location: "",
    newUser: "",
    selectedPet: "",
    petsByRadius: [],
    myReportedPets: [],
  },
  listeners: [],
});

export const dataState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const dataValue = get(petFinderState);
    if (dataValue) {
      const localData: any = localStorage.getItem("saved-state");

      return localData;
    } else {
      return [];
    }
  },
});

export function useInit() {
  const params = useParams();
  const query = params.query;

  const setData = useSetRecoilState(petFinderState);
  const data = useRecoilValue(dataState);

  console.log("data: ", data);
}
