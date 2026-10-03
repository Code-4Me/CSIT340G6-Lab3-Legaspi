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
      {parts.map(part => (
        <Part
          key={part.name}
          name={part.name}
          exercises={part.exercises}
        />
      ))}
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
