import React from 'react'
import { useLocation } from 'react-router-dom';
import { Content } from '../../../style/styled-components/ui';

export default function OneProductPage() {
  const {id} = useLocation();

  console.log(id);

  return (
    <div className='oneProduct'>OneProductPage</div>
  )
}