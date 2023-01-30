import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { isEmail } from "../../utils/validations";
import logo from "../../next.svg";
import { AuthLayout } from "@/components/layouts/AuthLayout";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <AuthLayout title="Registro de usuario">
      <div className="card my-5 shadow-lg">
        <form className="card-body cardbody-color p-lg-5" noValidate>
          <div className="text-center">
            <Image
              src={logo}
              className="img-fluid profile-image-pic img-thumbnail my-3"
              width={200}
              alt="profile"
            />
          </div>

          <div className="form-group py-1 fs-5">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              {...register("name", {
                required: "Ingrese un valor válido",
              })}
            />
          </div>
          {!!errors.name ? (
            <div className="mb-4">
              <span className="text-danger">{errors.name.message}</span>
            </div>
          ) : (
            <div className="mb-4"></div>
          )}

          <div className="form-group py-1 fs-5">
            <label>Correo</label>
            <input
              type="email"
              className="form-control"
              placeholder="Correo"
              {...register("email", {
                required: "Ingrese un valor válido",
                validate: isEmail,
              })}
            />
          </div>
          {!!errors.email ? (
            <div className="mb-4">
              <span className="text-danger">{errors.email.message}</span>
            </div>
          ) : (
            <div className="mb-4"></div>
          )}

          <div className="form-group py-1 fs-5">
            <label>Confirmar Correo</label>
            <input
              type="email"
              className="form-control"
              placeholder="Confirmar Correo"
              {...register("confemail", {
                required: "Ingrese un valor válido",
                validate: (value) => {
                  if (value !== watch("email")) return "El correo no coincide";
                },
              })}
            />
          </div>
          {!!errors.confemail ? (
            <div className="mb-4">
              <span className="text-danger">{errors.confemail.message}</span>
            </div>
          ) : (
            <div className="mb-4"></div>
          )}

          <div className="form-group py-1 fs-5">
            <label>Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Contraseña"
              {...register("password", {
                required: "Ingrese un valor válido",
              })}
            />
          </div>
          {!!errors.password ? (
            <div className="mb-4">
              <span className="text-danger">{errors.password.message}</span>
            </div>
          ) : (
            <div className="mb-4"></div>
          )}

          <div className="form-group py-1 fs-5">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control "
              placeholder="Confirmar Contraseña"
              {...register("confpassword", {
                required: "Ingrese un valor válido",
                validate: (value) => {
                  if (value !== watch("password"))
                    return "La contraseña no coincide";
                },
              })}
            />
          </div>
          {!!errors.confpassword ? (
            <div className="mb-4">
              <span className="text-danger">{errors.confpassword.message}</span>
            </div>
          ) : (
            <div className="mb-4"></div>
          )}

          {/* {showError ? (
            <div className="">
              <p className="text-danger fs-5">{showMessage}</p>
            </div>
          ) : (
            <></>
          )} */}

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary px-5 mb-5 w-100 fs-4"
            >
              Crear Cuenta
            </button>
          </div>
          <div
            id="emailHelp"
            className="form-text text-center mb-5 text-dark fs-5"
          >
            ¿Ya estás registrado?{" "}
            <Link href="/auth/login" className="text-dark fw-bold">
              {" "}
              Inicia Sesión
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
