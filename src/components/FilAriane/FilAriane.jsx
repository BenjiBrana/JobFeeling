'use client';
import React, { useEffect, useState } from 'react';

export default function FilAriane() {
  const [segments, setSegments] = useState([]);

  useEffect(() => {
    setSegments(window.location.pathname.split('/'));
  }, []);

  return (
    <div>
      {segments.map((path, index) => (
        <div id="filAriane" key={index}>
          <span>{path !== '' ? path : 'accueil'}</span>
          {index !== segments.length - 1 && <span>/</span>}
        </div>
      ))}
    </div>
  );
}
