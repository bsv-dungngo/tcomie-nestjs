import { CompanySection } from './company-section'

import { Banner } from './banner'
import { News } from './news'

export const MainContainer = () => {
  return (
    <>
      <Banner />
      <CompanySection showViewMore={true} isHome={true} />
      {/* <LearningSection /> */}
      <News type="event" />
      <News type="news" />
    </>
  )
}
