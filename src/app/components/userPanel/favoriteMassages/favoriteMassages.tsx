import React from 'react';
import { AuthWrapper } from 'app/components/auth/authWrapper/authWrapper';
import { Link } from 'react-router-dom';
import { Path } from 'app/Path';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import classNames from 'classnames';
import { useFavoriteMassages } from './useFavoriteMassages';

import cls from './favoriteMassages.module.scss';
import sharedCls from '../userPanel.module.scss';

interface OwnProps {
  toggleUserPannel: (isOpen: boolean) => void;
  favoriteMassages: [];
}

export const FavoriteMassages: React.FC<OwnProps> = ({
  toggleUserPannel,
  favoriteMassages,
}) => {
  const {
    isAccordionOpen,
    setIsAccordionOpen,
    editMassage,
    deleteMassage,
  } = useFavoriteMassages();
  return (
    <AuthWrapper wasSigninClicked={isOpen => toggleUserPannel(isOpen)}>
      <Accordion defaultActiveKey='0' className={sharedCls.sectionContainer}>
        <Card>
          <Accordion.Toggle
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            eventKey='0'
            className={sharedCls.cardHeader}
          >
            <p>Favourited massages</p>
            <i
              className={classNames('fas fa-chevron-right', cls.chevron, {
                [cls.closedChevron]: !isAccordionOpen,
              })}
            ></i>
          </Accordion.Toggle>
          {favoriteMassages.length !== 0 ? (
            favoriteMassages.map(({ name, link, id }) => (
              <Link to={`${Path.THERAPY}${link}`}>
                <Accordion.Collapse eventKey='0'>
                  <div className={cls.massageActionContainer}>
                    <Card.Body className={cls.massageName}>{name}</Card.Body>
                    <div className={cls.editDeleteContainer}>
                      <i
                        className={classNames('fa fa-pen', cls.edit)}
                        aria-hidden='true'
                        onClick={() => editMassage(id)}
                      ></i>
                      <i
                        className='fa fa-trash'
                        aria-hidden='true'
                        onClick={() => deleteMassage(id, name)}
                      ></i>
                    </div>
                  </div>
                </Accordion.Collapse>
              </Link>
            ))
          ) : (
            <p className={cls.noFavoriteMassages}>
              You have no favorited massages
            </p>
          )}
        </Card>
      </Accordion>
    </AuthWrapper>
  );
};
