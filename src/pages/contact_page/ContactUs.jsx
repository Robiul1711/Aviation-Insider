import React from 'react'
import contact from '@/assets/images/contact.png'
import CommonBanner from '@/components/common/CommonBanner'
import CommonAds from '@/components/common/CommonAds'
import OtherCommonLinks from '@/components/common/OtherCommonLinks'
import ContaactForm from './ContaactForm'
const ContactUs = () => {
  return (
    <div>
      <CommonBanner image={contact} title="Contact Us" />
      <ContaactForm />
      <OtherCommonLinks className={'flex flex-wrap justify-center items-center gap-5 section-padding-x py-14'}/>
      <CommonAds />
    </div>
  )
}

export default ContactUs
