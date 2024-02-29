import { useState } from 'react'
import './App.css'
import {
  numbers,
  specialCharacters,
  lowerCaseLetters,
  upperCaseLetters
} from './Characters'
import 'tailwindcss/tailwind.css';
import Lottie from "lottie-react";
import passwordLottie from "./lottie/password.json";

import { motion } from 'framer-motion';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Slider from '@mui/material/Slider';

import Tooltip from '@mui/material/Tooltip';

import CopyToClipboard from 'react-copy-to-clipboard';

import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ContentCopyTwoToneIcon from '@mui/icons-material/ContentCopyTwoTone';
import { Button } from '@mui/material';
import IOSSwitch from './IOSSwitch';

function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(6)
  const [includeUpperCase, setIncludeUpperCase] = useState(true)
  const [includeLowerCase, setIncludeLowerCase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [copy, setCopy] = useState(false)


  function generatePassword() {
    let characters = "";

    if (includeUpperCase) {
      characters += upperCaseLetters
    }
    if (includeLowerCase) {
      characters += lowerCaseLetters
    }
    if (includeSymbols) {
      characters += specialCharacters
    }
    if (includeNumbers) {
      characters += numbers
    }

    if (characters.length <= 0) {
      toast.error("Please select any  one", {

        theme: "colored"
      })
      return
    }

    setPassword(createPassword(characters))
  }

  function createPassword(characters) {
    let password = "";
    let charactersLength = characters.length;
    console.log('charactersLength===>>', charactersLength);

    for (let i = 0; i < passwordLength; i++) {
      let index = Math.round(Math.random() * charactersLength - 1)
      console.log('index===>>', index);

      if (index < 0) {
        index = 0;
      }
      password += characters[index]
      console.log('password===>>', password);
    }
    return password
  }


  const handleLength = (e, newValue) => {
    setPasswordLength(newValue)
  }

  // const copyStatus = copy ? 'copy' : 'copied';

  const handleCopyClick = () => {
    setCopy(true);
    setTimeout(() => setCopy(false), 1000);
  };

  const profile = import.meta.env.VITE_REACT_APP_PROFILE_URL;

  const handleClick = () => {
    window.location.href = profile;
  };


  return (
    <>
      <div className="background-image flex-col p-4 min-h-screen bg-cover bg-center flex items-center justify-center text-white">
        <div className="mb-14 mt-4 text-center font-poppins">
          <h1 className="font-bold mb-2 text-5xl">Pass<span className='text-4xl text-cyan-600'>Gen</span></h1>
          <motion.div
            initial={{ opacity: 0, y: -0 }}
            animate={{ opacity: 1, y: 2 }}
            transition={{ duration: 7 }}
            className="text-md font-bold tracking-tight"
          >
            Create a strong and secure password.
          </motion.div>
        </div>

        <div className="flex-1 flex flex-row">
          <div className="flex items-start justify-start">
            <Lottie
              animationData={passwordLottie}
              // loop={true}
              autoPlay
              className="sm:h-[350px]"
            />
          </div>

          <div className="flex-1 pl-4 flex flex-col  font-roboto-mono">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 } }}
              className="text-semibold font-medium text-sm sm:text-base mb-4"
            >
              <div className="flex items-center">
                <p className="text-sm mb-2 mr-4">Add Uppercase Letters</p>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IOSSwitch
                    checked={includeUpperCase}
                    onChange={() => setIncludeUpperCase(!includeUpperCase)}
                    inputProps={{ 'aria-label': 'toggle switch' }}
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 } }}
              className="text-semibold font-medium text-sm sm:text-base mb-4"
            >
              <div className="flex items-center">
                <p className="text-sm mb-2 mr-4">Add Lowercase Letters</p>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IOSSwitch
                    checked={includeLowerCase}
                    onChange={() => setIncludeLowerCase(!includeLowerCase)}
                    inputProps={{ 'aria-label': 'toggle switch' }}
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 } }}
              className="text-semibold font-medium text-sm sm:text-base mb-4"
            >
              <div className="flex items-center">
                <p className="text-sm mb-2 mr-4">Include Numbers</p>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IOSSwitch
                    checked={includeNumbers}
                    onChange={() => setIncludeNumbers(!includeNumbers)}
                    inputProps={{ 'aria-label': 'toggle switch' }}
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 } }}
              className="text-semibold font-medium text-sm sm:text-base mb-4"
            >
              <div className="flex items-center">
                <p className="text-sm mb-2 mr-4">Include Symbols</p>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IOSSwitch
                    checked={includeSymbols}
                    onChange={() => setIncludeSymbols(!includeSymbols)}
                    inputProps={{ 'aria-label': 'toggle switch' }}
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 } }}
              className="text-semibold font-medium text-sm sm:text-base mb-4"
            >
            </motion.div>


            <p className="text-sm mb-2 mr-4">Password Length</p>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 1.5, ease: "easeInOut", delay: 0.3 } }}
              className="text-semibold font-medium text-sm sm:text-base mb-4"
            >
              <Slider
                aria-labelledby="slider-label"
                value={passwordLength}
                onChange={handleLength}
                valueLabelDisplay="auto"
                color="info"
                step={1}
                marks
                min={1}
                max={12}
              />
            </motion.div>

            <div className="flex flex-col items-center mb-4">
              <div className="flex">
                <div className="ml-2 border p-2 mx-2 w-64 h-8 text-center items-center overflow-hidden">
                  <span className="block">{password}</span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CopyToClipboard text={password} onCopy={handleCopyClick}>
                    <Tooltip title={copy ? 'Copied!' : 'Copy to Clipboard'} arrow>
                      {!copy ? (
                        <ContentCopyOutlinedIcon className="cursor-pointer hover:text-blue-500 transition duration-300" />
                      ) : (
                        <ContentCopyTwoToneIcon className="cursor-pointer text-cyan-500" />
                      )}
                    </Tooltip>
                  </CopyToClipboard>
                </motion.div>
              </div>

              <motion.div
                className="box"
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  mass: 1,
                  damping: 1
                }}
                animate={{ x: 20 }}
              >
                <div className="mt-2">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={generatePassword}
                  >
                    Generate Password 🔐
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

        </div>


        <footer className='my-2 mx-3 text-sm self-end cursor-pointer d-flex justify-content-end align-items-center font-roboto-mono' onClick={handleClick}>
          <span className="d-none sm:inline text-gray-600">Developed by: </span>
          <span className="d-sm-none text-gray-600 ml-2">Abdul Rahman</span>
        </footer>

        <ToastContainer />
      </div>

    </>
  )
}

export default App
