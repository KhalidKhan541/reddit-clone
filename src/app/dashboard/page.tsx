export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="rounded bg-white p-4 shadow">Stats</div>
        <div className="rounded bg-white p-4 shadow">Activity</div>
        <div className="rounded bg-white p-4 shadow">Settings</div>
      </div>
    </div>
  );
}
