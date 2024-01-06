import React from 'react';

function LabsLogo() {
  return (
    <div className="flex justify-center items-center mb-5">
      <img
        width="200"
        height="200"
        className="dark:block hidden dark:block"
        src={require('../../static/img/logo.png').default}
        alt="logo"
      />

      <img
        width="200"
        height="200"
        className="dark:hidden sm:block"
        src={require('../../static/img/logo.png').default}
        alt="logo"
      />
    </div>
  );
}

export default LabsLogo;
