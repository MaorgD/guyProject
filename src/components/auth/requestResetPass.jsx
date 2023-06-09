import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { API_URL, doApiMethod } from "../../services/servise";
import InputEmail from "../ui/inputs/groupSpace/inputEmail";

const RequestResetPass = () => {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const nav = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSub = (_dataBody) => {
    setIsSubmitted(true);
    doApi(_dataBody);
  };

  const doApi = async (_dataBody) => {
    try {
      const url = API_URL + "/users/requestPasswordReset";
      const { data } = await doApiMethod(url, "POST", _dataBody);
      alert(data);
      nav("/");
    } catch (err) {
      setIsSubmitted(false);
      alert(err.response.data.msg);
    }
  };
  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Write here the email you want to send a reset to
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSub)}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <div className="-space-y-px rounded-md shadow-sm">
              <InputEmail
                label={" Email address "}
                register={register}
                errors={errors}
              />
            </div>
            {!isSubmitted ? 
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                
                </span>
                Send to email
              </button>
             : 
              <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="blue"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass="flex justify-center"
                visible={true}
              />
            }
          </form>
        </div>
      </div>
    </>
  );
};

export default RequestResetPass;
