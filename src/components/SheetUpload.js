import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllSheets, setSheets } from '../utils/api';
import Upload from './Upload';

const incorrectFileStructure =
  'Incorrect file structure. Your .csv file should have only one column named "Total".';
const incorrectFileFormat = 'Incorrect file format. Please upload a .csv file.';

const errors = {
  incorrectFileFormat,
  incorrectFileStructure,
};

export default function SheetUpload() {
  const navigate = useNavigate();
  const uploadRef = useRef();

  const csvFileToArray = (fileName, string) => {
    const csvHeader = string.slice(0, string.indexOf('\n')).split(',');
    if (csvHeader && csvHeader.length > 1) {
      uploadRef.current.handleValidate('incorrectFileStructure');
      return;
    }
    if (csvHeader && csvHeader.length === 1 && csvHeader[0] !== 'Total') {
      uploadRef.current.handleValidate('incorrectFileStructure');
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

  return (
    <Upload
      ref={uploadRef}
      title={
        <>
          Upload a <code>.csv</code> file
        </>
      }
      fileType=".csv"
      acceptedFileType="text/csv"
      errors={errors}
      fileReaderMethod="readAsText"
      onLoad={csvFileToArray}
    />
  );
}
