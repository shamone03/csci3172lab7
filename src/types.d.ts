type LocationData<T> = {
    data: T,
    isActive: boolean
}

type LocationContext = {
    location: string
}

type NavigationContext = {
    navigate: (route: string) => void
}

type Route = {
    route: RegExp, 
    element: JSX.Element, 
    loader?: () => any, 
    action?: (request: Request) => void
}