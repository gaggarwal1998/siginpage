import "./index.css";
import { useEffect, useRef, useState } from "react";
import eyeopen from "./assets/eye.svg";
import eyeslash from "./assets/eyeclose.svg";
import earth from "./assets/earth.svg";
import alert from "./assets/alert.svg";

const seeOptions = [
  { name: "Get useful tips, inspiration, and offers via e-communication." },
  {
    name: "Tailor Typeform to my needs based on my activity.See Privacy Policy",
  },
  {
    name: "Enrich my data with select third parties for more relevant content.See Privacy Policy",
  },
];

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [seeoptions, setIsSeeOptions] = useState(false);
  const [lang, setLang] = useState("English");
  const dropdownRef = useRef(null);

  const validateFormData = (e) => {
    // Only validate the field that was blurred if e is provided
    const fieldsToValidate = e ? [e.target.name] : Object.keys(touched);
    const { email, password } = formData;
    const newErrors = {};

    if (fieldsToValidate.includes("email")) {
      if (!email) {
        newErrors.email = "Email address cannot be blank";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    if (fieldsToValidate.includes("password")) {
      if (!password) {
        newErrors.password = "Password cannot be blank";
      } else if (password.length < 8) {
        newErrors.password =
          "Use 8 or more characters with a mix of letters, numbers and symbols";
      }
    }

    setErrors({ ...errors, ...newErrors });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setTouched({ ...touched, [name]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateFormData();

    if (isValid) {
      // Proceed with form submission
      console.log("Form is valid, submitting...");
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-2/5 hidden md:block">
          <img
            src="https://media.istockphoto.com/id/1069792550/photo/unauthorized-payments.jpg?s=1024x1024&amp;w=is&amp;k=20&amp;c=i-KVGTCmarbMraihMNeJe_nat8ZCvqMa090XwR2-9OY="
            alt="sigin content"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Form Section */}
        <div className="bg-white rounded-l-xl ml-[-16px] md:w-3/5 ">
          <div className="w-full flex justify-between items-center justify-content p-4">
            <div className="flex items-center">
              <img alt="earth icon" className="w-8" src={earth} />
              <div className="relative" ref={dropdownRef}>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="text-gray-700 bg-transparent hover:text-gray-300 focus:outline-none font-custom text-[16px] px-2 py-2.5 text-center inline-flex items-center "
                  type="button"
                  data-dropdown-trigger="click"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {lang}
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div
                    id="dropdown"
                    class="z-10  absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefaultButton"
                    >
                      <li>
                        <a
                          href="#"
                          onClick={() => setLang("English")}
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          English
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={() => setLang("Español")}
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Español
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="text-gray-700 font-custom text-lg">
              Already have an account?
              <button className="bg-transparent border-gray-700  font-custom text-gray-700 border-2 px-4 h-8 text-[16px] rounded-md  hover:underline ml-3">
                Log in
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center min-h-[87vh] pb-10">
            <div className="flex w-full mb-8 items-center mx-auto justify-center px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="22"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M0 5.34C0 1.82 1.39 0 3.72 0c2.34 0 3.73 1.82 3.73 5.34V16c0 3.52-1.4 5.34-3.73 5.34S0 19.52 0 16V5.34ZM25.08 0h-7.7c-6.9 0-7.44 2.98-7.44 6.96l-.01 7.42c0 4.14.52 6.96 7.48 6.96h7.67c6.92 0 7.43-2.97 7.43-6.94V6.97c0-3.99-.53-6.97-7.43-6.97Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ml-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="108"
                  height="24"
                  fill="none"
                  class="sc-da9128ae-1 bOQHzD"
                >
                  <path
                    fill="currentColor"
                    d="M69.87 16.61c-2.22 0-3.37-1.83-3.37-4.08s1.13-3.99 3.37-3.99c2.29 0 3.37 1.82 3.37 3.99-.02 2.29-1.16 4.08-3.37 4.08ZM48.1 8.54c1.3 0 1.84.76 1.84 1.42 0 1.6-1.62 2.29-5.01 2.39 0-1.97 1.12-3.8 3.17-3.8Zm-14.44 8.07c-2.1 0-2.99-1.71-2.99-4.08 0-2.35.9-3.99 3-3.99 2.12 0 3.12 1.7 3.12 3.99 0 2.39-1.04 4.08-3.13 4.08Zm-17.8-10.4h-3.3l5.46 12.51c-1.04 2.31-1.6 2.89-2.32 2.89-.77 0-1.49-.62-2-1.16l-1.45 1.92a5.14 5.14 0 0 0 3.7 1.63c1.73 0 3.05-1 3.82-2.79l6.3-15.02h-3.24l-3.28 8.97-3.7-8.95Zm87.1 2.33c1.6 0 1.92 1.1 1.92 3.67v6.75h2.85v-8.52c0-3.07-2.1-4.4-4.05-4.4-1.73 0-3.31 1.07-4.2 3.06a4.01 4.01 0 0 0-3.96-3.07c-1.63 0-3.25 1.04-4.13 2.97V6.21h-2.85v12.73h2.85V13.5c0-2.74 1.44-4.96 3.4-4.96 1.6 0 1.9 1.1 1.9 3.67v6.75h2.86l-.02-5.46c0-2.74 1.46-4.96 3.42-4.96ZM80.14 6.21h-1.36v12.73h2.85v-4.88c0-3.09 1.36-5.18 3.39-5.18.52 0 .96.02 1.44.22l.44-3c-.36-.05-.68-.09-1-.09-2 0-3.45 1.38-4.29 3.15V6.21h-1.47Zm-10.28-.2c-3.77 0-6.31 2.87-6.31 6.5 0 3.76 2.58 6.57 6.31 6.57 3.8 0 6.38-2.89 6.38-6.57C76.23 8.86 73.6 6 69.87 6Zm-21.61 10.6a2.98 2.98 0 0 1-3.05-2.29c3.77-.16 7.46-1.08 7.46-4.4 0-1.91-1.89-3.89-4.6-3.89-3.64 0-6.1 2.97-6.1 6.5 0 3.68 2.42 6.57 6.05 6.57a6.62 6.62 0 0 0 5.39-2.49l-1.38-1.87c-1.47 1.5-2.37 1.87-3.77 1.87ZM34.22 6.01c-1.44 0-2.89.84-3.45 2.16V6.2h-2.84v17.73h2.84v-6.33c.6.91 1.99 1.51 3.21 1.51 3.8 0 5.8-2.8 5.8-6.6-.02-3.74-1.99-6.5-5.56-6.5Zm-19.97-4.9H.82v2.77h5.25v15.06h2.99V3.88h5.2V1.12Zm42.33 5.1h-1.7v2.55h1.7v10.18h2.85V8.76h2.76V6.21h-2.76V4.22c0-1.27.52-1.71 1.7-1.71.44 0 .84.12 1.38.3l.65-2.4A5.44 5.44 0 0 0 60.9 0c-2.73 0-4.33 1.63-4.33 4.46v1.75Z"
                  ></path>
                </svg>
              </span>
            </div>

            <div className="md:max-w-md w-full  flex flex-col items-center mx-auto justify-center px-2">
              <h2 className="mb-8 text-center font-customlight leading-relaxed text-[24px] text-gray-600">
                Get better data with conversational forms, surveys, quizzes &
                more.
              </h2>
              <form
                onSubmit={handleSubmit}
                className="md:max-w-[256px] mx-auto w-full flex flex-col items-center"
              >
                <div className="relative w-full">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`block border border-gray-300 w-full p-3 rounded mb-4 ${
                      errors.email && "border-red-500"
                    }`}
                    placeholder="Email"
                    onBlur={validateFormData}
                  />
                  {errors.email && (
                    <span className="mb-3 left-0 flex items-center justify-content">
                      <img src={alert} className="w-5" />
                      <p className="ml-1 text-red-500 text-sm p-0">
                        {errors.email}
                      </p>
                    </span>
                  )}
                </div>

                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`block border border-gray-300 w-full p-3 rounded mb-4 ${
                      errors.password && "border-red-500"
                    }`}
                    placeholder="Password"
                    onBlur={validateFormData}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-0 bottom-[10px] right-0 pr-3 flex items-center"
                  >
                    {/* Eye Icon SVG */}
                    <img
                      alt="password icon"
                      className="relative"
                      src={showPassword ? eyeslash : eyeopen}
                    />
                  </button>
                  {errors.password && (
                    <span className="mb-3 left-0 flex items-center justify-content">
                      <img src={alert} alt="" className="w-5" />
                      <p className="ml-1 text-red-500 text-sm p-0">
                        {errors.password}
                      </p>
                    </span>
                  )}
                </div>

                <div className="flex items-baseline mb-3">
                  <input
                    type="checkbox"
                    id="privacypolicy"
                    className="w-10 h-10 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none align-middle"
                  />
                  <label
                    htmlFor="privacypolicy"
                    className="ml-2 relative top-[-15px] block text-sm text-gray-700 dark:text-gray-300 align-middle"
                  >
                    I agree to Typeform’s
                    <a
                      href="https://www.typeform.com/terms-service/"
                      className="border-b border-gray-500 "
                    >
                      Terms of Service, Privacy Policy
                    </a>
                    and
                    <a
                      href="https://www.typeform.com/privacy-policy/"
                      className="border-b border-gray-500 "
                    >
                      Data Processing Agreement.
                    </a>
                  </label>
                </div>

                <div className="relative mb-3">
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    class="flex text-gray-700 bg-transparent  focus:outline-none font-custom text-[16px]  md:w-[200px] py-2.5 items-center "
                    type="button"
                    data-dropdown-trigger="click"
                    onClick={() => setIsSeeOptions(!seeoptions)}
                  >
                    <span>See options</span>
                    <svg
                      class="w-3.5 h-3.5 ms-3 ml-auto"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {seeoptions && (
                    <div
                      id="dropdown"
                      class="dark:bg-gray-700"
                    >
                      <ul class="py-2 text-lg text-gray-700 font-custom dark:text-gray-200">
                        {seeOptions.map((item, index) => {
                          return (
                            <li key={index}>
                              <label htmlFor="marketing" className="">
                                {item.name}
                              </label>
                              <div className="flex gap-6 my-3">
                                <div className="flex items-center">
                                  <input
                                    id="marketing"
                                    name="Yes"
                                    type="radio"
                                    value=""
                                    className="w-5 h-5 text-gray-600 bg-gray-100 border-gray-600 focus:ring-gray-500  focus:ring-2 "
                                  />
                                  <label className="ml-2 text-xl">Yes</label>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    id="marketing"
                                    name="No"
                                    type="radio"
                                    value=""
                                    className="w-5 h-5 text-gray-600 bg-gray-100 border-gray-600 focus:ring-gray-500  focus:ring-2 "
                                  />
                                  <label className="ml-3 text-xl">No</label>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                      <p className="text-gray-400">You can update your preferences in your Profile at any time</p>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="max-w-[215px] h-10 w-full flex items-center justify-center text-center rounded bg-black text-white focus:outline-none"
                >
                  Create my free account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
