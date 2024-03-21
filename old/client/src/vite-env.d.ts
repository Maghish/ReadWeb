/// <reference types="vite/client" />

interface NavbarComponentProps {
  page: "Guest" | "Home" | "About" | "Explore";
  username?: string;
}

interface UserProfileButtonComponentProps {
  username: string;
}

interface UserProfileButtonMenuComponentProps {
  username: string;
  setVisibility: (v: boolean) => void;
}

interface SignupFormComponentProps {
  signupFormState: (v: boolean) => void;
}

interface LoginFormComponentProps {
  loginFormState: (v: boolean) => void;
}

interface HomeBodyComponentProps {
  userCred?: any;
}

export {
  NavbarComponentProps,
  UserProfileButtonComponentProps,
  UserProfileButtonMenuComponentProps,
  SignupFormComponentProps,
  LoginFormComponentProps,
  HomeBodyComponentProps
};
