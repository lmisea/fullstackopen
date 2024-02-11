const Header = ({ courseName }) => {
  console.log('Header props:', courseName)
  return <h1>{courseName}</h1>
}

const Part = ({ coursePart }) => {
  console.log('Part props:', coursePart)
  return (
    <p>
      {coursePart.name} {coursePart.exercises}
    </p>
  )
}

const Content = ({ courseParts }) => {
  console.log('Content props:', courseParts)
  return (
    <>
      {courseParts.map((part) => (
        <Part key={part.id} coursePart={part} />
      ))}
    </>
  )
}

const Course = ({ course }) => {
  console.log('Course props:', course)
  return (
    <>
      <Header courseName={course.name} />
      <Content courseParts={course.parts} />
    </>
  )
}

export default Course
