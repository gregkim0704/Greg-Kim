
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Listings } from './pages/Listings';
import { SuccessStories } from './pages/SuccessStories';
import { Consultation } from './pages/Consultation';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
