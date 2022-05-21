import React from 'react';

const Reason = () => {
  const reasons = [
    {
      icon: '/assets/why_us/icon_complete.svg',
      title: 'Mobil Lengkap',
      description: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
    },
    {
      icon: '/assets/why_us/icon_price.svg',
      title: 'Harga Murah',
      description: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
    },
    {
      icon: '/assets/why_us/icon_24hrs.svg',
      title: 'Layanan 24 Jam',
      description: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
    },
    {
      icon: '/assets/why_us/icon_professional.svg',
      title: 'Sopir Profesional',
      description: 'Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
    },
  ];

  return (
    <div className='mb-32'>
      <h2 className='font-bold text-3xl'>Why Us?</h2>
      <p className='mt-4'>Mengapa harus pilih Binar Car Rental?</p>
      <div className='mt-4 flex justify-between gap-2'>
        {reasons.map(({ icon, title, description }, index) => (
          <div key={index} className='border-2 rounded p-3' style={{ minWidth: '320px', maxWidth: '320px' }}>
            <img style={{ width: '32px' }} src={icon} alt={title} />
            <h3 className='mt-2 font-bold text-lg'>{title}</h3>
            <p className='mt-2'>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reason;