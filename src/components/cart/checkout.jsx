import { useState, useReducer, useRef } from "react";
import PrimaryButton from "../layout/buttons/primaryButton";

const defaultFormState = {
  name: "",
  address: "",
  phone: "",
};

export default function Checkout(props) {
  const [hasError, setHasError] = useState(false);
  const [successful, setSuccessful] = useState(false);

  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();

  const formReducer = (state, action) => {
    switch (action.type) {
      case "NAME":
        let nameNotValid = action.value < "";
        return (
          nameNotValid ? setHasError(true) : setHasError(false),
          {
            ...state,
            name: action.value,
          }
        );

      case "ADDRESS":
        let addNotValid = action.value < "";
        return (
          addNotValid ? setHasError(true) : setHasError(false),
          {
            ...state,
            address: action.value,
          }
        );

      case "PHONE":
        let phoneNotValid = action.value < 0;
        return (
          phoneNotValid ? setHasError(true) : setHasError(false),
          {
            ...state,
            phone: action.value,
          }
        );
    }
  };

  const [formState, dispatchForm] = useReducer(formReducer, defaultFormState);
  const classes = {
    parent: `flex flex-col mb-3`,
    input: `h-12 rounded-lg border border-[#00000012] p-2 text-left focus:outline-none focus:border-pry`,
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      formState != undefined &&
      formState.name > "" &&
      formState.address > "" &&
      formState.phone > 1
    ) {
      setHasError(false);
      setSuccessful(true);
      return props.onSubmit(formState);
    } else {
      return setHasError(true);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.parent}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className={classes.input}
          ref={nameRef}
          onChange={() => {
            dispatchForm({ type: "NAME", value: nameRef.current.value });
          }}
        />
      </div>

      <div className={classes.parent}>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          className={classes.input}
          ref={addressRef}
          onChange={() => {
            dispatchForm({ type: "ADDRESS", value: addressRef.current.value });
          }}
        />
      </div>

      <div className={classes.parent}>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="number"
          className={classes.input}
          ref={phoneRef}
          onChange={() => {
            dispatchForm({
              type: "PHONE",
              value: phoneRef.current.valueAsNumber,
            });
          }}
        />
      </div>

      {hasError && (
        <p className="p-1 border rounded-lg text-sec bg-sec bg-opacity-10">
          All fields as compulsory
        </p>
      )}
      {successful && (
        <p className="p-1 border rounded-lg text-pry bg-pry bg-opacity-10">
          Hi {formState.name}, your order has been placed!
        </p>
      )}
      <PrimaryButton name="Place Order" type="submit" onClick={submitHandler} />
    </form>
  );
}
