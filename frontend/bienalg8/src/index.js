import React from 'react'
import ReactDOM from 'react-dom/client'
import {Barra_Nav} from './barranav'
const rootElement = document.getElementById ('root')
const root = ReactDOM.createRoot (rootElement)  // aplicacion inicial de react


// funciones son componentes



root.render (<> <Barra_Nav/> </>)  // espera elementos html