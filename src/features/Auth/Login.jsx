import { useEffect, useState } from 'react';
import z from 'zod/v4';
import { validateForm } from '../../utils/formValidation';
import { useAuthContext } from './AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const apiUrl = import.meta.env.VITE_API_URL;

const validationSchema = z
  .object({
    email: z.email('Please provide a valid email address.'),
    password: z.string().min(6, 'Your password needs to be at least 6 characters long.'),
  });

export function Login() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState(null);
  const { user, login } = useAuthContext();

  useEffect(() => {
    if(user) {
      navigate('/');
      return;
    }
  }, [user, navigate]);
  

  function handleInputChange(e) {
    // const newFormValues = {...formValues};
    // const inputName = e.target.name;
    // const inputValue = e.target.value;

    // newFormValues[inputName] = inputValue;
    // setFormValues(newFormValues);

    const newFormValues = { ...formValues, [e.target.name]: e.target.value };

    if(errors) {
      const newErrors = validateForm(newFormValues, validationSchema);
      setErrors(newErrors);
    }

    setFormValues(newFormValues);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // const form = e.target;
    // const data = new FormData(form);
    // const dataAsObject = Object.fromEntries(data.entries());
    
    const dataAsObject = {...formValues};
    const errors = validateForm(dataAsObject, validationSchema);
    if (errors) {
      setErrors(errors);
      return;
    }

    setErrors(null);

    const response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      body: JSON.stringify(dataAsObject),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(async (res) => {
      const data = await res.json();
      if(!res.ok) {
        if(res.status === 400) {
          if(typeof data === 'string') {
            toast.error(data);
          }
        }
        throw new Error(data);
      }
      return data;
    });

    login(response);
    toast.success('You have been logged in successfully!');
  }

  return (
    <form className="brandForm" onSubmit={handleSubmit} noValidate>
      <h1 className="fullGridWidth">Login</h1>

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      {errors?.email && <p className="inputError">{errors.email[0]}</p>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formValues.password}
        onChange={handleInputChange}
      />
      {errors?.password && <p className="inputError">{errors.password[0]}</p>}

      <button type="submit" className="secondGridColumn startOfColumn btn">
        Login
      </button>
    </form>
  );
}
