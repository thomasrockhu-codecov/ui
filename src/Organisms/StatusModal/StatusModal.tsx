import React, { useCallback, useEffect, useState } from 'react';
import { Box, Button, Flexbox, Modal, Spinner, Typography, OldIcon } from '../..';
import { Props } from './StatusModal.types';
import { isFunction } from '../../common/utils';

const StatusModal: React.FC<Props> = ({ id = '', loading = false, onClose, options = {} }) => {
  const [showModal, setShowModal] = useState(false);

  const { status, title, text, textConfirm, textCancel } = options || {};

  const closeModal = useCallback(
    (confirmed) => {
      if (isFunction(onClose)) {
        onClose(confirmed);
      }
      setShowModal(false);
    },
    [onClose, setShowModal],
  );

  useEffect(() => {
    if (loading) {
      setShowModal(true);
    }
    if (status) {
      setShowModal(true);
    }
  }, [loading, status]);

  return (
    <Modal
      open={showModal}
      onClose={onClose}
      hideClose
      closeOnBackdropClick
      isStatusModal
      fullScreenMobile={false}
    >
      <Box pt={7} pb={7} px={2} sm={{ px: 0, pb: 0, pt: 5 }}>
        <Flexbox
          container
          direction="column"
          alignItems="center"
          gutter={6}
          sm={{ gutter: 7 }}
          justifyContent="center"
        >
          {loading && <Spinner id={`${id}-spinner`} size={23} />}
          {status === 'SUCCESS' && (
            <OldIcon.CheckMarkCircle fill={(t) => t.color.positive} size={23} />
          )}
          {status === 'ERROR' && <OldIcon.CrossCircle fill={(t) => t.color.negative} size={23} />}
          {status === 'WARNING' && (
            <OldIcon.WarningTriangle color={(t) => t.color.warning} size={23} />
          )}
          <Flexbox container direction="column" alignItems="center" gutter={2}>
            {title && (
              <Typography type="title2" textAlign="center">
                {title}
              </Typography>
            )}
            {text && (
              <Typography type="primary" textAlign="center">
                {text}
              </Typography>
            )}
            {textConfirm && !textCancel && (
              <Flexbox item>
                <Box pt={2}>
                  {textConfirm && (
                    <Button size="l" onClick={() => closeModal(true)}>
                      {textConfirm}
                    </Button>
                  )}
                </Box>
              </Flexbox>
            )}
            {textConfirm && textCancel && (
              <Flexbox container item justifyContent="center" gutter={2}>
                <Flexbox item flex="0">
                  <Box pt={2}>
                    {textCancel && (
                      <Button size="l" variant="secondary" onClick={() => closeModal(false)}>
                        {textCancel}
                      </Button>
                    )}
                  </Box>
                </Flexbox>
                <Flexbox item flex="0">
                  <Box pt={2}>
                    {textConfirm && (
                      <Button size="l" variant="primary" onClick={() => closeModal(true)}>
                        {textConfirm}
                      </Button>
                    )}
                  </Box>
                </Flexbox>
              </Flexbox>
            )}
          </Flexbox>
        </Flexbox>
      </Box>
    </Modal>
  );
};

export default StatusModal;
