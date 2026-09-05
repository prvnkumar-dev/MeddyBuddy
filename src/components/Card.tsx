import type { ReactElement, ReactNode } from "react"

interface Search {
    children: ReactNode,
    className: string
}
const Card = ({ children, className }: Search) => {
    return <>
        <div className={`border-1 border-gray-500 shadow-sm rounded-xl  ${className}`}>
            {children}
        </div>
    </>
}
export default Card