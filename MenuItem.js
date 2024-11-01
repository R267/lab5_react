import React from 'react';

const MenuItem = ({ text, url }) => {
  const isExternalLink = url && !url.startsWith(window.location.origin);

  return (
    <li>
      {url ? (
        <a href={url} target={isExternalLink ? "_blank" : "_self"} rel={isExternalLink ? "noopener noreferrer" : ""}>
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </li>
  );
};

export default MenuItem;