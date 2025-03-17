import Transaction from '@/app/(primary)/components/transactions/components/transactions';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const TransactionsPreview = () => {
  return (
    <LivePreviewComponent>
      <Transaction />
    </LivePreviewComponent>
  )
}

export default TransactionsPreview;