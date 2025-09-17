import React from 'react';

// Import all images in the specified folders dynamically
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item).default; });
  return images;
};

// Import images from multiple folders
const imagesAxum = importAll(require.context('../assets/images/Axum', false, /\.(png|jpe?g|svg)$/));
const imagesLalibela = importAll(require.context('../assets/images/Gondar', false, /\.(png|jpe?g|svg)$/));
const imagesOmo = importAll(require.context('../assets/images/omo', false, /\.(png|jpe?g|svg)$/));
const imagesBahirdar = importAll(require.context('../assets/images/Bahirdar', false, /\.(png|jpe?g|svg)$/));
const imagesSemen = importAll(require.context('../assets/images/semen', false, /\.(png|jpe?g|svg)$/));

const MyComponent = () => {
  return (
    <>
    <div>

      <h2>Axum</h2>
      {Object.keys(imagesAxum).map((imageName, index) => (
        <img key={index} src={imagesAxum[imageName]} alt={imageName} />
      ))}


      <h2>Lalibela</h2>
      {Object.keys(imagesLalibela).map((imageName, index) => (
        <img key={index} src={imagesLalibela[imageName]} alt={imageName} />
      ))}



      <h2>Omo</h2>
      {Object.keys(imagesOmo).map((imageName, index) => (
        <img key={index} src={imagesOmo[imageName]} alt={imageName} />
      ))}

      <h2>Bahirdar</h2>
      {Object.keys(imagesBahirdar).map((imageName, index) => (
        <img key={index} src={imagesBahirdar[imageName]} alt={imageName} />
      ))}



      <h2>Semen</h2>
      {Object.keys(imagesSemen).map((imageName, index) => (
        <img key={index} src={imagesSemen[omo]} alt={imageName} />
      ))}
    </div>
    </>
  );
};

export default MyComponent;
