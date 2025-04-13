import { Head, Link } from "@inertiajs/react";

type Props = {
  users: {
    id: number;
    name: string;
    email: string;
  }[];
};

const Index = ({ users }: Props) => {
  return (
    <>
      <Head title="User Index" />
      <div>
        <h1>User Index</h1>
        <Link href="/users/new">New User</Link>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>
                <Link href={`/users/${user.id}`}>
                  {user.name} - {user.email}
                </Link>
              </p>
              <p>
                <Link href={`/users/${user.id}/edit`}>Edit</Link>
              </p>
              <p>-----------------------------</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Index;
