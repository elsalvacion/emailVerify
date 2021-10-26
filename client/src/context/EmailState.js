import { useReducer } from "react";
import emailReducer from "./emailReducer";
import emailContext from "./emailContext";
import {
  SET_PROCESSING,
  SET_UPLOADING,
  SET_DOWNLOADING,
  RESET,
  SET_RESULT,
} from "./Types";

import config from "../config";

const EmailState = (props) => {
  const initialState = {
    uploading: false,
    processing: false,
    downloading: false,
    result: null,
  };

  const [state, dispatch] = useReducer(emailReducer, initialState);

  const upload = async (files) => {
    setUploading();
    const formData = new FormData();
    formData.append("file", files[0]);
    const res = await fetch(`${config.url}/email/upload`, {
      method: "POST",
      body: formData,
    });
    const json = await res.json();
    if (res.status) {
      process(json.newName);
    }
  };

  const process = async (name) => {
    setprocessing();
    const res = await fetch(`${config.url}/email/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    const json = await res.json();

    if (res.status) {
      download(name, json);
    }
  };

  const download = async (newName, data) => {
    setDownloading();
    const res = await fetch(`${config.url}/email/delete`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newName,
      }),
    });

    if (res.status) {
      reset();
      setResult(data);
    }
  };

  const setUploading = () => {
    dispatch({
      type: SET_UPLOADING,
    });
  };

  const setprocessing = () => {
    dispatch({
      type: SET_PROCESSING,
    });
  };

  const setDownloading = () => {
    dispatch({
      type: SET_DOWNLOADING,
    });
  };
  const setResult = (payload) => {
    dispatch({
      type: SET_RESULT,
      payload,
    });
  };

  const reset = () => {
    dispatch({
      type: RESET,
    });
  };

  return (
    <emailContext.Provider
      value={{
        uploading: state.uploading,
        processing: state.processing,
        downloading: state.downloading,
        result: state.result,
        upload,
        process,
        download,
      }}
    >
      {props.children}
    </emailContext.Provider>
  );
};

export default EmailState;
