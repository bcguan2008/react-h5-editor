import React from 'react';
import PropertyInput from './PropertyInput';

export default function factory(componentId,property){
  if(!property){
    throw 'need property'
  }

  switch(property.propertyType){
    case 'input':
      return <PropertyInput componentId={componentId} key={property.id} property={property} />
    default :
      return <PropertyInput componentId={componentId} key={property.id} property={property} />  
  }
}