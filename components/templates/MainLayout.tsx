// components/MainLayout.tsx
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      {/* Menú izquierdo */}
      <aside className="w-1/5 bg-white border-r p-4 fixed left-0 h-screen overflow-y-auto">
        {/* Aquí irá tu info personal */}
      </aside>

      {/* Contenido central */}
      <main className="w-3/5 mx-auto px-4 ml-[20%] mr-[10%] overflow-y-scroll h-screen">
        {children}
      </main>

      {/* Menú derecho */}
      <aside className="w-[10%] bg-white border-l p-4 fixed right-0 h-screen">
        {/* Aquí irán íconos sociales */}
      </aside>
    </div>
  );
};

export default MainLayout;
