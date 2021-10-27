import { useReducer } from "react";
import emailReducer from "./emailReducer";
import emailContext from "./emailContext";
import { SET_PROCESSING, RESET, SET_RESULT } from "./Types";

const EmailState = (props) => {
  const initialState = {
    processing: false,
    result: null,
    data: null,
  };

  const [state, dispatch] = useReducer(emailReducer, initialState);

  const process = async (jsonArray, index) => {
    setprocessing();
    const re = /\S+@\S+\.\S+/;
    let emails = [];
    const filtered = [];
    let columns = null;
    jsonArray.forEach((data) => {
      if (re.test(data.data[index])) {
        emails.push(data.data[index]);
      }
    });

    const res = await fetch(`/email/filter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emails,
      }),
    });
    const json = await res.json();

    if (json) {
      jsonArray.forEach((data, i) => {
        if (i === 0) columns = data.data;
        if (json.msg.indexOf(data.data[index]) !== -1) {
          filtered.push(data.data);
        }
      });

      reset();

      const newCsvData = [];
      filtered.forEach((data) => {
        let fields = {};
        data.forEach((field, i) => {
          fields[columns[i]] = field;
        });
        newCsvData.push(fields);
      });
      setResult({
        data: filtered,
        emailIndex: index,
        noOfCorrectEmails: json.msg.length,
        noOfWrongEmails: json.wrongEmails.length,
        csv: newCsvData,
      });
    }
  };

  const setprocessing = () => {
    dispatch({
      type: SET_PROCESSING,
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
        processing: state.processing,
        result: state.result,
        process,
      }}
    >
      {props.children}
    </emailContext.Provider>
  );
};

export default EmailState;
