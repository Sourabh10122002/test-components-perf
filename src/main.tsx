import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IUIProvider } from '@inventive-ui/framework'
import { frameworkConfig, componentConfig } from '../.iui/generated/bootstrap.generated'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IUIProvider config={frameworkConfig} componentConfig={componentConfig}>
      <App />
    </IUIProvider>
  </StrictMode>,
)
