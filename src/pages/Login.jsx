import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
const Login = () => {
  return (
    <div>
      <h1>Login page</h1>
      <form>
        <MyInput type="text" placeholder="enter your login" />
        <MyInput type="passsowrd" placeholder="enter your password" />
        <MyButton>Log in</MyButton>
      </form>
    </div>
  );
};
export default Login;
