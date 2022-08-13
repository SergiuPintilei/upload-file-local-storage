import { useEffect, useState } from 'react';

import { getAllImages } from '../utils/api';

import './Images.css';

export default function Images() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const imageArray = getAllImages();
    if (imageArray && imageArray.length) {
      setImages(imageArray);
      setSelectedIndex(imageArray.length - 1);
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
    <section>
      <h1>Images</h1>
      {src ? (
        <article className="images__wrap">
          <button data-cy="prev-btn" onClick={goBack}>
            &#8678;
          </button>
          <figure className="images__img-wrap">
            <img
              className="images__img"
              data-testid={fileName}
              alt={fileName}
              src={src}
            />
          </figure>
          <button data-cy="next-btn" onClick={goForward}>
            &#8680;
          </button>
        </article>
      ) : (
        <p>There are no uploaded images</p>
      )}
    </section>
  );
}
