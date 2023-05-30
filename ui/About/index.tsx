"use client"

import clsx from "clsx"
import {useEffect, useRef, useState} from "react"

export default function About({children}: {children: React.ReactNode}) {
  const aboutRef = useRef<HTMLParagraphElement>(null)
  const [isTruncated, setIsTruncated] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const expandText = isExpanded ? "See Less" : "See More"
  const expandIcon = isExpanded ? "expand_less" : "expand_more"

  useEffect(() => {
    const paragraph = aboutRef.current
    if (paragraph) {
      if (
        paragraph.offsetHeight < paragraph.scrollHeight ||
        paragraph.offsetWidth < paragraph.scrollWidth
      ) {
        setIsTruncated(true)
      } else {
        setIsTruncated(false)
      }
    }
  }, [children])

  return (
    <div className="p-6">
      <p ref={aboutRef} className={clsx({"line-clamp-6": !isExpanded})}>
        {children}
      </p>
      {isTruncated && (
        <div className="flex items-center flex-col">
          <div className="h-px bg-black w-full my-3"></div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="uppercase flex items-center"
          >
            {expandText}{" "}
            <span className="material-symbols-outlined">{expandIcon}</span>
          </button>
        </div>
      )}
    </div>
  )
}
