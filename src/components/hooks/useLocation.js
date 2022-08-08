import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";

const useLocation = () => {
    const location = useLocation();
    const pathname = location.pathname;
  return (
    <div>useLocation</div>
  )
}

export default useLocation