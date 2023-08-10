import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const notes = useLoaderData()

  return (
    <div>
      <h2>Create a note</h2>
      <Form action="/create" method="post">
        <input type="input" name="title" placeholder="note title" />
        <input type="input" name="description" placeholder="note date" />
        <input type="input" name="category" placeholder="note date" />
        <input type="submit" value="create note" />
      </Form>

      <h2>Notes</h2>
      {notes.map(note => (
        <div key={note._id} className="note">
          <Link to={`/${note._id}`}>
            <h1>{note.title}</h1>
          </Link>
          <h3>{note.description}</h3>
          <h3>{note.url}</h3>
        </div>
      ))}
    </div>
  )
}

export default Index
