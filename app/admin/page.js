"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

import SecondaryHeader from "../_components/headers/SecondaryHeader";

export default function AdminPage() {
  const [members, setMembers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newRole, setNewRole] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/members")
      .then((res) => setMembers(res.data));
  }, []);

  const addMember = async () => {
    const res = await axios.post("http://localhost:5000/api/members", {
      name: newName,
      role: newRole,
    });
    setMembers([...members, res.data]);
  };
  return (
    <>
      <SecondaryHeader title="Admin Panel" subtitle="Members" />
      <div>
        <ul>
          {members.map((m) => (
            <li key={m.id}>
              {m.name} - {m.role}
            </li>
          ))}
        </ul>
        <input
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          placeholder="Role"
          value={newRole}
          onChange={(e) => setNewRole(e.target.value)}
        />
        <button onClick={addMember}>Add Member</button>
      </div>
    </>
  );
}
