import error from "./error.png";

const ErrorComponent = () => {
  return (
    <div className="error">
      <div className="wrapper">
        <img src={error} alt="something went wrong" />
        <h1 className="error-message">Oops! Something Went Wrong</h1>
        <p>We apologize for the inconvenience. Please try again later.</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
