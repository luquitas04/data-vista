/// <reference types="@testing-library/jest-dom" />
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../../test/renderWithProviders";
import { delay, http, HttpResponse, server } from "../../../test/server";
import { UsersPage } from "./UsersPage";

const mockUsers = [
  { id: 1, name: "Alice", username: "alice", email: "alice@email.com" },
  { id: 2, name: "Bob", username: "bob", email: "bob@email.com" },
];

describe("UsersPage", () => {
  it("muestra loading, luego la tabla y permite seleccionar un usuario", async () => {
    server.use(
      http.get(
        "https://jsonplaceholder.typicode.com/users",
        async () => {
          await delay(50);
          return HttpResponse.json(mockUsers);
        }
      ),
      http.get(
        "https://jsonplaceholder.typicode.com/posts",
        () =>
          HttpResponse.json([
            {
              id: 1,
              userId: 2,
              title: "Post de Bob",
              body: "Contenido de Bob",
            },
          ])
      ),
    );

    renderWithProviders(<UsersPage />);

    expect(
      screen.getByText(/Cargando usuarios/i)
    ).toBeInTheDocument();

    const table = await screen.findByRole("table");
    expect(table).toBeInTheDocument();
    expect(screen.queryByText(/Cargando usuarios/i)).not.toBeInTheDocument();

    const aliceRow = screen.getByText("Alice").closest("tr");
    const bobRow = screen.getByText("Bob").closest("tr");

    expect(aliceRow).toHaveAttribute("aria-selected", "false");
    expect(bobRow).toHaveAttribute("aria-selected", "false");

    fireEvent.click(bobRow!);

    await waitFor(() =>
      expect(screen.getByText("Bob").closest("tr")).toHaveAttribute(
        "aria-selected",
        "true"
      )
    );
    expect(screen.getByText("Alice").closest("tr")).toHaveAttribute(
      "aria-selected",
      "false"
    );
  });
});
