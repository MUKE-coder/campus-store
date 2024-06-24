import { getSingleStyle } from '@/actions/styles'
import StylesCreateForm from '@/components/StylesCreateForm'
import FormHeader from '@/components/backoffice/FormHeader'
import React from 'react'

export default async function Page() {
  const singleStyle= await getSingleStyle()
  // console.log(singleStyle)
  return (
    <div>
     <FormHeader title="Adjust Styles" />
     <StylesCreateForm updateData={singleStyle}/>
    </div>
  )
}
