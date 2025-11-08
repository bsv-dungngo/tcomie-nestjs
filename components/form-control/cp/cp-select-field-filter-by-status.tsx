import { STATUS } from '@/config/const'
import { CPBaseSelectField } from './cp-base-select-field'

export const CPSelectFieldFilterByStatus = () => {
  const handleOnChange = () => {
    //
  }

  return (
    <>
      <CPBaseSelectField
        width="140px"
        placeholder="Filter by status"
        options={STATUS}
        isDefaultValue
        onChange={handleOnChange}
      />
    </>
  )
}
