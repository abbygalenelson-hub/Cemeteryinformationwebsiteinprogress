import { Outlet } from 'react-router';
import { Navigation } from '../components/navigation';

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation />
      <main className="flex-1 bg-[hsl(121,15%,80%)]">
        <Outlet />
      </main>
      <footer className="border-t bg-white py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          HCWMC Database, created by Abbygale Nelson
        </div>
      </footer>
    </div>
  );
}