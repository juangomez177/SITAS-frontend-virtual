'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type Countries = {
    name: {
        common: string,
    },
    flags: {
        svg: string,
    },
    idd: {
        root: string,
        suffixes: string;
    }
}


const fetchData = async (): Promise<Countries[]> => {
    try {
        const res = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,idd");
        if (!res.ok) {
            throw new Error(`HTTP Error status ${res.status}`);
        }
        const data: Countries[] = await res.json() as Countries[];
        return data;
    } catch (error) {
        const errorMsg = error instanceof Error ? error.message : "There was error... ";
        console.log(errorMsg);
        return [];
    }
}

const PhoneCountry = () => {
    const [dataCountries, setDataCountries] = useState<Countries[]>();
    const [pais, setPais] = useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setPais(event.target.value as string);
    };
    useEffect(() => {
        const getData = async () => {
            const data = await fetchData();
            setDataCountries(data);
        }
        getData()
    })
    return (
        <Box width={130} mt={10} ml={10} sx={{ minWidth: 120 }} >
            <FormControl fullWidth>
                <InputLabel id="pais-select-label">País</InputLabel>
                <Select
                    labelId="pais-select-label"
                    id="pais-select"
                    value={pais}
                    label="País"
                    onChange={handleChange}

                >
                    {dataCountries?.filter((item) => item.idd.root != "")
                        .map((country: Countries) => {
                            let phoneId = country.idd.root + (country.idd.suffixes[0] ? country.idd.suffixes[0] : "");
                            return (
                                <MenuItem value={country.name.common}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-around"
                                    }}>
                                    <span>{phoneId}</span>
                                    <Image alt='' src={country.flags.svg} width={50} height={50} />
                                </MenuItem>
                            )
                        })}
                </Select>
            </FormControl>
        </Box>
    );
}

export default PhoneCountry