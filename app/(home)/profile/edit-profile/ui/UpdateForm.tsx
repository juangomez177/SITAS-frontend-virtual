"use client"

import { Grid, MenuItem, TextField } from "@mui/material"
import Link from "next/link"
import { FlagIcon } from "react-flag-kit"
import { SubmitHandler, useForm } from "react-hook-form"

type FormInputs = {
  name: string
  lastName: string
  email: string
  telephonePrefix: string
  telephoneNumber: string
}

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

export default function UpdateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>()

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    console.log(data)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container={true} spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              label="Nombres"
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
              label="Apellidos"
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
          <Grid item xs={12}>
            <TextField
              label="Correo electrónico"
              variant="outlined"
              fullWidth
              {...register("email", {
                required: "Este campo es requerido",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "El correo electrónico proporcionado no es válido",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
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
              label="Número de celular"
              variant="outlined"
              fullWidth
              {...register("telephoneNumber", {
                required: "Este campo es requerido",
                pattern: { value: /^[0-9]*$/, message: "El número de celular proporcionado no es válido" },
              })}
              error={!!errors.telephoneNumber}
              helperText={errors.telephoneNumber?.message}
            />
          </Grid>
        </Grid>
        <button
          type="submit"
          className="my-3 flex h-10 w-full items-center justify-center rounded bg-blue-500 text-center text-white"
          style={{ marginTop: "5%", marginBottom: "0" }}
        >
          Guardar cambios
        </button>
        <Link href="/profile/edit-profile/update-password">
          <button
            className="mb-3 h-10 w-full items-center justify-center rounded bg-blue-500 text-white"
            style={{ marginTop: "5%" }}
          >
            Cambiar contraseña
          </button>
        </Link>
      </form>
    </>
  )
}
