import React from 'react';
import { Phone } from 'lucide-react';

export default function MehndiServicePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fdf2f8 0%, #fed7aa 50%, #fef3c7 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Blurred semi-circle background */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '384px',
        height: '384px',
        background: 'linear-gradient(225deg, #fda4af, #fdba74, #fde68a)',
        borderRadius: '50%',
        filter: 'blur(64px)',
        opacity: 0.3,
        transform: 'translateX(33%) translateY(-33%)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '320px',
        height: '320px',
        background: 'linear-gradient(45deg, #fde68a, #fda4af, #fdba74)',
        borderRadius: '50%',
        filter: 'blur(64px)',
        opacity: 0.25,
        transform: 'translateX(-33%) translateY(33%)'
      }}></div>
      
      {/* Decorative elements */}

      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '0 24px',
        textAlign: 'center'
      }}>
        
        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #e11d48, #ea580c, #d97706)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            marginBottom: '16px'
          }}>
            Beautiful Mehndi
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#374151',
            fontWeight: '500'
          }}>
       Exquisite bookmymehndi.com for Your Special Moments
          </p>
        </div>

        {/* Smiley Face */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            width: '96px',
            height: '96px',
            background: 'linear-gradient(135deg, #fbbf24, #f97316)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            transform: 'scale(1)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            <div style={{ position: 'relative' }}>
              {/* Eyes */}
              <div style={{
                display: 'flex',
                gap: '12px',
                marginBottom: '8px'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  background: 'white',
                  borderRadius: '50%'
                }}></div>
                <div style={{
                  width: '12px',
                  height: '12px',
                  background: 'white',
                  borderRadius: '50%'
                }}></div>
              </div>
              {/* Smile */}
              <div style={{
                width: '32px',
                height: '16px',
                borderBottom: '4px solid white',
                borderRadius: '50%',
                transform: 'translateX(2px)'
              }}></div>
            </div>
          </div>
        </div>

        {/* Hands Animation */}
        <div style={{
          marginBottom: '48px',
          position: 'relative'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px'
          }}>
            {/* Left Hand */}
            <div style={{
              transform: 'rotate(0deg)',
              transition: 'transform 0.5s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'rotate(12deg)'}
            onMouseLeave={(e) => e.target.style.transform = 'rotate(0deg)'}
            >
              <svg width="80" height="100" viewBox="0 0 80 100" style={{
                color: '#e11d48',
                fill: 'currentColor'
              }}>
                <path d="M40 20 C45 15, 55 15, 60 25 L65 40 C70 45, 70 55, 65 60 L60 75 C55 85, 45 85, 40 80 L35 75 C30 85, 20 85, 15 75 L10 60 C5 55, 5 45, 10 40 L15 25 C20 15, 30 15, 35 20 Z" />
                {/* Mehndi pattern */}
                <circle cx="40" cy="50" r="8" fill="white" opacity="0.3"/>
                <path d="M35 45 Q40 40, 45 45 Q40 50, 35 45" fill="white" opacity="0.4"/>
              </svg>
            </div>
            
            {/* Right Hand */}
            <div style={{
              transform: 'rotate(0deg)',
              transition: 'transform 0.5s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'rotate(-12deg)'}
            onMouseLeave={(e) => e.target.style.transform = 'rotate(0deg)'}
            >
              <svg width="80" height="100" viewBox="0 0 80 100" style={{
                color: '#ea580c',
                fill: 'currentColor'
              }}>
                <path d="M40 20 C45 15, 55 15, 60 25 L65 40 C70 45, 70 55, 65 60 L60 75 C55 85, 45 85, 40 80 L35 75 C30 85, 20 85, 15 75 L10 60 C5 55, 5 45, 10 40 L15 25 C20 15, 30 15, 35 20 Z" />
                {/* Mehndi pattern */}
                <circle cx="40" cy="50" r="8" fill="white" opacity="0.3"/>
                <path d="M35 45 Q40 40, 45 45 Q40 50, 35 45" fill="white" opacity="0.4"/>
              </svg>
            </div>
          </div>
          
          {/* Decorative dots */}
          <div style={{
            position: 'absolute',
            top: '-16px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px'
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#fb7185',
              borderRadius: '50%',
              animation: 'pulse 1s infinite'
            }}></div>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#fb923c',
              borderRadius: '50%',
              animation: 'pulse 1s infinite',
              animationDelay: '0.15s'
            }}></div>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#fbbf24',
              borderRadius: '50%',
              animation: 'pulse 1s infinite',
              animationDelay: '0.3s'
            }}></div>
          </div>
        </div>

        {/* Services Description */}
        <div style={{
          marginBottom: '48px',
          maxWidth: '48rem'
        }}>
          <p style={{
            fontSize: '1.125rem',
            color: '#4b5563',
            lineHeight: '1.75'
          }}>
            Transform your hands into beautiful canvases with our intricate mehndi designs. 
            Perfect for weddings, festivals, and special celebrations.
          </p>
        </div>

        {/* Contact Information */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(8px)',
          borderRadius: '16px',
          padding: '32px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.5)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '24px'
          }}>Get in Touch</h3>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* Contact 1 */}
            <a href="tel:+919307923484" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'linear-gradient(to right, #ec4899, #ec4899)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '9999px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              fontWeight: '500',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              e.target.style.transform = 'scale(1)';
            }}
            >
              <Phone size={20} />
              <span>+91 93079 23484</span>
            </a>
            
            {/* Contact 2 */}
            <a href="tel:+919325353778" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'linear-gradient(to right, #f97316, #f59e0b)',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '9999px',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              fontWeight: '500',
              textDecoration: 'none'
            }}
            onMouseEnter={(e) => {
              e.target.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              e.target.style.transform = 'scale(1)';
            }}
            >
              <Phone size={20} />
              <span>+91 93253 53778</span>
            </a>
          </div>
          
          <div style={{
            marginTop: '24px',
            fontSize: '0.875rem',
            color: '#4b5563'
          }}>
           Now 📍 Available at Your place • Book your appointment today!
          </div>
        </div>

        {/* Website Status */}
        <div style={{
          marginTop: '32px',
          padding: '8px 16px',
          background: '#fef3c7',
          border: '1px solid #fcd34d',
          borderRadius: '8px'
        }}>
          <p style={{
            color: '#92400e',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}>
            🚧 Website under development - More features coming soon! - Visit after 2hr !
          </p>
        </div>
      </div>

      {/* Add CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        @media (min-width: 768px) {
          .contact-buttons {
            flex-direction: row !important;
          }
          .main-title {
            font-size: 3.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}