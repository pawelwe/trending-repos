import React from 'react';
import { useCallback, useContext, useEffect } from 'react';
import ValidationContext from '../../../context/ValidationContext';
import DataContext from '../../../context/DataContext';
import { Product } from '../../Product/Product';
import tShirtImageFront from '../../../assets/t-shirt-front.jpg';
import tShirtImageBack from '../../../assets/t-shirt-back.jpg';
import styles from './PrintPlacement.scss';

export const PrintPlacement = React.memo(function printPlacement() {
  const {
    isStepValid,
    setIsStepValid,
    isStepTouched,
    setIsStepTouched,
  } = useContext(ValidationContext);

  const { state, dispatch } = useContext(DataContext);
  const { printPlacement } = state;

  useEffect(() => {
    setIsStepValid(printPlacement);
    setIsStepTouched(printPlacement);
  }, []);

  const pickGraphicPlacement = useCallback(
    placement => {
      setIsStepValid(true);
      setIsStepTouched(true);

      dispatch({
        type: 'setPrintPlacement',
        payload: placement,
      });

      dispatch({
        type: 'setPrice',
        payload: placement === 'both' ? 20 : 10,
      });
    },
    [printPlacement],
  );

  return (
    <div>
      <h4>Print placement</h4>
      <div className={styles['picker']}>
        <button
          onClick={() => pickGraphicPlacement('front')}
          className={printPlacement === 'front' ? styles['is-active'] : null}
        >
          <Product label="front" image={tShirtImageFront} alt="front" />
        </button>
        <button
          onClick={() => pickGraphicPlacement('back')}
          className={printPlacement === 'back' ? styles['is-active'] : null}
        >
          <Product label="back" image={tShirtImageBack} alt="back" />
        </button>
        <button
          onClick={() => pickGraphicPlacement('both')}
          className={printPlacement === 'both' ? styles['is-active'] : null}
        >
          <Product label="both" image={tShirtImageFront} alt="both" />
        </button>
      </div>
      <div className="error message">
        {!isStepValid && isStepTouched && <p>Please choose print placement!</p>}
      </div>
    </div>
  );
});
