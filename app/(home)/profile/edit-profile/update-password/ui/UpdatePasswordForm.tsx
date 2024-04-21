"use client"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Grid, TextField } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import React, { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { passwordValidations } from "utils"

type FormInputs = {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export default function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormInputs>()
  const newPassword = watch("newPassword")
  const currentPassword = watch("currentPassword")

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
  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data)
  }
  return (
    <form action="#">
      <Grid container={true} spacing={6}>
        <Grid item xs={12} md={6} lg={12}>
          <TextField
            style={{ marginTop: "5%", marginBottom: "0" }}
            label="Contraseña actual"
            variant="outlined"
            fullWidth
            type={showPassword ? "text" : "password"}
            {...register("currentPassword", {
              required: "Este campo es requerido",
              validate: passwordValidations.isPassword,
            })}
            error={!!errors.currentPassword}
            helperText={errors.currentPassword?.message}
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
        <Grid item xs={12} md={6} lg={12}>
          <TextField
            label="Nueva contraseña "
            variant="outlined"
            fullWidth
            type={showPassword2 ? "text" : "password"}
            {...register("newPassword", {
              required: "Este campo es requerido",
              validate: (value) => {
                if (passwordValidations.isPassword(value)) {
                  return "La contraseña debe incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial, y su extensión debe ser entre 8 y 25 caracteres."
                }
                if (value === currentPassword) {
                  return "La nueva contraseña debe ser diferente de la contraseña actual"
                }
                return true
              },
            })}
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
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
        <Grid item xs={12} md={6} lg={12}>
          <TextField
            label="Confirmar contraseña"
            variant="outlined"
            fullWidth
            type={showPassword3 ? "text" : "password"}
            {...register("confirmPassword", {
              required: "Este campo es requerido",
              validate: (value) => {
                if (passwordValidations.isPassword(value)) {
                  return "La contraseña debe incluir al menos una letra mayúscula, una letra minúscula, un número y un carácter especial, y su extensión debe ser entre 8 y 25 caracteres."
                }
                if (value !== newPassword) {
                  return "Las contraseñas no coinciden"
                }
                if (value === currentPassword) {
                  return "La nueva contraseña debe ser diferente de la contraseña actual"
                }
                return true
              },
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
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
        type="submit"
        onClick={handleSubmit(onSubmit)}
        className="my-3 flex h-10 w-full items-center justify-center rounded bg-blue-500 text-center text-white"
        style={{ marginTop: "12%", marginBottom: "0" }}
      >
        Cambiar contraseña
      </button>
    </form>
  )
}
