import React, { children, Fragment } from 'react'

export default function Guest({children}) {
  return (
    <Fragment>
        <div className="mt-4">
            {children}
        </div>
    </Fragment>
  )
}
