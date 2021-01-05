import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name:any, params:any) {
  //@ts-ignore
  navigationRef.current?.navigate(name, params);
}

// add other navigation functions that you need and export them