import { Routes, Route, Navigate } from 'react-router-dom';
import { Phonebook } from 'pages/Phonebook';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Phonebook />}>
        <Route path="*" element={<Navigate to="/" replase/>} />
      </Route>
    </Routes>
  );
};
