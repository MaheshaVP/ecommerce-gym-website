import React from 'react'

const Mapiframe = () => {
  return (
    <>
        <div style={{ width: '100%', height: '500px', padding:'10px 20px' }}>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13163.719530771676!2d77.48492845465057!3d12.948785799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f77a0588fd7%3A0x2ffe0cc6369c26ea!2sSahara%20Fitness%20Solutions%20-%20GYM%20Setup%20Industry%20experts!5e1!3m2!1sen!2sin!4v1746780461818!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    </>
  )
}

export default Mapiframe