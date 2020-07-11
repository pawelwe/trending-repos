import React from 'react';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { Product } from '../Product/Product';
import styles from './Preview.scss';
import tShirtImageFront from '../../assets/t-shirt-front.jpg';
import tShirtImageBack from '../../assets/t-shirt-back.jpg';

export const Preview = React.memo(function preview() {
  const {
    state: {
      price,
      printPlacement,
      frontGraphicId,
      backGraphicId,
      frontGraphicStyle,
      backGraphicStyle,
    },
  } = useContext(DataContext);

  const showFront = printPlacement === 'front' || printPlacement === 'both';
  const showBack = printPlacement === 'back' || printPlacement === 'both';

  return (
    <aside className={`${styles['preview']} fade-in`}>
      <h5>Preview</h5>
      <p>Price: {price}</p>
      <p>Front graphic: {showFront ? frontGraphicId : '-'}</p>
      <p>Front graphic style: {frontGraphicStyle}</p>
      <p>Back graphic: {showBack ? backGraphicId : '-'} </p>
      <p>Back graphic style: {backGraphicStyle}</p>
      <hr />
      <div className={styles['product']}>
        {showFront && (
          <Product
            image={tShirtImageFront}
            showGraphic
            alt="front"
            graphicId={frontGraphicId}
            graphicStyle={frontGraphicStyle}
          />
        )}
        {showBack && (
          <Product
            image={tShirtImageBack}
            showGraphic
            alt="back"
            graphicId={backGraphicId}
            graphicStyle={backGraphicStyle}
          />
        )}
      </div>
    </aside>
  );
});
