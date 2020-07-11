import React from 'react';
import styles from './Product.scss';

export const Product = React.memo(function product({
  label = null,
  image,
  alt,
  showGraphic = false,
  graphicId = 1,
  graphicStyle = null,
}) {
  return (
    <div className={styles['product']}>
      <img src={image} alt={alt} />
      {showGraphic && (
        <img
          src={`https://picsum.photos/id/${graphicId}/200/200${
            graphicStyle ? `?${graphicStyle}` : ``
          }`}
        />
      )}
      {label && <span>{label}</span>}
    </div>
  );
});
