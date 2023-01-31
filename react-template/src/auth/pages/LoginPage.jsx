import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { isEmail } from "../../utils/validations";
import { AuthContext } from "../context/AuthContext";
import logo from "../../logo.svg";

export const LoginPage = () => {
  const [showError, setShowError] = useState(false);
  const { loginUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = async ({ email, password }) => {
    setShowError(false);
    const isValidLogin = await loginUser(email, password);
    if (!isValidLogin) {
      setShowError(true);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Iniciar Sesión</h2>
          <div className="text-center mb-5 text-dark fs-5">React-Template</div>
          <div className="card my-5 shadow-lg">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={handleSubmit(onLogin)}
              noValidate
            >
              <div className="text-center">
                <img
                  src={logo}
                  className="img-fluid profile-image-pic img-thumbnail my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              {showError ? (
                <div className="">
                  <p className="text-danger text-center fs-5">
                    Error al iniciar sesión *{" "}
                  </p>
                </div>
              ) : (
                <></>
              )}

              <div className="form-group fs-5">
                <label>Correo</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresa tu correo"
                  {...register("email", {
                    required: "Ingrese un correo válido",
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

              <div className="form-group fs-5">
                <label htmlFor="password">Contraseña</label>
                <input
                  className="form-control"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  {...register("password", {
                    required: "Ingrese una contraseña válida",
                    minLength: {
                      value: 6,
                      message: "Mínimo 6 caracteres",
                    },
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

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5 mb-5 w-100 fs-4"
                >
                  Ingresar
                </button>
              </div>
              <div
                id="emailHelp"
                className="form-text text-center mb-5 text-dark fs-5"
              >
                ¿No estás registrado?{" "}
                <Link to="/login/register" className="text-dark fw-bold">
                  {" "}
                  Crea una cuenta
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
