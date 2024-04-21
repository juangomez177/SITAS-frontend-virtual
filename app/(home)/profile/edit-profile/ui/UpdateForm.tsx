"use client"

import { Grid, MenuItem, TextField } from "@mui/material"
import { FlagIcon } from "react-flag-kit"

export default function UpdateForm() {
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
          style={{ marginTop: "5%", marginBottom: "0" }}
        >
          Guardar cambios
        </button>

        <button
          className="mb-3 h-10 w-full items-center justify-center rounded bg-blue-500 text-white"
          style={{ marginTop: "5%" }}
        >
          Cambiar contraseña
        </button>
      </form>
    </>
  )
}
