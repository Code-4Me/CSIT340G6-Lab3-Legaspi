const Header = ({ course }) => {
  return <h1>{course.name}</h1>
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

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return <p>Total units: {total}</p>
}

const Footer = ({ name, course, section }) => {
  return <p>{name} - {course} - {section}</p>
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
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer
        name="Rey Uriel Y. Legaspi"
        course="CSIT340"
        section="G6"
      />
    </div>
  )
}

export default App
