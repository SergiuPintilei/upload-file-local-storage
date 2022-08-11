import { useEffect, useState } from 'react';
import { getAllImages } from '../utils/api';

export default function Images() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const imgSrc = getAllImages();
    if (imgSrc && imgSrc.length) {
      setImages(imgSrc);
      setSelectedIndex(imgSrc.length - 1);
    }
  }, []);

  const goBack = () =>
    setSelectedIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));

  const goForward = () =>
    setSelectedIndex((prev) => (prev + 1 > images.length - 1 ? 0 : prev + 1));

  const src = (images[selectedIndex] && images[selectedIndex].dataUrl) || '';
  return (
    <div>
      <h1>Images</h1>
      {src ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <button onClick={goBack}>&#8678;</button>
          <div
            style={{
              width: '300px',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              style={{ maxWidth: '100%', maxHeight: '100%' }}
              alt="preview"
              src={src}
            />
          </div>
          <button onClick={goForward}>&#8680;</button>
        </div>
      ) : (
        <p>There are no uploaded images</p>
      )}
    </div>
  );
}
