import { articleDetailState } from '@/plugins/front/article/store'
import { projectDetailState } from '@/plugins/front/course/store'
import i18n from '@/utils/i18next'
import { Box, Button, Stack } from '@mui/material'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'

const langs = [
  { title: 'Tiếng Việt', key: 'vi', img: '/images/flags/vi.png' },
  { title: 'Tiếng Anh', key: 'en', img: '/images/flags/en.webp' },
]

export const LangButton = () => {
  const currentLang = langs.find((lang) => lang.key == i18n.language)
  const [currentLangLocale, setCurrentLangLocale] = useState(currentLang?.key)
  const pathName = usePathname()
  const router = useRouter()
  const articleDetail = useRecoilValue(articleDetailState)
  const projectDetail = useRecoilValue(projectDetailState)

  const languageMappings = {
    home: {
      from: ['/en/', '/vi/'],
      to: ['/vi/', '/en/'],
    },
    home2: {
      from: ['/en/home/', '/vi/trang-chu/'],
      to: ['/vi/trang-chu/', '/en/home/'],
    },
    about: {
      from: ['/en/about-us/', '/vi/gioi-thieu/'],
      to: ['/vi/gioi-thieu/', '/en/about-us/'],
    },
    learnCode: {
      from: ['/en/project/', '/vi/du-an/'],
      to: ['/vi/du-an/', '/en/project/'],
    },
    news: {
      from: ['/en/news-event/', '/vi/tin-tuc-su-kien/'],
      to: ['/vi/tin-tuc-su-kien/', '/en/news-event/'],
    },
    newsSlug: {
      from: ['/en/news-event/[slug]', '/vi/tin-tuc-su-kien/[slug]'],
      to: ['/vi/tin-tuc-su-kien/[slug]', '/en/news-event/[slug]'],
    },
    contact: {
      from: ['/en/contact-us/', '/vi/lien-he/'],
      to: ['/vi/lien-he/', '/en/contact-us/'],
    },
    newsDetail: {
      from: [
        `/en/news-event/${articleDetail?.slug_en}/`,
        `/vi/tin-tuc-su-kien/${articleDetail?.slug_vi}/`,
      ],
      to: [
        `/vi/tin-tuc-su-kien/${articleDetail?.slug_vi}/`,
        `/en/news-event/${articleDetail?.slug_en}/`,
      ],
    },
    projectDetail: {
      from: [`/en/project/${projectDetail?.slug_en}/`, `/vi/du-an/${projectDetail?.slug_vi}/`],
      to: [`/vi/du-an/${projectDetail?.slug_vi}/`, `/en/project/${projectDetail?.slug_en}/`],
    },
    project: {
      from: [`/en/project/`, `/vi/du-an/`],
      to: [`/vi/du-an/`, `/en/project/`],
    },
  }

  const handleChangeLang = (locale: string) => {
    if (currentLangLocale === locale) {
      return
    }

    i18n.changeLanguage(locale)
    setCurrentLangLocale(locale)

    for (const [key, mapping] of Object.entries(languageMappings) as Array<
      [string, Record<string, any>]
    >) {
      const newPath = mapping.to[mapping.from.indexOf(pathName)]
      if (newPath) {
        window.history.pushState({}, '', newPath)
        break // Thoát vòng lặp sau khi tìm thấy đường dẫn mới
      }
    }

    setTimeout(() => {
      router.reload()
    }, 300)
  }

  return (
    <>
      <Stack className="fr-tab-lang">
        {langs.map((item, index) => (
          <Button
            key={index}
            className={`${currentLangLocale == item.key && 'fr-tab-lang__actived'}`}
            onClick={() => handleChangeLang(item.key)}
          >
            <Box
              height={'22px'}
              width={'22px'}
              borderRadius={'4px'}
              position={'relative'}
              overflow={'hidden'}
              mx={1.2}
              my={0.8}
            >
              <Image src={item.img} layout="fill" alt="" objectFit="cover" />
            </Box>
          </Button>
        ))}
      </Stack>
    </>
  )
}
