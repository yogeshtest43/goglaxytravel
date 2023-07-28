import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage.page";
import NotFoundPage from "./pages/error/NotFound.page";
import CustomToast from "./components/toast/CustomToast.component";
import FlightResult from "./pages/flight-result/FlightResult.page";
import Layout from "./containers/layout/Layout.container";
import BookTicketsPage from "./pages/book-tickets/BookTickets.page";
import PrivacyPolicyPage from "./pages/legal/PrivacyPolicy.page";
import TncPage from "./pages/legal/Tnc.page";
import DisclaimerPage from "./pages/legal/Disclaimer.page";
import RefundPolicyPage from "./pages/legal/RefundPolicy.page";
import ContactPage from "./pages/contact-us/Contact.page";
import AboutPage from "./pages/about-us/About.page";
import PackagesPage from "./pages/packages/Packages.page";
import Payment from "./pages/legal/Payment.page";
import { HelmetProvider } from 'react-helmet-async';
// test comment

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="flights" element={<FlightResult />} />
            <Route path="booking" element={<BookTicketsPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="terms-and-conditions" element={<TncPage />} />
            <Route path="disclaimer" element={<DisclaimerPage />} />
            <Route path="Refund-and-cancellation-Policy" element={<RefundPolicyPage />} />
            <Route path="contact-us" element={<ContactPage />} />
            <Route path="about-us" element={<AboutPage />} />
            <Route path="packages" element={<PackagesPage />} />
            <Route path="thank-you-page" element={<Payment/>}/>
            {/* <Route path="deals">
            <Route index element={<DealsPage />} />
            <Route path=":dealSlug" element={<SingleDealPage />} />
          </Route> */}

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        </HelmetProvider>
      </BrowserRouter>
      <CustomToast />
    </div>
  );
}

export default App;
