import React, { useEffect, useState } from 'react'

const TruncatedContent = ({ content, maxLength }) => {

  const [text, setText] = useState('');
  // debugger
  useEffect(() => {
    content.length > maxLength ? setText(content.slice(0, maxLength)) : setText(content);
  }, [maxLength])

  return (
    <>
      {text} 
    </>
  )
}

export default TruncatedContent