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

const Content = ({ parts }) => {
  return (
    <>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </>
  )
}

const App = () => {
  const course = {
    name: "CSIT340 - Web Systems and Technologies",
    parts: [
      {
        name: "CSIT321",
        exercises: 3
      },
      {
        name: "IT365",
        exercises: 3
      },
      {
        name: "IT317",
        exercises: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default App
