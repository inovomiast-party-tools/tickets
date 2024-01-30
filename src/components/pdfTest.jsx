"use client"
import React, { useState, useEffect } from 'react'

const PdfTest = () => {
  const [data, setData] = useState(null);

  return (
    <div>
        <button>
            Generate PDF
        </button>
        <div id='pdf-content'>{data}</div>
    </div>
  )
}

export default PdfTest
