import React from 'react';
import {useCustomAlertStore} from '../store/CustomAlertStore';
import {CustomAlert} from '../components';

const CustomAlertProvider: React.FC = ({children}) => {
  const {visible, title, message, hideAlert} = useCustomAlertStore();

  return (
    <>
      {children}
      <CustomAlert
        visible={visible}
        title={title}
        message={message}
        onClose={hideAlert}
      />
    </>
  );
};

export default CustomAlertProvider;
