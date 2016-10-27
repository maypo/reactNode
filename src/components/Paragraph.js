import React from 'react';

const Paragraph = ({ text }) => (
  <div className="paragraph">
    <p>{text}</p>
  </div>
);

Paragraph.propTypes = {
  text: React.PropTypes.string,
};

export default Paragraph;
