import { render, screen } from "@testing-library/react";
import { UserPosts } from "./UsersPosts";

describe("UserPosts", () => {
  it("muestra el mensaje para seleccionar usuario si no hay userId", () => {
    render(<UserPosts posts={[]} />);

    expect(
      screen.getByText("Seleccioná un usuario para ver sus posts.")
    ).toBeInTheDocument();
  });

  it("muestra estado de carga", () => {
    render(<UserPosts userId={1} posts={[]} isLoading />);

    expect(screen.getByText("Cargando posts…")).toBeInTheDocument();
  });

  it("muestra mensaje de error", () => {
    render(<UserPosts userId={1} posts={[]} error={new Error("boom")} />);

    expect(screen.getByText("Error al cargar los posts.")).toBeInTheDocument();
  });

  it("muestra mensaje cuando el usuario no tiene posts", () => {
    render(<UserPosts userId={1} posts={[]} />);

    expect(
      screen.getByText("Este usuario no tiene posts.")
    ).toBeInTheDocument();
  });

  it("renderiza la lista de posts", () => {
    const posts = [
      { id: 1, title: "Primer post", body: "Contenido del primer post" },
      { id: 2, title: "Segundo post", body: "Contenido del segundo post" },
    ];

    render(<UserPosts userId={2} posts={posts} />);

    expect(screen.getByText("Posts del usuario #2")).toBeInTheDocument();
    expect(screen.getByText("Primer post")).toBeInTheDocument();
    expect(screen.getByText("Contenido del primer post")).toBeInTheDocument();
    expect(screen.getByText("Segundo post")).toBeInTheDocument();
    expect(screen.getByText("Contenido del segundo post")).toBeInTheDocument();
  });
});
