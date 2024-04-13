"use client"

import Link from "next/link"
import { SubmitHandler, useForm } from "react-hook-form"
import { useState } from "react"
import TextField from "@mui/material/TextField"
import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material"
import MenuItem from "@mui/material/MenuItem"
import { FlagIcon } from "react-flag-kit"

import { emailValidations, passwordValidations } from "utils"

//TODO: Convertir esto en una Interface
type FormInputs = {
  name: string
  lastName: string
  identificationType: string
  identificationNumber: string
  email: string
  password: string
  telephonePrefix: string
  telephoneNumber: string
  termsAndConditions: boolean
  privacyPolicy: boolean
}

const identificationTypes = [
  { value: "CC", label: "CC" },
  { value: "PA", label: "PA" },
  { value: "CE", label: "CE" },
  { value: "RC", label: "RC" },
]

const telephonePrefixes = [
  {
    value: "+54",
    label: (
      <div className="flex items-center space-x-2">
        <span>+54</span>
        <FlagIcon code="AR" />
      </div>
    ),
  },
  {
    value: "+55",
    label: (
      <div className="flex items-center space-x-2">
        <span>+55</span>
        <FlagIcon code="BR" />
      </div>
    ),
  },
  {
    value: "+56",
    label: (
      <div className="flex items-center space-x-2">
        <span>+56</span>
        <FlagIcon code="CL" />
      </div>
    ),
  },
  {
    value: "+57",
    label: (
      <div className="flex items-center space-x-2">
        <span>+57</span>
        <FlagIcon code="CO" />
      </div>
    ),
  },
  {
    value: "+58",
    label: (
      <div className="flex items-center space-x-2">
        <span>+58</span>
        <FlagIcon code="VE" />
      </div>
    ),
  },
  {
    value: "+59",
    label: (
      <div className="flex items-center space-x-2">
        <span>+59</span>
        <FlagIcon code="EC" />
      </div>
    ),
  },
]

export const RegisterForm = () => {
  const [errorMessage, setErrorMessage] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
    watch,
  } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    //setErrorMessage('');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-3 flex flex-col">
      <Grid container={true} spacing={2}>
        <Grid item xs={12} md={6} lg={6}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            {...register("name", {
              required: "Este campo es requerido",
              pattern: { value: /^[a-zA-Z\s]*$/, message: "El nombre proporcionado no es válido" },
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <TextField
            label="Apellido"
            variant="outlined"
            fullWidth
            {...register("lastName", {
              required: "Este campo es requerido",
              pattern: { value: /^[a-zA-Z\s]*$/, message: "El apellido proporcionado no es válido" },
            })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Grid>

        <Grid item xs={2} md={3} lg={3}>
          <TextField
            label="Tipo"
            select
            variant="outlined"
            fullWidth
            defaultValue="CC"
            {...register("identificationType", {
              required: "Este campo es requerido",
            })}
            error={!!errors.identificationType}
            helperText={errors.identificationType?.message}
          >
            {identificationTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={10} md={9} lg={9}>
          <TextField
            label="Número de identificación"
            variant="outlined"
            fullWidth
            {...register("identificationNumber", {
              required: "Este campo es requerido",
              pattern: { value: /^[0-9]*$/, message: "El número de identificación proporcionado no es válido" },
            })}
            error={!!errors.identificationNumber}
            helperText={errors.identificationNumber?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Correo electrónico"
            variant="outlined"
            fullWidth
            {...register("email", {
              required: "Este campo es requerido",
              validate: emailValidations.isEmail,
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Contraseña"
            variant="outlined"
            fullWidth
            type="password"
            {...register("password", {
              required: "Este campo es requerido",
              validate: passwordValidations.isPassword,
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Grid>

        <Grid item xs={2} md={3} lg={3}>
          <TextField
            label="País"
            select
            variant="outlined"
            fullWidth
            defaultValue="+57"
            style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            {...register("telephonePrefix", {
              required: "Este campo es requerido",
            })}
            error={!!errors.telephonePrefix}
            helperText={errors.telephonePrefix?.message}
          >
            {telephonePrefixes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={10} md={9} lg={9}>
          <TextField
            label="Número de teléfono"
            variant="outlined"
            fullWidth
            {...register("telephoneNumber", {
              required: "Este campo es requerido",
              pattern: { value: /^[0-9]*$/, message: "El número de teléfono proporcionado no es válido" },
              minLength: { value: 10, message: "El número de teléfono proporcionado no es válido" },
            })}
            error={!!errors.telephoneNumber}
            helperText={errors.telephoneNumber?.message}
          />
        </Grid>

        <Grid item xs={12} className="flex items-center">
          <Checkbox required />
          <Typography variant="body2" color="textSecondary" className="mb-2">
            He leído y acepto los Términos y Condiciones del Programa Singapur Airlines.
          </Typography>
        </Grid>

        <Grid item xs={12} className="flex items-center">
          <Checkbox required />
          <Typography variant="body2" color="textSecondary" className="mb-2">
            Autorizo que mis datos sean tratados de acuerdo a la Política de Privacidad.
          </Typography>
        </Grid>
      </Grid>

      <button className="mb-3 mt-3 flex h-10 items-center justify-center rounded bg-blue-500 text-center text-white">
        Crear cuenta
      </button>

      <Link href="/auth/login" className="mb-5 text-center underline">
        Ya tienes una cuenta? Inicia sesión
      </Link>
    </form>
  )
}
