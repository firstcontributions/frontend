import React, { ReactNode } from "react";

type LayoutProps = {
sidebarContentLeft: ReactNode
 children: ReactNode
  sidebarContentRight: ReactNode
}

export default function Layout ({sidebarContentLeft, children, sidebarContentRight}: LayoutProps) {
    return (
        <div className="mx-auto bg-gray-100 p-4 px-20">
        <div className="grid grid-cols-9 gap-10">
            <aside className="col-span-2">
                {sidebarContentLeft}
            </aside>
            <main className="col-span-5">
                {children}
            </main>
            <aside className="col-span-2">
                {sidebarContentRight}
            </aside>
        </div>
        <div>
        </div>
        </div>
    )
}