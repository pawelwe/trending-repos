import React, { useCallback, useEffect } from 'react';
import { useContext } from 'react';
import ValidationContext from '../../../context/ValidationContext';
import DataContext from '../../../context/DataContext';
import tShirtImageFront from '../../../assets/t-shirt-front.jpg';
import tShirtImageBack from '../../../assets/t-shirt-back.jpg';
import { Product } from '../../Product/Product';
import styles from './PrintStyle.scss';

const styleOptions = [
  {
    text: 'normal',
    value: '',
  },
  {
    text: 'gray scale',
    value: 'grayscale',
  },
  {
    text: 'blur',
    value: 'blur',
  },
];

export const PrintStyle = React.memo(function printStyle() {
  const { setIsStepValid } = useContext(ValidationContext);

  const {
    state: {
      frontGraphicStyle,
      backGraphicStyle,
      printPlacement,
      frontGraphicId,
      backGraphicId,
    },
    dispatch,
  } = useContext(DataContext);

  useEffect(() => {
    setIsStepValid(true);
  }, []);

  const changeFrontGraphicStyle = useCallback(
    style =>
      dispatch({
        type: 'setFrontGraphicStyle',
        payload: style,
      }),
    [frontGraphicStyle],
  );

  const changeBackGraphicStyle = useCallback(
    style =>
      dispatch({
        type: 'setBackGraphicStyle',
        payload: style,
      }),
    [backGraphicStyle],
  );

  const showFront = printPlacement === 'front' || printPlacement === 'both';
  const showBack = printPlacement === 'back' || printPlacement === 'both';

  return (
    <div>
      <h4>Print Style</h4>
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
              <form>
                {styleOptions.map(option => {
                  return (
                    <label key={option.text}>
                      <input
                        onChange={e => changeFrontGraphicStyle(e.target.value)}
                        type="radio"
                        value={option.value}
                        checked={option.value === frontGraphicStyle}
                      />
                      {option.text}
                    </label>
                  );
                })}
              </form>
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
            />
            <div className={styles['graphic-footer']}></div>
          </div>
        )}
      </div>
    </div>
  );
});
