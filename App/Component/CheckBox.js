import React from 'react';
import {Image} from 'react-native';
import {Images} from '../Constant/Images';

const CheckBox = ({isChecked}) => {
  if (isChecked) {
    return <Image style={{height: 30, width: 30}} source={Images.checkB} />;
  } else {
    return (
      <Image
        style={{height: 23, width: 25, borderRadius: 6}}
        source={Images.uncheckB}
      />
    );
  }
};

export {CheckBox};
