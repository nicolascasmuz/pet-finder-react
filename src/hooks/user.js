import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  atom,
  selector,
  useSetRecoilState,
  useRecoilValue,
  useRecoilState,
  useResetRecoilState,
} from "recoil";
import {
  logIn,
  mascotasCercaTuyo,
  getUserPets,
  createUser,
  API_BASE_URL,
} from "../db/api.js";

type customRecoilState = {
  token: string,
  lat: number,
  lng: number,
  email: string,
};

/// INIT ///

function init() {
  const data = {
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
  };
  const localData: any = localStorage.getItem("saved-state");

  if (!localData) {
    localStorage.setItem("saved-state", JSON.stringify(data));
  } else if (
    window.location.pathname == "/main" ||
    window.location.pathname == "/" ||
    window.location.pathname == "/log-in" ||
    window.location.pathname == "/sign-up"
  ) {
    localStorage.setItem("saved-state", JSON.stringify(data));
  } else {
    localStorage.setItem("saved-state", localData);
  }
}

const userDataState = atom({
  key: "userDataState",
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
});

/// LOG IN ///

// REFACTOR DEL LOGIN

const authAtom = atom({
  key: "authAtom",
  default: {
    userId: null,
    email: null,
    password: null,
    nickname: null,
    picURL: null,
    address: null,
    location: null,
    lat: null,
    lng: null,
  },
});

// Inicia sesion SOLO SI hay data valida en el authATOM

const loginToken = selector({
  key: "loginToken",
  get: async ({ get }) => {
    const email = get(authAtom)["email"];
    const password = get(authAtom)["password"];
    if (email != null && password != null) {
      const userData = await logIn(email, password);
      return userData;
    } else {
      return false;
    }
  },
});

function useLogin() {
  const userData = useRecoilValue(loginToken);
  const [loginAtom, setLoginAtom] = useRecoilState(authAtom);
  const setUserData = useSetUserData();

  useEffect(() => {
    if (!userData.error) {
      setUserData((p) => ({
        ...p,
        userId: userData.profile.userId,
        email: userData.profile.email,
        password: userData.profile.password,
        nickname: userData.profile.nickname,
        picURL: userData.profile.picURL,
        address: userData.profile.address,
        location: userData.profile.location,
        lat: userData.profile.lat,
        lng: userData.profile.lng,
      }));
      setLoginAtom({
        userId: loginAtom.profile.userId,
        email: loginAtom.profile.email,
        password: loginAtom.profile.password,
        nickname: loginAtom.profile.nickname,
        picURL: loginAtom.profile.picURL,
        address: loginAtom.profile.address,
        location: loginAtom.profile.location,
        lat: loginAtom.profile.lat,
        lng: loginAtom.profile.lng,
      });
    }
    if (userData.error) {
      setLoginAtom({ email: null, password: null });
      return window.alert("No existe un usuario con ese mail");
    }
    //return setLoginAtom({ email: null, password: null });
  }, [loginAtom]);

  return setLoginAtom;
}

///

const userPets = atom({
  key: "userPets",
  default: [],
});

const userPetsState = selector({
  key: "userPetsRequest",
  get: async ({ get }) => {
    const token = get(userDataState)["token"];
    const defaultPets = get(userPets);
    if (token != null) {
      const userPets = await getUserPets(token);
      return userPets;
    } else return defaultPets;
  },
  set: ({ set }, newValue: any) => {
    set(userPets, newValue);
  },
});

function useGetUserPets() {
  const pets = useRecoilValue(userPetsState);
  return pets;
}

function useListenForUserPets() {
  const pets = useRecoilValue(userPets);
  return pets;
}

// Inicia sesion SOLO SI hay data valida en el authATOM

const signinToken = selector({
  key: "signinToken",
  get: async ({ get }) => {
    const email = get(authAtom)["email"];
    const password = get(authAtom)["password"];
    if (email != null && password != null) {
      const resObject = await createUser(email, password);
      return resObject;
    } else return false;
  },
});

function useSignin() {
  const signinTokenstate = useRecoilValue(signinToken);
  const [signAtom, setSignAtom] = useRecoilState(authAtom);
  const setUserData = useSetUserData();
  useEffect(() => {
    if (signinTokenstate?.status == 200 && signAtom.email != null) {
      setUserData((p) => ({
        ...p,
        token: signinTokenstate.token,
        email: signAtom.email,
      }));
      setSignAtom({ email: null, password: null });
    }
    if (signinTokenstate?.status == 400) {
      setSignAtom({ email: null, password: null });
      return window.alert("Ya existe un usuario con ese mail");
    }
  }, [signAtom]);
  return setSignAtom;
}
//////////////////////////////////////////////////////////////////////////////////

// selector para OBTENER el state o para SETEAR el state
// cuando se SETEA un nuevo state tambien guarda el ULTIMO STATE en localStorage
const stateSelector = selector({
  key: "stateSelector",
  get: ({ get }) => {
    const state = get(userDataState);
    return state;
  },
  set: ({ set }, newValue: customRecoilState) => {
    localStorage.setItem("localData", JSON.stringify(newValue));
    set(userDataState, newValue);
  },
});

// devuelve las mascotas cerca de la ubicacion del User
// se ejecuta cada vez que el user entra a /mascotas-perdidas-cerca-tuyo
// para tener la data actualizada

function useGetNearByPets() {
  const data = useGetUserData();
  return async (): Promise<Array<any>> => {
    try {
      const pets = await mascotasCercaTuyo({ lat: data.lat, lng: data.lng });
      return pets;
    } catch (error) {
      return [];
    }
  };
}

function useSetUserData() {
  const setData = useSetRecoilState(stateSelector);
  return setData;
}

function useGetUserData() {
  const data = useRecoilValue(stateSelector);
  return data;
}

function useResetUserData() {
  const reset = useResetRecoilState(userDataState);
  return reset;
}

const mapboxTokenState = atom({
  key: "mapboxTokenState",
  default: null,
});

const mapboxTokenRequest = selector({
  key: "mapboxTokenRequest",
  get: async ({ get }) => {
    const tokenState = get(mapboxTokenState);
    if (tokenState == null) {
      const res = await fetch(`${API_BASE_URL}/api/mapbox-token`);
      const token = await res.json();
      return token.token;
    } else return tokenState;
  },
});

function useGetMapbox() {
  const token = useRecoilValue(mapboxTokenRequest);
  return token;
}

function useCloseSession() {
  const navigate = useNavigate();
  const reset = useResetUserData();
  function execute() {
    navigate("/", { replace: true });
    reset();
    localStorage.removeItem("localData");
    /* location.reload(); */
  }
  return execute;
}

export {
  init,
  useSetUserData,
  useGetUserData,
  useGetNearByPets,
  userDataState,
  userPets,
  useGetUserPets,
  useSignin,
  useLogin,
  useResetUserData,
  useListenForUserPets,
  useGetMapbox,
  useCloseSession,
};
