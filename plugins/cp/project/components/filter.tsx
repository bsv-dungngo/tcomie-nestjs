import { STATUS } from '@/config/const'
import { dataTableParamsState } from '@/store/param-data'
import { Autocomplete, FormControl, Stack, TextField } from '@mui/material'
import { SyntheticEvent } from 'react'
import { setRecoil } from 'recoil-nexus'

export const Filter = () => {
  // const contractorOptions = useRecoilValue(contractorOptionsState)

  const handleChangeOption = (event: SyntheticEvent<Element, Event>, value: any, type: string) => {
    setRecoil(dataTableParamsState, (prevState) => {
      return {
        ...prevState,
        [type]: value?.id ?? '',
      }
    })
  }

  return (
    <Stack spacing={2} direction={'row'} flexShrink={0} width="100%">
      <FormControl sx={{ width: 180 }} className="cp-base-select-field">
        <Autocomplete
          disablePortal
          id="filter"
          defaultValue={STATUS[0]}
          options={STATUS}
          onChange={(e, value) => handleChangeOption(e, value, 'test')}
          renderInput={(params) => <TextField {...params} placeholder={''} />}
        />
      </FormControl>
    </Stack>
  )
}
