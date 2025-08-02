import type { FooterProps } from "../../libs/types";

export function Footer(footer: FooterProps) {
  return (
    <footer className="text-secondary text-center p-2 bg-light mt-auto">
      Copyright © {footer.year} {footer.fullName} {footer.studentId}
    </footer>
  );
}
