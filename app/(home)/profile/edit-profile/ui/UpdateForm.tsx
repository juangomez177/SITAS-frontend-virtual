"use client"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"
import { Grid, MenuItem, TextField } from "@mui/material"
import IconButton from "@mui/material/IconButton"
import InputAdornment from "@mui/material/InputAdornment"
import React, { useState } from "react"
import { FlagIcon } from "react-flag-kit"

export default function UpdateForm() {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
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
  return (
    <>
      <form action="">
        <Grid container={true} spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <TextField label="Nombres" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField label="Apellidos" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Correo electrónico" variant="outlined" fullWidth />
          </Grid>

          <Grid item xs={12} md={6} lg={7}>
            <TextField
              name="password"
              label="Contraseña"
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
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <button className="float-right mb-3 h-11 w-48 items-center rounded bg-blue-500 text-center text-white">
              Cambiar contraseña
            </button>
          </Grid>
          <Grid item xs={2} md={3} lg={3}>
            <TextField
              label="País"
              select
              variant="outlined"
              fullWidth
              defaultValue="+57"
              style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
            >
              {telephonePrefixes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item xs={10} md={9} lg={9}>
            <TextField label="Número de celular" variant="outlined" fullWidth />
          </Grid>
        </Grid>
        <button
          className="my-3 flex h-10 w-full items-center justify-center rounded bg-blue-500 text-center text-white"
          style={{ marginTop: "12%" }}
        >
          Guardar cambios
        </button>
      </form>
    </>
  )
}
