import React from 'react'
import './App.css'

interface IProps {
  name: string
}

const App: React.FunctionComponent<IProps> = props => {
  const { name } = props
  return <div>hello react!</div>
}

export default App