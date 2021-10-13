import  { useContext } from 'react';
import { AllDataContext } from '../context/AllDataProvider';

const useData = () => {
  return useContext(AllDataContext);
};

export default useData;