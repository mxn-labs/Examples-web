import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { isEmail } from "../../utils/validations";
import { AuthContext } from "../context/AuthContext";
import logo from "../../logo.svg";

export const RegisterPage = () => {
  const [showError, setShowError] = useState(false);
  const [showMessage, setShowMessage] = useState("Error");
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onRegisterUser = async ({ name, email, password }) => {
    setShowError(false);

    const data = { name, email, password };

    const { hasError, message } = await registerUser(data);

    if (hasError) {
      setShowError(true);
      setShowMessage(message);
      setTimeout(() => setShowError(false), 3000);
      return;
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center text-dark mt-5">Registro de Usuario</h2>
          <div className="text-center mb-5 text-dark fs-5">React-Template</div>
          <div className="card my-5 shadow-lg">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={handleSubmit(onRegisterUser)}
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
                      if (value !== watch("email"))
                        return "El correo no coincide";
                    },
                  })}
                />
              </div>
              {!!errors.confemail ? (
                <div className="mb-4">
                  <span className="text-danger">
                    {errors.confemail.message}
                  </span>
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
                  <span className="text-danger">
                    {errors.confpassword.message}
                  </span>
                </div>
              ) : (
                <div className="mb-4"></div>
              )}

              {showError ? (
                <div className="">
                  <p className="text-danger fs-5">{showMessage}</p>
                </div>
              ) : (
                <></>
              )}

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
                <Link to="/login" className="text-dark fw-bold">
                  {" "}
                  Inicia Sesión
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
