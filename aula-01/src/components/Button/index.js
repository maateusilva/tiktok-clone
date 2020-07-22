import React from 'react';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import { Button } from './styles';

export default function NewButton() {
  return (
    <Button>
      <EntypoIcons name="plus" size={22} color="#000" />
    </Button>
  );
}
