export default function PhotosCollection({ photos = [] }) {
  return (
    <div className="photo-collection" style={photoCollectionStyle}>
      {photos.map((value, index) => (
        <div className="image-wrapper" key={value.id}>
          <img
            src={value.urls.small}
            alt={value.urls.description}
            style={photoStyle}
          />
        </div>
      ))}
    </div>
  );
}

const photoCollectionStyle = {
  display: 'grid',
  padding: '40px',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridTemplateRows: 'auto',
  columnGap: '12px',
  rowGap: '12px',
};

const photoStyle = {
  width: '100%',
};
