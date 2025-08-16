import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'; // Redux
import '../style/home.css';
import { AnimatedStack } from "./AnimatedStack";
import {CategorySection} from "./category";
import { MostRecommended } from './MostRecommended';
import { Testimonials } from './Testimonials';

function Home() {
  return (
    <>
      {/* SEO Optimized Header Section */}
      <header style={{ textAlign: 'center', padding: '20px 0', backgroundColor: '#fdf2f8' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#e11d48',
          margin: '0 0 10px 0'
        }}>
          Book My Mehndi - Professional Mehndi Services Mumbai
        </h1>
        <h2 style={{ 
          fontSize: '1.5rem', 
          color: '#374151',
          margin: '0 0 15px 0',
          fontWeight: 'normal'
        }}>
          Expert Mehndi Artists for Weddings, Parties & Special Events
        </h2>
        <p style={{ 
          fontSize: '1.1rem', 
          color: '#6b7280',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Book professional mehndi services in Mumbai. We bring expert mehndi artists to your home for beautiful bridal mehndi, Arabic designs, festive patterns, and party mehndi. Call +91 93079 23484 to book your appointment today!
        </p>
        
        {/* Call-to-Action Buttons */}
        <div style={{ marginTop: '20px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button style={{
            backgroundColor: '#e11d48',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none'
          }}>
            Book Mehndi Now
          </button>
          <a href="tel:+919307923484" style={{
            backgroundColor: '#059669',
            color: 'white',
            padding: '12px 24px',
            border: 'none',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block'
          }}>
            Call Now: +91 93079 23484
          </a>
        </div>
      </header>

      {/* Main Content Sections */}
      <main>
        {/* Hero Gallery */}
        <section aria-label="Mehndi Design Gallery">
          <AnimatedStack />
        </section>

        {/* Services Section with SEO Keywords */}
        <section style={{ padding: '40px 20px', backgroundColor: '#f9fafb' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', color: '#1f2937', marginBottom: '20px' }}>
              Our Mehndi Services in Mumbai
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px auto' }}>
              Professional at-home mehndi services with expert artists. Book mehndi for weddings, parties, festivals, and special occasions across Mumbai.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '30px' }}>
              <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#e11d48', fontSize: '1.3rem', marginBottom: '10px' }}>Wedding Mehndi Services</h3>
                <p style={{ color: '#6b7280' }}>Book wedding mehndi with intricate bridal designs. Perfect for brides and wedding parties in Mumbai.</p>
              </div>
              <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#e11d48', fontSize: '1.3rem', marginBottom: '10px' }}>Arabic Mehndi Designs</h3>
                <p style={{ color: '#6b7280' }}>Beautiful Arabic mehndi patterns with bold strokes and floral designs. Book your Arabic mehndi today.</p>
              </div>
              <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                <h3 style={{ color: '#e11d48', fontSize: '1.3rem', marginBottom: '10px' }}>Party & Festival Mehndi</h3>
                <p style={{ color: '#6b7280' }}>Book mehndi for parties, festivals, and celebrations. Quick and beautiful designs for all occasions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section aria-label="Mehndi Design Categories">
          <CategorySection />
        </section>

        {/* Popular Designs */}
        <section aria-label="Most Recommended Mehndi Designs">
          <MostRecommended />
        </section>

        {/* Customer Reviews */}
        <section aria-label="Customer Testimonials">
          <Testimonials />
        </section>

        {/* Why Choose Us Section */}
        <section style={{ padding: '50px 20px', backgroundColor: '#fdf2f8' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', color: '#1f2937', marginBottom: '30px' }}>
              Why Book My Mehndi Services?
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ color: '#e11d48', fontSize: '1.2rem', marginBottom: '10px' }}>✓ At-Home Service</h3>
                <p style={{ color: '#6b7280' }}>We come to your location in Mumbai. No need to travel - book mehndi service at your convenience.</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ color: '#e11d48', fontSize: '1.2rem', marginBottom: '10px' }}>✓ Expert Artists</h3>
                <p style={{ color: '#6b7280' }}>Professional mehndi artists with years of experience in bridal, Arabic, and traditional designs.</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ color: '#e11d48', fontSize: '1.2rem', marginBottom: '10px' }}>✓ Natural Henna</h3>
                <p style={{ color: '#6b7280' }}>We use only natural, safe henna for dark, long-lasting mehndi designs.</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ color: '#e11d48', fontSize: '1.2rem', marginBottom: '10px' }}>✓ Custom Designs</h3>
                <p style={{ color: '#6b7280' }}>Book mehndi with your favorite designs. Upload patterns and we'll recreate them perfectly.</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ color: '#e11d48', fontSize: '1.2rem', marginBottom: '10px' }}>✓ Flexible Timing</h3>
                <p style={{ color: '#6b7280' }}>Easy online booking with flexible date and time slots to suit your schedule.</p>
              </div>
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ color: '#e11d48', fontSize: '1.2rem', marginBottom: '10px' }}>✓ Affordable Prices</h3>
                <p style={{ color: '#6b7280' }}>Competitive pricing for all mehndi services. Starting from ₹550 for basic designs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ padding: '40px 20px', backgroundColor: '#1f2937', color: 'white', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Ready to Book Your Mehndi?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '25px' }}>
            Call now to book professional mehndi services in Mumbai. Available 7 days a week!
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919307923484" style={{
              backgroundColor: '#e11d48',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '25px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              📞 +91 93079 23484
            </a>
            <a href="tel:+919325353778" style={{
              backgroundColor: '#059669',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '25px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block'
            }}>
              📞 +91 93253 53778
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;