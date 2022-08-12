import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllSheets, setSheets } from '../utils/api';

export default function SheetUpload() {
  const navigate = useNavigate();
  const fileReader = new FileReader();
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);

  const handleChange = (e, fileType) => {
    setError(false);
    const file = e.target.files[0];
    if (file && file['type'] !== fileType) {
      setError(true);
      return;
    }
    setFile(file);
  };

  const csvFileToArray = (fileName, string) => {
    const csvHeader = string.slice(0, string.indexOf('\n')).split(',');
    const csvRows = string.slice(string.indexOf('\n') + 1).split('\n');

    const array = csvRows.map((i) => {
      const values = i.split(',');
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    const lsArray = getAllSheets();
    lsArray.push({ fileName, array });
    setSheets(lsArray);

    navigate('/sheets', { replace: true });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(file.name, text);
      };

      fileReader.readAsText(file);
    }
  };

  return (
    <div>
      <h2>
        Upload a <code>.csv</code> file
      </h2>
      <form onSubmit={handleOnSubmit}>
        <input
          data-cy="csv-upload"
          type="file"
          accept=".csv"
          onChange={(e) => handleChange(e, 'text/csv')}
        />
        <button data-cy="csv-submit" disabled={!file}>
          Upload
        </button>
      </form>
      {error ? (
        <p style={{ color: 'palevioletred' }}>
          Incorrect file format. Please upload a .csv file.
        </p>
      ) : null}
    </div>
  );
}
