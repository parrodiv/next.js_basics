
const App = (props) => {
  return (
    <>
      <p>Header</p>
      <props.Component></props.Component>
      <p>Footer</p>
    </>
  )
}

export default App
