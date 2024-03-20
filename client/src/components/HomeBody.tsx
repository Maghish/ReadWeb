import { HomeBodyComponentProps } from "../vite-env";

function HomeBody(props: HomeBodyComponentProps) {
  return (
    <>{props.userCred ? <p>{props.userCred.username}</p> : <p>Not logged in</p>}</>
  );
}
 
export default HomeBody;