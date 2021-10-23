import useInputMine from '../hooks/useInputMine';

const BasicForm = (props) => {
  const {
    valueTyped: nameTyped,
    isValid: nameIsValid,
    inputInvalid: nameInputIsInvalid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    valueReset: nameValueReset,
    blurReset: nameBlurReset,
  } = useInputMine((value) => value.trim().length > 0);

  const {
    valueTyped: surnameTyped,
    isValid: surnameIsValid,
    inputInvalid: surnameInputIsInvalid,
    inputChangeHandler: surnameInputChangeHandler,
    inputBlurHandler: surnameInputBlurHandler,
    valueReset: surnameValueReset,
    blurReset: surnameBlurReset,
  } = useInputMine((value) => value.trim().length > 0);

  const {
    valueTyped: emailTyped,
    isValid: emailIsValid,
    inputInvalid: emailInputIsInvalid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    valueReset: emailValueReset,
    blurReset: emailBlurReset,
  } = useInputMine((value) => value.trim().length > 0 && value.includes('@'));

  let formValid = false;
  if (nameIsValid && surnameIsValid && emailIsValid) {
    formValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(nameTyped);
    console.log(surnameTyped);
    console.log(emailTyped);

    nameValueReset();
    nameBlurReset();
    surnameValueReset();
    surnameBlurReset();
    emailValueReset();
    emailBlurReset();
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const surnameInputClasses = surnameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameTyped}
          />
          {nameInputIsInvalid && (
            <p className="error-text">Please insert valid name.</p>
          )}
        </div>
        <div className={surnameInputClasses}>
          <label htmlFor="surname">Last Name</label>
          <input
            type="text"
            id="surname"
            onChange={surnameInputChangeHandler}
            onBlur={surnameInputBlurHandler}
            value={surnameTyped}
          />
          {surnameInputIsInvalid && (
            <p className="error-text">Please insert valid surname.</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailTyped}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please insert valid e-mail.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
