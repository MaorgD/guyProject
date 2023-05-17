import { Box } from '@mui/material';
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import BoxRiseUp from '../components/ui/animation/boxRiseUp';
const Messages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const error = searchParams.get("error");
  const message = searchParams.get("message");
  const name = searchParams.get("name");
  let bgColor = ""
  let boxColor = ''
  let textColor = ''
  let icon = "";
  let header = ''
  let mainTxt = '';
  let secondaryTxt = <Link className='' to={"/"}>go to the site</Link>
  let boxType = ""

  const setMessage=()=>{
    if (error)
    {
      icon=
      <svg
                xmlns="http://www.w3.org/2000/svg"
                width="85" height="85"
                fill="white"
                className="bi bi-x-circle-fill mx-auto animated swing"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
              </svg>;
      bgColor = "red";
      boxColor = 'darkred';
      header =message;
      mainTxt = 'Please try again!';
      boxType='errorBox'
    }
    else if(name){
      icon= 
      <svg 
           xmlns="http://www.w3.org/2000/svg"
           width="85"
           height="85"
           fill="white"
           className="mx-auto bi bi-envelope-at animated swing"
           viewBox="0 0 16 16">
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
            </svg>;
      bgColor = "grey";
      boxColor = 'lightblue';
      header = `thank you ${name} for sign up`;
      mainTxt = 'please go to your email to Verify the account';
      secondaryTxt='must Verify to login';
      boxType='verifyBox'
    }
    else {
      icon= 
      <svg
                xmlns="http://www.w3.org/2000/svg"
                width="85"
                height="85"
                fill="white"
                className="mx-auto bi bi-check-circle-fill animated swing"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
                />
              </svg>;
      bgColor = "green";
      boxColor = 'lightgreen';
      header = 'Email has been verified';
      mainTxt = 'You can now log in';
      boxType='verifiedBox'
    }
  }
  setMessage()


  
  return (
    <Box sx={{
      backgroundColor: bgColor
    }}>

      <Box display="flex" overflow={'hidden'} justifyContent="center" alignItems="center" height="100vh">
        <BoxRiseUp  boxType={boxType}>
        {icon}
            <h2 style={{color:{textColor}}}>{header}</h2>

            <h3 >{mainTxt}</h3>
            <h2>{secondaryTxt}</h2>
        </BoxRiseUp>

      </Box>
    </Box>

   
  )
}

export default Messages