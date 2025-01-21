import { NavLink } from 'react-router-dom';

export function SignIn() {
  return (
    <section className="h-screen">
      <h1>vc está na pagina de login</h1>
      <NavLink to="signup">Sign Up</NavLink>
    </section>
  );
}
