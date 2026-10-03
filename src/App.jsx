const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}

const Content = () => {
  return (
    <>
      <Part name="CSIT321" exercises={3} />
      <Part name="IT365" exercises={3} />
      <Part name="IT317" exercises={3} />
    </>
  )
}

const App = () => {
  const course = "CSIT340 - Web Systems and Technologies"

  return (
    <div>
      <Header course={course} />
      <Content />
    </div>
  )
}

export default App

