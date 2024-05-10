import React from 'react';

export default function Card({ secCardName, children }) {
  return (
    <article className={secCardName}>
      {children}
    </article>
  );
}
