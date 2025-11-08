import { LOCALES } from '@/config/const'
import { Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'

export default React.memo(() => {
  return (
    <Stack direction={'row'} spacing={0.5}>
      {LOCALES.map((locale, index) => (
        <Tooltip key={index} title={'English(en) (Default), Vietnamese(vi)'}>
          <Typography>{index == 0 ? locale.label + ' (Default) ...' : null}</Typography>
        </Tooltip>
      ))}
    </Stack>
  )
})
