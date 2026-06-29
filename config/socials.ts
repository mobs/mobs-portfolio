import {
  LucideGitBranch,
  Link2Icon,
  Mail,
} from "lucide-react";

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/your-github",
    icon: LucideGitBranch,
  },

  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-linkedin",
    icon: Link2Icon,
  },

  {
    label: "Email",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
] as const;