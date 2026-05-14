import React from "react";

interface TriperButtonProps {
  session: string;   // e.g. "triper_sess_123"
  amount: string;    // e.g. "$25" or "£25"
  children?: React.ReactNode;
}

export function TriperButton({ session, amount, children }: TriperButtonProps) {
  const handleClick = () => {
    // Redirect to your backend through Cloudflare Tunnel
    window.location.href =
      `https://marcus-production-additionally-cleaning.trycloudflare.com`;
  };

  return (
    <button
      onClick={handleClick}
      data-session={session}
      data-amount={amount}
      className="triper-button"
    >
      {children || `Pay ${amount}`}
    </button>
  );
}
