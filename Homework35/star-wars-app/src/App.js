import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, clearData } from './actions';
import Button from './components/Button';
import Display from './components/Display';

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const data = useSelector((state) => state.data);
  const requestDetails = useSelector((state) => state.requestDetails);

  const handleFetchData = async () => {
    setIsLoading(true);
    await dispatch(fetchData());
    setIsLoading(false);
  };

  const handleClearData = () => {
    dispatch(clearData());
  };

  return (
    <div className="container">
      <h1>SWAPI - The Star Wars API</h1>

      <div className="button-section">
        {!isLoading && !data && (
          <Button onClick={handleFetchData} disabled={isLoading || data}>
            {isLoading ? 'Loading...' : 'Fetch Data'}
          </Button>
        )}

        {data && (
          <Button onClick={handleClearData} disabled={isLoading}>
            Clear Data
          </Button>
        )}
      </div>

      {requestDetails && (
        <div className="info-section">
          <h3>Request Details:</h3>
          <p>Endpoint: {requestDetails.endpoint}</p>
          <p>Method: {requestDetails.method}</p>
        </div>
      )}

      {!isLoading && data && (
        <div className="info-section">
          <h3>Data:</h3>
          <Display data={data} />
        </div>
      )}
    </div>
  );
};

export default App;
