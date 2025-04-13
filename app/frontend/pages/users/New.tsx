import { useForm } from "@inertiajs/react";

const New = () => {
  const { data, setData, post, progress, processing, errors } = useForm({
    name: "",
    email: "",
    remember: false,
  });

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post("/users");
  };

  return (
    <form onSubmit={submit}>
      <label htmlFor="first_name">First name:</label>

      <label htmlFor="name">name:</label>
      <input
        id="name"
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

export default New;
