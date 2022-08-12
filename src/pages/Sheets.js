import { useEffect, useState } from 'react';

import { getAllSheets } from '../utils/api';

export default function Sheets() {
  const [sheetArray, setSheetArray] = useState([]);

  useEffect(() => {
    const sheets = getAllSheets();
    if (sheets && sheets.length) {
      setSheetArray(sheets);
    }
  }, []);

  return (
    <section>
      <h1>Sheets</h1>

      {sheetArray.length ? (
        <table>
          <thead>
            <tr>
              <th>Filename</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sheetArray.map((csvItem) => {
              return (
                <tr key={csvItem.fileName}>
                  <td>{csvItem.fileName}</td>
                  <td>{csvItem.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>There are no uploaded csv files</p>
      )}
    </section>
  );
}
