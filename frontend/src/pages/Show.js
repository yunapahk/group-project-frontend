import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const note = useLoaderData();
  console.log(note);

  return (
    <div className="note">
      <h2>{note.title}</h2>
      <h2>{note.description}</h2>
      <h2>{note.url}</h2>

    <h2>Update {note.title}</h2>
    <Form action={`/update/${note._id}`} method="post">
        <input type="text" name="date" placeholder="Note title" defaultValue={note.title}/>
        <input type="text" name="category" placeholder="Note description" defaultValue={note.description}/>
        <input type="text" name="description" placeholder="Note url" defaultValue={note.url}/>
        <input type="submit" value="Update Note"/>
    </Form>

    <h2>Delete Note</h2>
      <Form action={`/delete/${note._id}`} method="post">
        <input type="submit" value="Delete Note"/>
      </Form>
    </div>
  );
}

export default Show;