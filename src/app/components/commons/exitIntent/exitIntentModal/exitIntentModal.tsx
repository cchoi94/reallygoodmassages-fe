import React from 'react';
import { useExitIntent } from './useExitIntentModal';
import Modal from 'react-bootstrap/Modal';
import classNames from 'classnames';
import StayInTheLoop from 'app/assets/images/texts/stayInTheLoop.svg';

import cls from './exitIntentModal.module.scss';
import { Subscribe } from '../../subscribe/subscribe';

const screenArray = [
  ({ onSuccessFulSubscription }: any) => (
    <>
      <Modal.Header className={cls.header}>
        <Modal.Title className={classNames(cls.title, 'w-100')}>
          <img src={StayInTheLoop} alt='stay in the loop text' />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={classNames(cls.body, 'w-100')}>
        Sign up so you never miss out when we add new therapy techniques, tips ,
        knowledge drop and Exclusive offers{' '}
        <span role='img' aria-label='wink emoji'>
          😉
        </span>
        .
      </Modal.Body>
      <Modal.Footer className={cls.footer}>
        <Subscribe onSuccess={onSuccessFulSubscription} />
      </Modal.Footer>
    </>
  ),
  ({ setShowModal }: any) => (
    <>
      <Modal.Body className={classNames(cls.body, cls.thankYouBody, 'w-100')}>
        You are signed up, see you in your mailbox.
        <span role='img' aria-label='heart emoji'>
          ♥️
        </span>
      </Modal.Body>
      <Modal.Footer className={cls.footer}>
        <button
          onClick={() => setShowModal(false)}
          className={classNames('btn btn-primary', cls.goHomeBtn)}
        >
          Go to home
        </button>
      </Modal.Footer>
    </>
  ),
];

export const ExitIntentModal: React.FC = () => {
  const {
    screen,
    onSuccessFulSubscription,
    showModal,
    setShowModal,
    onSubscriptionExit,
  } = useExitIntent();

  return (
    <Modal
      contentClassName={cls.container}
      show={showModal}
      centered
      backdrop='static'
      backdropClassName={cls.modalBackDrop}
      onHide={() => setShowModal(false)}
    >
      <button
        className={classNames(cls.closeBtn, 'btn')}
        onClick={() => onSubscriptionExit()}
      >
        x
      </button>
      {screenArray[screen]({ onSuccessFulSubscription, setShowModal })}
    </Modal>
  );
};
