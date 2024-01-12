"use client";
import { useEffect } from 'react';

const NotFound = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <h1>not found page</h1>
  );
};

export default NotFound;
