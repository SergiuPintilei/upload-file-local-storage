import { useNavigate } from 'react-router-dom';

import { getAllImages, setImages } from '../utils/api';
import Upload from './Upload';

export default function ImageUpload() {
  const navigate = useNavigate();

  const dataUrlToArray = (fileName, dataUrl) => {
    const array = getAllImages();
    array.push({ fileName, dataUrl });
    setImages(array);

    navigate('/images', { replace: true });
  };

  return <Upload onLoad={dataUrlToArray} />;
}
