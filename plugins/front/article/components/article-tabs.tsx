import { t } from '@/utils'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import * as React from 'react'
import { useRecoilState } from 'recoil'
import { setRecoil } from 'recoil-nexus'
import { articleQueryDataState, articleTabActivedState, articlesListFrontState } from '../store'

interface IProps {
  slot1: React.ReactNode
  slot2: React.ReactNode
}

export const ArticleTabs = ({ slot1, slot2 }: IProps) => {
  const [value, setValue] = useRecoilState(articleTabActivedState)

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    setRecoil(articlesListFrontState, [])
    setRecoil(articleQueryDataState, (prev) => {
      return {
        ...prev,
        page: 1,
      }
    })
  }

  return (
    <>
      <TabContext value={value}>
        <Stack direction={'row'} alignItems={'center'} pt={{ xs: 2, md: 6 }} mb={1}>
          <Box className="blog-tabs">
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label={t('eventTabLabel')} value="1" />
              <Tab label={t('newsTabLabel')} value="2" />
            </TabList>
          </Box>
        </Stack>

        <TabPanel value="1" sx={{ p: 0 }}>
          {slot1}
        </TabPanel>
        <TabPanel value="2" sx={{ p: 0 }}>
          {slot2}
        </TabPanel>
      </TabContext>
    </>
  )
}
