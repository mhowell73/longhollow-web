import React from 'react';

import { useAuth, reset as resetAuth } from '../../../providers/AuthProvider';
import { Modal } from '../../../ui-kit';
import StepOne from './StepOne';

function GroupFilterModal(props = {}) {
  function render() {
    switch (0) {
      case 0: {
        return <StepOne />;
      }
      default: {
        return <StepOne />;
      }
    }
  }

  return (
    <Modal title="Filter" {...props}>
      {render()}
    </Modal>
  );
}

GroupFilterModal.propTypes = {
  ...Modal.propTypes,
};

export default GroupFilterModal;
