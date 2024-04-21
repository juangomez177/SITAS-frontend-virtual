"use client"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Grid, TextField } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import React, { useState } from "react"

export default function UpdatePasswordForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)
  const [showPassword3, setShowPassword3] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show)
  const handleClickShowPassword3 = () => setShowPassword3((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const handleMouseDownPassword2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const handleMouseDownPassword3 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  return (
    <form action="#">
      <Grid container={true} spacing={6}>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            style={{ marginTop: "5%", marginBottom: "0" }}
            name="password"
            label="Contraseña actual"
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            name="newPassword"
            label="Nueva contraseña "
            variant="outlined"
            fullWidth
            type={showPassword2 ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword2}
                    onMouseDown={handleMouseDownPassword2}
                    edge="end"
                  >
                    {showPassword2 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <TextField
            name="confirmPassword"
            label="Confirmar contraseña"
            variant="outlined"
            fullWidth
            type={showPassword3 ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword3}
                    onMouseDown={handleMouseDownPassword3}
                    edge="end"
                  >
                    {showPassword3 ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <button
        className="my-3 flex h-10 w-full items-center justify-center rounded bg-blue-500 text-center text-white"
        style={{ marginTop: "12%", marginBottom: "10%" }}
      >
        Cambiar contraseña
      </button>
    </form>
  )
}
