"use client";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Passwords do not match");
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
    });

    const resJSON = await res.json();
    console.log(resJSON);
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">Register</h1>
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Username
        </label>
        <input
          id="username"
          type="text"
          {...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          })}
          placeholder="Enter your username"
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full placeholder:text-zinc-500"
        />

        {errors.username && (
          <span className="text-red-500 text-sm">
            {errors.username.message}
          </span>
        )}

        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
          })}
          placeholder="Enter your email"
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full placeholder:text-zinc-500"
        />

        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
          })}
          placeholder="Enter your password"
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full placeholder:text-zinc-500"
        />

        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

        <label
          htmlFor="confirmPassword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirm Password
        </label>

        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: {
              value: true,
              message: "Confirm password is required",
            },
          })}
          placeholder="Confirm password"
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full placeholder:text-zinc-500"
        />

        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
