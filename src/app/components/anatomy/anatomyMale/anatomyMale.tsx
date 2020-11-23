import React from 'react';
const anatomyMale = require('./index.html');

export const AnatomyMale: React.FC = () => (
  <div dangerouslySetInnerHTML={{ __html: anatomyMale }} />
);
