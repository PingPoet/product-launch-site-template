import React from "react"
import { useRemarkSync} from "react-remark"

const Card = ({ heading, headingMarkdown, children, childrenMarkdown }) => {
  heading = headingMarkdown ? useRemarkSync(headingMarkdown) : heading;
  children = childrenMarkdown ? useRemarkSync(childrenMarkdown) : children;
  return (
    <div className="col-md-6">
      <h2>{heading}</h2>
      {children}
    </div>
  )
}

export default Card
