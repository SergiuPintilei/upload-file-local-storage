import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllSheets, setSheets } from '../utils/api';

const incorrectFileStructure =
  'Incorrect file structure. Your .csv file should have only one column named "Total".';
const incorrectFileFormat = 'Incorrect file format. Please upload a .csv file.';

export default function SheetUpload() {
  const navigate = useNavigate();
  const fileReader = new FileReader();
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e, fileType) => {
    setError(false);
    const file = e.target.files[0];
    if (file && file['type'] !== fileType) {
      setError(incorrectFileFormat);
      return;
    }
    setFile(file);
  };

  const csvFileToArray = (fileName, string) => {
    const csvHeader = string.slice(0, string.indexOf('\n')).split(',');
    if (csvHeader && csvHeader.length > 1) {
      setError(incorrectFileStructure);
      setFile(null);
      return;
    }
    if (csvHeader && csvHeader.length === 1 && csvHeader[0] !== 'Total') {
      setError(incorrectFileStructure);
      setFile(null);
      return;
    }

    const csvRows = string.slice(string.indexOf('\n') + 1).split('\n');

    const total = csvRows.reduce((acc, curr) => {
      return acc + parseFloat(curr) || 0;
    }, 0);

    const lsArray = getAllSheets();
    lsArray.push({ fileName, total });
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
        <button className="btn--primary" data-cy="csv-submit" disabled={!file}>
          Upload
        </button>
      </form>
      {error ? <p className="error-text">{error}</p> : null}
    </div>
  );
}
