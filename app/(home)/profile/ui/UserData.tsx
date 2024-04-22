"use client"

import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import jwt from "jsonwebtoken"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Grid, IconButton, InputAdornment, MenuItem, TextField } from "@mui/material"
import { TelephonePrefixes } from "components/Forms/TelephonePrefixes"
import { getUserData } from "database/dbUser"
import { JWTPayload } from "interfaces/jwt.interface"

type UserDataType = JWTPayload

export default function UserData() {
  let telephonePrefix, telephoneNumber
  const [user, setUser] = useState<UserDataType | null>(null)
  const { data: session, status } = useSession()
  let defaultPrefixIndex = 3
  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        const tokenPayload = jwt.decode(session.user.token) as JWTPayload
        const userData = await getUserData(tokenPayload.userId, session.user.token)
        setUser(userData)
      }
    }

    fetchData()
  }, [session])

  console.log(user)

  if (user) {
    const phoneNumberParts = user.userPhoneNumber.split(" ")

    const foundPrefix = TelephonePrefixes.find((prefix) => prefix.value === phoneNumberParts[0])
    if (foundPrefix) {
      defaultPrefixIndex = TelephonePrefixes.indexOf(foundPrefix)

      telephoneNumber = phoneNumberParts[1]
    }
  }

  console.log(telephonePrefix, telephoneNumber)
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDataType>()

  const onSubmit: SubmitHandler<UserDataType> = async (data) => {
    console.log(data)
  }

  console.log(user?.userEmail)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container={true} spacing={2} marginTop={"3px"}>
          <Grid item xs={12} md={6} lg={6}>
            <TextField label="Nombres" fullWidth defaultValue={user?.userName} InputProps={{ readOnly: true }} />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField label="Apellidos" fullWidth defaultValue={user?.userLastname} InputProps={{ readOnly: true }} />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Identificación"
              variant="outlined"
              fullWidth
              defaultValue={user?.userId}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Correo electrónico"
              variant="outlined"
              fullWidth
              defaultValue={user?.userEmail}
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <TextField
              name="password"
              label="Contraseña actual"
              variant="outlined"
              fullWidth
              defaultValue={user?.userPhoneNumber}
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
                readOnly: true,
              }}
            />
          </Grid>
          <Grid item xs={2} md={3} lg={3}>
            <TextField
              label="País"
              select
              variant="outlined"
              fullWidth
              defaultValue={TelephonePrefixes[defaultPrefixIndex].value}
              style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
              InputProps={{ readOnly: true }}
            >
              {TelephonePrefixes.map((option) => (
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
              defaultValue={telephoneNumber}
              InputProps={{ readOnly: true }}
            />
          </Grid>
        </Grid>
        <Link href="/profile/edit-profile">
          <button
            className="mb-3 h-10 w-full items-center justify-center rounded bg-blue-500 text-white"
            style={{ marginTop: "5%" }}
          >
            Editar Perfil
          </button>
        </Link>
      </form>
    </>
  )
}
