/* eslint-env jest */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navigation from "../Navigation";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Navigation", () => {
  it("highlights Home on root path", () => {
    (usePathname as jest.Mock).mockReturnValue("/");
    const { container } = render(<Navigation />);

    expect(screen.getByRole("link", { name: "Home" })).toHaveClass("text-purple-400");
    expect(screen.getByRole("link", { name: "Portfolio" })).not.toHaveClass("text-purple-400");
    expect(
      container.querySelectorAll("a.text-purple-400")
    ).toHaveLength(1);
  });

  it("highlights Portfolio on portfolio subpage", () => {
    (usePathname as jest.Mock).mockReturnValue("/portfolio/project");
    const { container } = render(<Navigation />);

    expect(screen.getByRole("link", { name: "Portfolio" })).toHaveClass(
      "text-purple-400"
    );
    expect(screen.getByRole("link", { name: "Home" })).not.toHaveClass(
      "text-purple-400"
    );
    expect(
      container.querySelectorAll("a.text-purple-400")
    ).toHaveLength(1);
  });
});
