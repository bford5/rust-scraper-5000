'use client'

// this is a utility component which helps with client-side vs server-side state management & rendering of data
// ex: if client registers component state as true, but server registers as false, this Hydrate component will handle loading state while client & server communicate before finalizing rendered state

import {ReactNode, useEffect, useState} from 'react'

export default function Hydrate({children}: {children: ReactNode}) {

    const [isHydrated, setIsHydrated] = useState(false)

    useEffect(() => {
        setIsHydrated(true)
    }, [])
    return (
        <>{isHydrated ? <>{children}</> : <div>Loading...</div>}</>
    )
}
// **** // TODO: create custom loading component to use instead of <div>loading</div>