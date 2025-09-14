'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  const loginSegment = useSelectedLayoutSegment('team');
  return (
    <>
      <p>{loginSegment} HERE</p>

      <header>
        <h1>Dashboard</h1>
        <nav>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/dashboard/team">Team</Link>
          <Link href="/dashboard/analytics">Analytics</Link>
        </nav>
      </header>
      {children}

      <div className="flex flex-col gap-4">
        {team}
        {analytics}
      </div>
    </>
  );
}
