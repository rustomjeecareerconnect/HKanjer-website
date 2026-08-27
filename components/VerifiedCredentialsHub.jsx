'use client';

import DocumentSheetViewer from './DocumentSheetViewer';

export default function VerifiedCredentialsHub({ defaultTab = 'ximr-letter' }) {
  return <DocumentSheetViewer defaultDocumentId={defaultTab} />;
}
