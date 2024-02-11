const Course = ({ course }) => {
  console.log('Course props:', course)
  return (
    <>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
      <Total courseParts={course.parts} />
    </>
  )
}

const Header = ({ courseName }) => {
  console.log('Header props:', courseName)
  return <h1>{courseName}</h1>
}

const Content = ({ courseParts }) => {
  console.log('Content props:', courseParts)
  // Use the higher-order function map to render the parts regardless of
  // the number of parts
  return (
    <>
      {courseParts.map((part) => (
        <Part key={part.id} coursePart={part} />
      ))}
    </>
  )
}

const Part = ({ coursePart }) => {
  console.log('Part props:', coursePart)
  return (
    <p>
      {coursePart.name} {coursePart.exercises}
    </p>
  )
}

const Total = ({ courseParts }) => {
  console.log('Total props:', courseParts)
  // Use the higher-order function reduce to sum the exercises of all the parts
  const total = courseParts.reduce((sum, part) => sum + part.exercises, 0)
  return <b>total of {total} exercises</b>
}

export default Course
