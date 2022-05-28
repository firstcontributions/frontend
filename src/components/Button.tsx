import { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
    handleClick?: () => void
}

const Button = ({children, handleClick}: ButtonProps) => {
    return(
        <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button