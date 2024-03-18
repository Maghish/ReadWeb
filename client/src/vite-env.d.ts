/// <reference types="vite/client" />

interface NavbarComponentProps {
  page: "Guest" | "Home" | "About" | "Explore";
  userCred?: any;
}

interface UserProfileButtonComponentProps {
  userCred: any;
}

interface SignupFormComponentProps {
  signupFormState: (v: boolean) => void;
}

interface LoginFormComponentProps {
  loginFormState: (v: boolean) => void;
}

export {
  NavbarComponentProps,
  UserProfileButtonComponentProps,
  SignupFormComponentProps,
  LoginFormComponentProps
};
