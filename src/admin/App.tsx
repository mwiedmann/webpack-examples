import * as React from 'react'
import { hugeHelper } from '../components/helper2'

const App = () => {
  const [guid, setGuid] = React.useState()
  const [hugeData, setHugeData] = React.useState()

  const handleGenerateGUIDClick = async () => {
    const { randomGuid } = await import('../components/helper1')
    setGuid(randomGuid())
  }

  const handleHugeDataClick = async () => {
    setHugeData(hugeHelper())
  }

  return (<>
    <h1>This is the ADMIN site.</h1>
    <button onClick={handleGenerateGUIDClick}>Generate GUID</button>
    <div>Your current GUID: {guid}</div>
    <button onClick={handleHugeDataClick}>Show Huge Data</button>
    <div>Your huge data: {hugeData}</div>
  </>)
}

export default App
