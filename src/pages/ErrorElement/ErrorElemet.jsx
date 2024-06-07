// ErrorElement.js
import { Helmet } from "react-helmet";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <title>Sweet Home || Error</title>
      </Helmet>
      <svg
        width="200"
        height="200"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-8"
      >
        <path
          d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13 6H11V13H13V6ZM13 16H11V18H13V16Z"
          fill="#FF0000"
        />
      </svg>
      <h1 className="mb-4 text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="mb-4 text-lg">Sorry, an unexpected error has occurred.</p>
      {error && (
        <div className="text-red-500">
          <p>
            <strong>Error:</strong> {error.statusText || error.message}
          </p>
        </div>
      )}
    </div>
  );
};

export default ErrorElement;
