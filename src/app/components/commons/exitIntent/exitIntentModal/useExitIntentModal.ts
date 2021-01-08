import { useState, useEffect } from 'react';
import { ExitIntent } from '../exitIntentLogic';
import * as Cookie from 'js-cookie';

const exitIntentModalSeenCookieString = 'exit_intent_modal_seen';
const inEightMinutes = new Date(new Date().getTime() + 8 * 60 * 1000);

export const useExitIntent = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [screen, setScreen] = useState<number>(0);
  const [showPopupIntent, setShowPopupIntent] = useState<boolean>(false);

  const onSuccessFulSubscription = (value: boolean) =>
    value === true ? setScreen(1) : null;

  const onSubscriptionExit = () => {
    setShowModal(false);
    return Cookie.set(exitIntentModalSeenCookieString, 'true', {
      expires: inEightMinutes,
    });
  };

  useEffect(() => {
    const removeExitIntent = ExitIntent({
      threshold: 30,
      eventThrottle: 100,
      onExitIntent: () => (showPopupIntent ? setShowModal(true) : null),
    });

    return () => {
      removeExitIntent();
    };
  }, [showModal, showPopupIntent]);

  useEffect(() => {
    if (!Cookie.get(exitIntentModalSeenCookieString)) {
      const timer = setTimeout(() => {
        setShowPopupIntent(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return {
    showModal,
    setShowModal,
    onSubscriptionExit,
    screen,
    onSuccessFulSubscription,
  };
};
