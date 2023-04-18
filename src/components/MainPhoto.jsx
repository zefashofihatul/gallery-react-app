import imageMain from '../assets/pict-home.jpg';
import './style/mainPhoto.css';

export default function MainPhoto() {
  return (
    <>
      <img className="main-image" src={imageMain} alt="GambarUtama" />
    </>
  );
}
