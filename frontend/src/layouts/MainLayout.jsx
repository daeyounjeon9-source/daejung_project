export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {children}
    </div>
  );
}