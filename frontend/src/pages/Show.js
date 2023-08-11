import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const note = useLoaderData();
  console.log(note);

  return (
    <div className="notes">
      <h2>{note.title}</h2>
      <h2>{note.description}</h2>
      <h2>{note.url}</h2>

    <h2 className="note-container">Update {note.title}</h2>
    <Form action={`/update/${note._id}`} method="post">
        <input type="text" name="title" placeholder="Note title" defaultValue={note.title}/>
        <input type="text" name="description" placeholder="description" defaultValue={note.description}/>
        <input type="text" name="url" placeholder="url" defaultValue={note.url}/>
        <input type="submit" value="Done"/>
    </Form>

      <Form action={`/delete/${note._id}`} method="post">
        <input type="submit" value="Delete"/>
      </Form>
    </div>
  );
}

export default Show;