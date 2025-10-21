import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '@prism/ui';

export function App() {
  return (
    <div className="w-full h-screen">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
