import React, { useState } from 'react';
// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   console.log(email, password);
// };
const LoginForm = ({
  handleSubmit,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      data-testid="login-form" // most reliable way to identify a form element
      role="form"
    >
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        data-testid="email-input" // Added for easier testing
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>

      <p data-testid="email-value">{email}</p>
    </form>
  );
};

export default LoginForm;
