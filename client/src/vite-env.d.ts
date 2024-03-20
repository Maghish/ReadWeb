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

interface HomeBodyComponentProps {
  userCred?: any;
}

export {
  NavbarComponentProps,
  UserProfileButtonComponentProps,
  SignupFormComponentProps,
  LoginFormComponentProps,
  HomeBodyComponentProps
};
