import Todos from '@/app/(primary)/components/todos/components/todos';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const TodosPreview = () => {
  return (
    <LivePreviewComponent>
      <Todos />
    </LivePreviewComponent>
  )
}

export default TodosPreview;