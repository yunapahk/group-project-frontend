import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ConfirmBox from "../components/ConfirmBox";
import { useLoaderData, Form, useNavigate } from "react-router-dom";


function Show() {
  const note = useLoaderData();
  console.log(note);
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteData, setDeleteData] = useState({});
  const navigate = useNavigate();

  function loadUsers() {
    axios.get("https://bookmarkd-504g.onrender.com/note/:id").then((res) => {
      setUsers(res.data.reverse());
    });
  }

  useEffect(() => {
    // loadUsers();
  }, []);

  const deleteUser = async () => {
    await axios
      .delete(`https://bookmarkd-504g.onrender.com/note/${deleteData?._id}`)
      .then((res) => {
        // loadUsers();
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
      navigate("/");
  }

  console.log(deleteData);

  function openDelete(data) {
    setOpen(true);
    setDeleteData(data);
  }


  return (
    <div className="note">
    <div className="notes">
      <h2>{note.title}</h2>
      <h2>{note.description}</h2>
      <h2>{note.url}</h2>

    <h2>Update {note.title}</h2>
    <h2 className="note-container">Update {note.title}</h2>
    <Form action={`/update/${note._id}`} method="post">
        <input type="text" name="title" placeholder="Note title" defaultValue={note.title}/>
        <input type="text" name="description" placeholder="description" defaultValue={note.description}/>
        <input type="text" name="url" placeholder="url" defaultValue={note.url}/>
        <input type="submit" value="Update Note"/>
        <input type="submit" value="Done"/>
    </Form>

    <h2>Delete Note</h2>
    <Link
      onClick={() => openDelete(note)}
      to={"#"}
      className="bg-red-600 text-white px-6 py-2 rounded-lg"
    >
      Delete
    </Link>

    <ConfirmBox
        open={open} closeDialog={() => setOpen(false)}
        title={deleteData?.title}
        deleteFunction={()=> deleteUser()}
      />
 
    

    </div>
    </div>
  );
}

export default Show;


