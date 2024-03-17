/// <reference types="vite/client" />

interface NavbarComponentProps {
  page: "Guest" | "Home" | "About" | "Explore" 
  userCred?: any
}

interface UserProfileButtonComponentProps {
  userCred: any
}

export {
  NavbarComponentProps,
  UserProfileButtonComponentProps
}