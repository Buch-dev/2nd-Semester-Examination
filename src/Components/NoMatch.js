import React from 'react'
import { Helmet } from "react-helmet-async";

export const NoMatch = () => {
  return (
    <>
      <Helmet>
        <title>Page 404</title>
        <meta name="description" content="Page not found" />
        <link rel="canonical" href="*" />
      </Helmet>
      <h1>404</h1>
      <div>Page not found!</div>
    </>
  )
}
