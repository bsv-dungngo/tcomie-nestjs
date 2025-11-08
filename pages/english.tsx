import { CPPrimaryButton } from '@/components/button/cp'
import dataEnglish from '@/config/english'
import { EmptyCPLayout } from '@/layouts/cp'
import { Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import translate from 'translate'

export default function EnglishPage() {
  const [trans, setTrans] = useState(false)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [item, setItem] = useState<any>({})

  const random = () => {
    setTrans(false)

    const index = Math.floor(Math.random() * dataEnglish.length)

    const item = dataEnglish[index]
    dataEnglish.splice(index, 1)

    if (dataEnglish.length < 1) {
      location.reload()
    }

    setItem(item)

    translate(item.q, 'vi').then((res) => {
      setQuestion(res)
    })

    translate(item.a, 'vi').then((res) => {
      setAnswer(res)
    })
  }

  useEffect(() => {
    random()
  }, [])

  return (
    <>
      <Stack p={2}>
        <Typography variant="h5">Câu hỏi: {question}</Typography>
        <Typography variant="h6">Trả lời: {answer}</Typography>

        {trans && (
          <>
            <hr />
            <Typography variant="h5">Question: {item.q}</Typography>
            <Typography variant="h6">Answer: {item.a}</Typography>
          </>
        )}

        <Stack direction="row" spacing={5} mt={2}>
          <CPPrimaryButton color="inherit" type="submit" onClick={() => setTrans(!trans)}>
            Dịch
          </CPPrimaryButton>
          <CPPrimaryButton type="submit" onClick={random}>
            Kế tiếp
          </CPPrimaryButton>
        </Stack>
      </Stack>
    </>
  )
}

EnglishPage.Layout = EmptyCPLayout
