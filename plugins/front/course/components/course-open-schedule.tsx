import { Card, Typography } from '@mui/material'
import { ItemRow } from '../../opening-schedule/components/item-row'

export const CourseOpenSchedule = () => {
  return (
    <>
      <Typography pt={4} fontSize={'1.1rem'} fontWeight={700} pb={2}>
        Lịch khai giảng
      </Typography>

      <Card>
        <ItemRow title="Khai giảng: " description="29-12-2023" isGray />
        <ItemRow title="Thời gian: " description="Thứ hai, tư, sáu 19:45 - 21:45" />
        <ItemRow title="Thời lượng:" description="02 tháng" isGray />
        <ItemRow title="Học phí:" description="28,000,000" />
        <ItemRow title="Địa điểm học:" description="Tại FLIT" isGray />
      </Card>
    </>
  )
}
