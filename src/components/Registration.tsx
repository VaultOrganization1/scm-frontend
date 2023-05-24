import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import { ChangeEvent, useState } from "react";
import { signUp } from "../services/user-service";

const Registration = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    imageUrl: "",
    enabled: true,
    about: "",
  });

  const [error, setError] = useState({ errors: {}, isError: false });

  //   useEffect(() => {
  //     console.log(userData);
  //   }, [userData]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    property: string
  ) => {
    setUserData({ ...userData, [property]: event.target.value });
  };

  const submitForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (error.isError) {
      return;
    }

    // call server API for sending the data
    signUp(userData)
      .then((resp: any) => {
        console.log(resp);
        console.log("success log");
      })
      .catch((error: any) => {
        console.log(error);
        setError({
          errors: error,
          isError: true,
        });
      });

    alert("Registered Successfully");
    window.location.replace("/");
  };

  return (
    <>
      <section className="vb-100">
        {/* {JSON.stringify(userData)} */}
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-itmes-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black border-0" id="card">
                <div className="card-body p-md-3">
                  <div className="row justify-content-center">
                    <div
                      className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                      id="signUpForm"
                    >
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={submitForm}>
                        <div className="d-flex flex-row align-itmes-center mb-4">
                          <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              placeholder="Your Name"
                              required
                              onChange={(e) => handleChange(e, "name")}
                              value={userData.name}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-itmes-center mb-4">
                          <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="email"
                              className="form-control"
                              placeholder="Your Email"
                              required
                              onChange={(e) => handleChange(e, "email")}
                              value={userData.email}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-itmes-center mb-4">
                          <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              placeholder="Your Password"
                              required
                              onChange={(e) => handleChange(e, "password")}
                              value={userData.password}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-itmes-center mb-4">
                          <i className="fa fa-image fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="file"
                              id="image"
                              className="form-control"
                              accept=".png,.jpg,.jpeg,"
                              onChange={(e) => handleChange(e, "imageUrl")}
                              value={userData.imageUrl}
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-itmes-center mb-4">
                          <i className="fa fa-info-circle fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <textarea
                              id="about"
                              name="about"
                              rows={4}
                              cols={40}
                              maxLength={500}
                              onChange={(e) => handleChange(e, "about")}
                              value={userData.about}
                            />
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="checkbox"
                            required
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-3 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                        <div className="d-flex justify-content-center mx-3 mb-3 mb-lg-4">
                          <p className="medium mt-2 pt-1 mb-0">
                            Do you have an account?{" "}
                            <a href="/" className="link-danger h5">
                              Login
                            </a>
                          </p>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                    {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <p>
                        Already an have Account Log in <a href="/login">here</a>
                      </p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
