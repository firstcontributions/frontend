import { ReactNode } from "react";

export default function Container ({children}: any) {
    return (
        <div className="p-16">
            {children}
        </div>
    )
}