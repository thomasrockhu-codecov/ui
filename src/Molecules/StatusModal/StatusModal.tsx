import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Button, Flexbox, Modal, Spinner, Typography } from '../..';
import { Props } from './StatusModal.types';

const CenterAlignedTypography = styled(Typography)`
  text-align: center;
`;

const StatusModal: React.FC<Props> = ({
  id,
  loading = false,
  status = '',
  onClose = null,
  options = {},
  buttonText = null,
}) => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = useCallback(() => {
    if (onClose) onClose();
    setShowModal(false);
  }, [onClose, setShowModal]);

  const closeModalWithTrack = useCallback(() => {
    if (onClose) onClose();
    setShowModal(false);
  }, [onClose, setShowModal]);

  useEffect(() => {
    if (loading) {
      setShowModal(true);
    }
    if (status) {
      setShowModal(true);
    }
  }, [loading, status]);

  const { title, text, icon } = options[status] || {};

  return (
    <Modal
      open={showModal}
      onClose={closeModalWithTrack}
      hideClose
      closeOnBackdropClick
      isStatusModal
      fullScreenMobile={false}
    >
      <Box pt={7} pb={7} px={2} sm={{ px: 0, pb: 0, pt: 5 }}>
        <Flexbox container direction="column" alignItems="center" gutter={6} sm={{ gutter: 7 }}>
          {loading && <Spinner id={`${id}-spinner`} size={23} />}
          {status && (
            <>
              {icon}
              <Flexbox container direction="column" alignItems="center" gutter={2}>
                {title && <CenterAlignedTypography type="title2">{title}</CenterAlignedTypography>}
                {text && <CenterAlignedTypography type="primary">{text}</CenterAlignedTypography>}
                <Flexbox item>
                  <Box pt={2}>
                    {buttonText && (
                      <Button size="l" onClick={closeModal}>
                        {buttonText}
                      </Button>
                    )}
                  </Box>
                </Flexbox>
              </Flexbox>
            </>
          )}
        </Flexbox>
      </Box>
    </Modal>
  );
};

export default StatusModal;
