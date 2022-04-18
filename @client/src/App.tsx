// import { Button } from "@yoapp/components";
import { Button } from '@yoapp/components'
import { getJustAmount, getAmountOnly } from '@yoapp/utils'

import React from 'react'
import './App.css'

function App() {
  console.log('get amount', getJustAmount('NPR. 200'))

  console.log('getAmountOnly', getAmountOnly('NPR111'))
  console.log('getAmountOnly', getAmountOnly('NPR.111'))
  console.log('getAmountOnly', getAmountOnly('Rs.222'))

  return (
    <div className='App'>
      Client
      <Button name='Submit' size='sm' type='button' />
    </div>
  )
}

export default App
