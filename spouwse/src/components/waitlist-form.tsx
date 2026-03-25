"use client";

import { useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [relationshipGoal, setRelationshipGoal] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          fullName,
          relationshipGoal,
          source: "landing-page",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setMessage("You’re on the list.");
      setEmail("");
      setFullName("");
      setRelationshipGoal("");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      <div className="space-y-2">
        <label className="text-sm text-white/70">Name</label>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/30"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-white/70">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/30"
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm text-white/70">What do you want help with?</label>
        <textarea
          value={relationshipGoal}
          onChange={(e) => setRelationshipGoal(e.target.value)}
          placeholder="Better communication, a stronger marriage, less conflict, more connection..."
          rows={4}
          className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-white/30"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-2xl bg-white px-4 py-3 font-medium text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "loading" ? "Joining..." : "Join the waitlist"}
      </button>

      {message ? (
        <p
          className={
            status === "success"
              ? "text-sm text-emerald-300"
              : "text-sm text-red-300"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
