import React, { useCallback, useEffect } from 'react';
import { useContext } from 'react';
import ValidationContext from '../../../context/ValidationContext';
import DataContext from '../../../context/DataContext';
import tShirtImageFront from '../../../assets/t-shirt-front.jpg';
import tShirtImageBack from '../../../assets/t-shirt-back.jpg';
import { Product } from '../../Product/Product';
import styles from './Graphic.scss';

export const Graphic = React.memo(function graphic() {
  const { setIsStepValid } = useContext(ValidationContext);

  const {
    state: {
      frontGraphicId,
      backGraphicId,
      printPlacement,
      frontGraphicStyle,
      backGraphicStyle,
    },
    dispatch,
  } = useContext(DataContext);

  useEffect(() => {
    setIsStepValid(true);
  }, []);

  const showPrevFrontGraphic = useCallback(
    () =>
      dispatch({
        type: 'setFrontGraphicId',
        payload: frontGraphicId > 1 ? frontGraphicId - 1 : 1,
      }),
    [frontGraphicId],
  );

  const showNextFrontGraphic = useCallback(
    () =>
      dispatch({
        type: 'setFrontGraphicId',
        payload: frontGraphicId + 1,
      }),
    [frontGraphicId],
  );

  const showPrevBackGraphic = useCallback(
    () =>
      dispatch({
        type: 'setBackGraphicId',
        payload: backGraphicId > 1 ? backGraphicId - 1 : 1,
      }),
    [backGraphicId],
  );

  const showNextBackGraphic = useCallback(
    () =>
      dispatch({
        type: 'setBackGraphicId',
        payload: backGraphicId + 1,
      }),
    [backGraphicId],
  );

  const showFront = printPlacement === 'front' || printPlacement === 'both';
  const showBack = printPlacement === 'back' || printPlacement === 'both';

  return (
    <div>
      <h4>Graphic</h4>
      <div className={styles['wrapper']}>
        {showFront && (
          <div>
            <Product
              label="front"
              image={tShirtImageFront}
              alt="front"
              showGraphic
              graphicId={frontGraphicId}
              graphicStyle={frontGraphicStyle}
            />
            <div className={styles['graphic-footer']}>
              <button onClick={showPrevFrontGraphic}>-</button>
              <button onClick={showNextFrontGraphic}>+</button>
            </div>
          </div>
        )}
        {showBack && (
          <div>
            <Product
              label="back"
              image={tShirtImageBack}
              alt="back"
              showGraphic
              graphicId={backGraphicId}
              graphicStyle={backGraphicStyle}
            />
            <div className={styles['graphic-footer']}>
              <button onClick={showPrevBackGraphic}>-</button>
              <button onClick={showNextBackGraphic}>+</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});
