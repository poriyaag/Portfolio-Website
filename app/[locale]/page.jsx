import React from 'react'
import fa from '../locales/fa.json'
import en from '../locales/en.json'
const page = ({params:{locale}}) => {
    const t = locale == 'fa' ? fa : en;
  return (
    <>
    {/* <Header title={t.Hero.title} />
    <About title={t.About.title} description={t.About.description} />
    <Footer /> */}
    </>
    
  )
}

export default page