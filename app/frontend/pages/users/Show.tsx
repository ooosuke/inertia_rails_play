import { Head } from "@inertiajs/react";

export const Show = ({ user }: { user: { id: number; name: string; email: string } }) => {
  return (
    <>
      <Head title="User Show" />
      <div>
        <h1>User Show</h1>
        <p>
          ID: {user.id} - Name: {user.name} - Email: {user.email}
        </p>
      </div>
    </>
  );
}
export default Show;