/// <reference types="vite/client" />

interface NavbarComponentProps {
  page: "Guest" | "Home" | "About" | "Explore";
  userCred?: any;
}

interface UserProfileButtonComponentProps {
  userCred: any;
}

interface UserProfileButtonMenuComponentProps {
  userCred: any;
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
