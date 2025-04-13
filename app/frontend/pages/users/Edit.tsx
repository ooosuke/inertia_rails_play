import { useForm } from "@inertiajs/react";

type User = {
  id: number;
  name: string;
  email: string;
};

const Edit = ({ user }: { user: User }) => {
  const { data, setData, patch, progress, processing, errors } = useForm({
    name: user.name || "",
    email: user.email || "",
    remember: false,
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    patch(`/users/${user.id}`);
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="first_name">First name:</label>

      <label htmlFor="nanme">name:</label>
      <input
        id="nanme"
        value={data.name}
        onChange={(e) => setData("name", e.target.value)}
      />
      {errors.name && <div>{errors.name}</div>}

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        value={data.email}
        onChange={(e) => setData("email", e.target.value)}
      />
      {errors.email && <div>{errors.email}</div>}

      <button type="submit" disabled={processing}>
        Submit
      </button>
      {progress && (
        <progress value={progress.percentage} max="100">
          {progress.percentage}%
        </progress>
      )}
    </form>
  );
};

export default Edit;
