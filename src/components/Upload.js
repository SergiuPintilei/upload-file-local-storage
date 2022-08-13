import { forwardRef, useImperativeHandle, useState } from 'react';

function Upload(
  {
    title = 'Upload Images',
    acceptedFileType = 'image/png',
    fileType = '.png',
    errors = {
      incorrectFileFormat: 'Incorrect file format. Please upload a .png file.',
    },
    fileReaderMethod = 'readAsDataURL',
    onLoad,
  },
  ref
) {
  const fileReader = new FileReader();
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  useImperativeHandle(ref, () => ({
    handleValidate: (errorKey) => {
      setError(errors[errorKey]);
      setFile(null);
    },
  }));

  const handleChange = (e) => {
    setError('');
    const file = e.target.files[0];
    if (file && file['type'] !== acceptedFileType) {
      setError(errors.incorrectFileFormat);
      return;
    }
    setFile(file);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        if (onLoad) {
          onLoad(file.name, event.target.result);
        }
      };

      fileReader[fileReaderMethod](file);
    }
  };

  return (
    <article>
      <h2>{title}</h2>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="file">Pick a file</label>
        <input
          data-cy="upload"
          data-testid="upload"
          id="file"
          type="file"
          accept={fileType}
          onChange={handleChange}
        />
        <button
          className="btn--primary"
          data-cy="submit"
          data-testid="submit"
          disabled={!file}
        >
          Upload
        </button>
      </form>
      {error ? (
        <p data-testid="error-text" className="error-text">
          {error}
        </p>
      ) : null}
    </article>
  );
}

export default forwardRef(Upload);
