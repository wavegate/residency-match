import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { AuthUser } from "aws-amplify/auth";
import { AuthEventData } from "@aws-amplify/ui";
import Specialties from "./specialties";
import Institutions from "./institutions";
import SpecialtyCreateForm from "./ui-components/SpecialtyCreateForm";
import InterviewInviteCreateForm from "./ui-components/InterviewInviteCreateForm";
import ProgramCreateForm from "./ui-components/ProgramCreateForm";
import UserProfileCreateForm from "./ui-components/UserProfileCreateForm";
import InstitutionCreateForm from "./ui-components/InstitutionCreateForm";
import Programs from "./programs";

const client = generateClient<Schema>();

interface InnerProps {
  user: AuthUser | undefined;
  signOut: ((data?: AuthEventData | undefined) => void) | undefined;
}

function Inner({ signOut, user }: InnerProps) {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery({ authMode: "userPool" }).subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, [user]);

  function createTodo() {
    client.models.Todo.create(
      {
        content: window.prompt("Todo content"),
      },
      {
        authMode: "userPool",
      }
    );
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete(
      { id },
      {
        authMode: "userPool",
      }
    );
  }

  return (
    <main>
      <SpecialtyCreateForm />
      <InterviewInviteCreateForm />
      <ProgramCreateForm />
      <UserProfileCreateForm />
      <InstitutionCreateForm />
      <h1>{user?.signInDetails?.loginId}'s todos</h1>
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
            {todo.content}
          </li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>Sign out</button>
      <Specialties />
      <Institutions />
      <Programs />
    </main>
  );
}

export default Inner;
