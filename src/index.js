import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';

import { WizardProvider } from './context/WizardContext';
import { DataProvider } from './context/DataContext';
import { initialState } from './config/initialState';
import { reducer } from './reducers/';

import { useWizard } from './hooks/useWizard';

import { Step } from './components/Step/Step';
import { Preview } from './components/Preview/Preview';
import { PrintPlacement } from './components/Wizard/PrintPlacement/PrintPlacement';
import { Graphic } from './components/Wizard/Graphic/Graphic';
import { PrintStyle } from './components/Wizard/PrintStyle/PrintStyle';

import './styles/index.scss';
import styles from './index.scss';

const PrintWizard = () => {
  const { step, goToNextStep, goToPrevStep } = useWizard();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataProvider value={{ state, dispatch }}>
      <WizardProvider value={{ goToNextStep, goToPrevStep, step }}>
        <div className={`container ${styles['view']}`}>
          <main>
            <h2>Choose your T-shirt style</h2>
            {(() => {
              switch (step) {
                case 1:
                  return (
                    <Step>
                      <PrintPlacement />
                    </Step>
                  );
                case 2:
                  return (
                    <Step>
                      <Graphic />
                    </Step>
                  );
                case 3:
                  return (
                    <Step>
                      <PrintStyle />
                    </Step>
                  );
                default:
                  return null;
              }
            })()}
          </main>
          <Preview />
        </div>
      </WizardProvider>
    </DataProvider>
  );
};

ReactDOM.render(<PrintWizard />, document.getElementById('root'));
