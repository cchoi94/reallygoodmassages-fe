import { useState, useEffect } from 'react';
import { ExitIntent } from '../exitIntentLogic';
import * as Cookie from 'js-cookie';

const exitIntentModalSeenCookieString = 'exit_intent_modal_seen';
const inFifteenMinutes = new Date(new Date().getTime() + 5 * 60 * 1000);

export const useExitIntent = () => {
  const [showModal, setShowModal] = useState(false);
  const [screen, setScreen] = useState<number>(0);

  const onSuccessFulSubscription = (value: boolean) =>
    value === true ? setScreen(1) : null;

  useEffect(() => {
    const removeExitIntent = ExitIntent({
      threshold: 30,
      eventThrottle: 100,
      onExitIntent: () => {
        setShowModal(true);
      },
    });

    return () => {
      removeExitIntent();
    };
  }, [showModal]);

  useEffect(() => {
    if (showModal) {
      Cookie.set(exitIntentModalSeenCookieString, 'true', {
        expires: inFifteenMinutes,
      });
    }
  }, [showModal]);

  return {
    showModal,
    setShowModal,
    screen,
    onSuccessFulSubscription,
  };
};
