import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const notes = useLoaderData()

  return (
    <div>
     <div className="createNote"> 
      <h2 id="createNoteHeader">Create New Note</h2>
      <Form action="/create" method="post">
        <fieldset>
        <input type="input" name="title" placeholder="title" />
        <input type="input" name="description" placeholder="description" />
        <input type="input" name="url" placeholder="url" />
        <input type="submit" value="Done" />
        </fieldset>
      </Form>
      </div>
      <h2>Notes</h2>
      {notes.map(note => {
        return (
        <div key={note._id} className="note">
          <Link to={`/${note._id}`}>
            <h1>{note.title}</h1>
          </Link>
          <h3>{note.description}</h3>
          <h3>{note.url}</h3>
        </div>
  )})}
    </div>
  )
}

export default Index
