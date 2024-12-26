import React from 'react'

export const ErrorPage = ({ error }) => {
  if (!error) {
    return null;
  }

  const { data, status } = error;
  const { message } = data || {};

  return (
    <div className="error-page" data-testid="error-page">
      <div className="error-page__status">
        <h1>{status}</h1>
      </div>
      <h2>Error: {message}</h2>
    </div>
  );
};