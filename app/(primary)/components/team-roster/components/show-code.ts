export const title = "Team Roster";
export const routepoint = "team-roster";
export const description = "A detailed team management component showcasing participants, roles, activity status, and permissions in a modern design.";

export const cliscript = "npx shadcn@latest add \"https://forgeui.amanshakya.in/registry/team-roster.json\"";

export const democode = `"use client";
import React from 'react'
import  TeamRoster from './components/ui/team-roster';
function Page() {
  return (
    <>
      <TeamRoster />
    </>
  )
}

export default Page;`;

export const code = `'use client'

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { UsersRound, Mail, MoreHorizontal, ShieldCheck } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface Member {
  userId: string;
  name: string;
  position: string;
  email: string;
  status: "online" | "offline";
  access: "owner" | "contributor" | "viewer";
}

interface MembersProfileProps {
  teamName?: string;
  outline?: string;
  collaborators?: Member[];
}

const members = {
  teamName: "Development Squad",
  outline: "Team focused on backend and infrastructure optimization for scalable solutions.",
  collaborators: [
    {
      userId: "1",
      name: "John Carter",
      position: "Backend Engineer",
      email: "john.carter@example.com",
      status: "online",
      access: "owner",
    },
    {
      userId: "2",
      name: "Alice Nguyen",
      position: "DevOps Specialist",
      email: "alice.nguyen@example.com",
      status: "online",
      access: "contributor",
    },
    {
      userId: "3",
      name: "Liam Perez",
      position: "Infrastructure Architect",
      email: "liam.perez@example.com",
      status: "offline",
      access: "viewer",
    },
  ],
} satisfies Required<MembersProfileProps>;

export default function TeamRoster({
  teamName = members.teamName,
  outline = members.outline,
  collaborators = members.collaborators,
}: Partial<MembersProfileProps> = members) {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-lg">
        <div className="bg-gradient-to-r from-emerald-100 to-emerald-50 dark:from-emerald-900/50 dark:to-emerald-900/30 p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100">
                {teamName}
              </h2>
              <p className="text-sm text-emerald-700 dark:text-emerald-300 mt-1">
                {outline}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-emerald-700 dark:text-emerald-300">
            <div className="flex items-center gap-2">
              <UsersRound className="w-5 h-5" />
              {collaborators.length} members
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              {
                collaborators.filter((p) => p.access === "owner").length
              }{" "}
              owners
            </div>
          </div>
        </div>

        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {collaborators.map((person) => (
            <div
              key={person.userId}
              className="flex items-center justify-between p-6 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors duration-200"
            >
              <div className="flex-1 min-w-0 mr-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {person.name}
                  </h3>
                  <Badge
                    variant="secondary"
                    className={\`px-2 py-0.5 text-xs font-medium rounded-full \${person.status === "online"
                      ? "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                      }\`}
                  >
                    {person.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {person.position}
                  </p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors duration-200 flex items-center gap-1.5"
                        >
                          <Mail className="w-4 h-4" />
                          <span className="sr-only">{person.email}</span>
                          Email
                        </button>
                      </TooltipTrigger>
                      <TooltipContent className="bg-zinc-200 dark:bg-zinc-800 border-none text-black dark:text-white">
                        <p >{person.email}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <Badge
                  variant="outline"
                  className={\`px-2 py-1 text-xs font-semibold rounded-full \${person.access === "owner"
                    ? "border-emerald-300 bg-emerald-100 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300"
                    : person.access === "contributor"
                      ? "border-blue-300 bg-blue-100 text-blue-800 dark:border-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                      : "border-zinc-300 bg-zinc-100 text-zinc-800 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                    }\`}
                >
                  {person.access}
                </Badge>
                <Button variant="ghost" size="icon" className="text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 ">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`;