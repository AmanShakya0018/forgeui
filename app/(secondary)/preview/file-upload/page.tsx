import FileUpload from '@/app/(primary)/components/file-upload/components/file-upload';
import LivePreviewComponent from '@/components/livepreview';
import React from 'react'

const FileUploadPreview = () => {
  return (
    <LivePreviewComponent>
      <FileUpload />
    </LivePreviewComponent>
  )
}

export default FileUploadPreview;