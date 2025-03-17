import Paymentcard from '@/app/(primary)/components/payment-card/components/paymentcard';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const PaymentCardPreview = () => {
  return (
    <LivePreviewComponent>
      <Paymentcard />
    </LivePreviewComponent>
  )
}

export default PaymentCardPreview;