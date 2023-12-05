import React, { createContext } from 'react';
import { MakerListProvide } from '@/type';

const MakerListContext = createContext<MakerListProvide | null>(null);
export default MakerListContext;