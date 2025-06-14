import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import { Provider } from "react-redux"
import { store } from "./app/store.ts"
import App from "./App.tsx"

import "./styles/global.scss" // глобальные стили

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
