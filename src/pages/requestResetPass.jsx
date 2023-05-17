import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { API_URL, doApiMethod } from "../services/servise";
import InputEmail from "../components/ui/inputs/inputEmail";
import { Box, Button } from "@mui/material";
import BoxRiseUp from "../components/ui/animation/boxRiseUp";

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

    <Box sx={{
      backgroundPosition: 'inherit',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url("https://res.cloudinary.com/dh73miwc9/image/upload/v1681136499/DALL_E_2023-04-10_17.19.04_-_Background_for_a_website_related_to_a_futuristic_looking_trading_journal_in_blue_and_black_tones_with_a_bitcoin_symbol_g1xm9b.png")'

  }}>

      <Box overflow={'hidden'} display="flex" justifyContent="center" alignItems="center" height="100vh">
          <BoxRiseUp boxType="requestResetPassBox">
          <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onSub)} action="#" method="POST">
            <InputEmail label={" Email address "}
                register={register}
                errors={errors} />
           

            {!isSubmitted ?
                <Button type='submit' >submit</Button>
                :
                <ThreeDots
                    height="80"
                    width="80"
                    radius="9"
                    color="blue"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{ 'display': "flex", 'justifyContent': "center" }}
                    wrapperClass=""
                    visible={true}
                />
            }

        </form>
              <Button variant="contained" color="secondary" size="large" style={{ marginBottom: 20 }}>
                  <Link style={{ color: "white", textDecoration: 'none' }} to={"/"}>Sign In</Link>
              </Button>
              
          </BoxRiseUp>

      </Box>
  </Box>
  );
};

export default RequestResetPass;
