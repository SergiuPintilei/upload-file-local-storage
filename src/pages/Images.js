import { useEffect, useState } from 'react';

import { getAllImages } from '../utils/api';

import './Images.css';

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
  const fileName =
    (images[selectedIndex] && images[selectedIndex].fileName) || 'preview';
  return (
    <div>
      <h1>Images</h1>
      {src ? (
        <div className="images__wrap">
          <button data-cy="prev-btn" onClick={goBack}>
            &#8678;
          </button>
          <div className="images__img-wrap">
            <img className="images__img" alt={fileName} src={src} />
          </div>
          <button data-cy="next-btn" onClick={goForward}>
            &#8680;
          </button>
        </div>
      ) : (
        <p>There are no uploaded images</p>
      )}
    </div>
  );
}
