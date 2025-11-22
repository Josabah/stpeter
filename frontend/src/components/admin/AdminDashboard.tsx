'use client';

import { useState } from 'react';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
// Removed: import DashboardHome from './DashboardHome';
// Removed: import DivisionsManager from './DivisionsManager';
import EventsManager from './EventsManager';
import GalleryManager from './GalleryManager';
// Removed: import ContactManager from './ContactManager';
import UsersManager from './UsersManager';

type AdminView = 'events' | 'gallery' | 'users';

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>('events');
  
  // Function to render the current view
  const renderView = () => {
    switch (currentView) {
      case 'events':
        return <EventsManager />;
      case 'gallery':
        return <GalleryManager />;
      case 'users':
        return <UsersManager />;
      default:
        return <EventsManager />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex flex-col flex-1 overflow-hidden md:ml-64">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {renderView()}
        </main>
      </div>
    </div>
  );
}