const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

let notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true,
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false,
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true,
  },
  {
    id: 4,
    content: 'This is a new note',
    important: false,
  },
]

// Middleware to log requests
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

// Middleware
app.use(express.json()) // Parse the request body as JSON
app.use(requestLogger)
app.use(cors()) // Allow requests from cross-origin
app.use(express.static('dist')) // Serve static files from the dist directory

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// Fetch all notes
app.get('/api/notes', (request, response) => {
  response.json(notes)
})

// Fetch a single note
app.get('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  const note = notes.find((note) => note.id === id)

  if (note) response.json(note)
  else response.status(404).end()
})

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0
  return maxId + 1
}

// Add a new note
app.post('/api/notes', (request, response) => {
  const body = request.body

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing',
    })
  }

  const note = {
    content: body.content,
    important: Boolean(body.important) || false,
    id: generateId(),
  }

  notes = notes.concat(note)

  response.json(note)
})

// Delete a note
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter((note) => note.id !== id)

  response.status(204).end()
})

// Middleware to handle unknown endpoints
app.use(unknownEndpoint)

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
