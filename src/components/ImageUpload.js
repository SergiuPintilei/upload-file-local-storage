import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAllImages, setImages } from '../utils/api';

export default function ImageUpload() {
  const fileReader = new FileReader();
  const navigate = useNavigate();
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

  const dataUrlToArray = (fileName, dataUrl) => {
    const array = getAllImages();
    array.push({ fileName, dataUrl });
    setImages(array);

    navigate('/images', { replace: true });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const dataUrl = event.target.result;
        dataUrlToArray(file.name, dataUrl);
      };

      fileReader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <h2>Upload Images</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          data-cy="image-upload"
          type="file"
          accept=".png"
          onChange={(e) => handleChange(e, 'image/png')}
        />
        <button data-cy="image-submit" disabled={!file}>
          Upload
        </button>
      </form>
      {error ? (
        <p style={{ color: 'palevioletred' }}>
          Incorrect file format. Please upload a .png file.
        </p>
      ) : null}
    </div>
  );
}
