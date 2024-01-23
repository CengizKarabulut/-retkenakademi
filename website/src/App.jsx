// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [showPersonal, setShowPersonal] = useState(true);
  const [showObjective, setShowObjective] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [showCertifications, setShowCertifications] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showReferences, setShowReferences] = useState(false);
  const [showHobbies, setShowHobbies] = useState(false);

  const toggleSection = (section) => {
    switch (section) {
      case 'personal':
        setShowPersonal(!showPersonal);
        break;
      case 'objective':
        setShowObjective(!showObjective);
        break;
      case 'education':
        setShowEducation(!showEducation);
        break;
      case 'experience':
        setShowExperience(!showExperience);
        break;
      case 'skills':
        setShowSkills(!showSkills);
        break;
      case 'projects':
        setShowProjects(!showProjects);
        break;
      case 'certifications':
        setShowCertifications(!showCertifications);
        break;
      case 'languages':
        setShowLanguages(!showLanguages);
        break;
      case 'references':
        setShowReferences(!showReferences);
        break;
      case 'hobbies':
        setShowHobbies(!showHobbies);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container"> 
        <h2>Kişisel Bilgiler</h2>
      
      {showPersonal && (
        <section>
          <img src="/src/Cengiz.png" alt="Profil Resmi" className="profile-image" />
          <ul>
            <li>
              <label>Adınız Soyadınız:</label> Cengiz Karabulut
            </li>
            <li>
              <label>İletişim Bilgileriniz:</label> 
              <ul>
                <li>Telefon: 534 016 1987</li>
                <li>E-posta: cngzkrblt1987@gmail.com</li>
                <li>Adres: Bursa, Türkiye</li>
              </ul>
            </li>
          </ul>
        </section>
      )}

      <button className="section-button" onClick={() => toggleSection('objective')}>
        <h2>Hedef</h2>
      </button>
      {showObjective && (
        <section>
          <p>Kariyer Hedefiniz veya İstediğiniz Pozisyon: Girişimci Olmak</p>
        </section>
      )}

      <button className="section-button" onClick={() => toggleSection('education')}>
        <h2>Eğitim</h2>
      </button>
      {showEducation && (
        <section>
          <ul>
            <li>
              <label>Lisans/Master/Doktora Bilgileri:</label> Kimya-Lisans / Tekstil Mühendisliği- Yüksek Lisans
            </li>
            <li>
              <label>Okul Adı:</label> Uludağ Üniversitesi
            </li>
            <li>
              <label>Bölüm:</label> Kimya & Tekstil
            </li>
            <li>
              <label>Mezuniyet Tarihi:</label> Ekim 2021
            </li>
          </ul>
        </section>
      )}

      <button className="section-button" onClick={() => toggleSection('experience')}>
        <h2>İş Deneyimi</h2>
      </button>
      {showExperience && (
        <section>
          <ul>
            <li>
              <label>Şirket Adı:</label> Cengiz Danışmanlık<kbd></kbd> Şirketi
            </li>
            <li>
              <label>Pozisyon:</label> Proje Geliştirici
            </li>
            <li>
              <label>İşe Başlama Tarihi:</label> Temmuz 2020
            </li>
            <li>
              <label>Ayrılma Tarihi:</label> Devam Ediyor
            </li>
            <li>
              <label>Sorumluluklar ve Başarılar:</label>
              <ul>
                <li>Proje yönetimi</li>
                <li>Proje geliştirme ve test etme</li>
                <li>Ekibin koordinasyonu</li>
              </ul>
            </li>
          </ul>
        </section>
      )}

      {/* Diğer bölümleri ekleyebilirsiniz */}
      
      <button className="section-button" onClick={() => toggleSection('hobbies')}>
        <h2>Hobiler ve İlgi Alanları</h2>
      </button>
      {showHobbies && (
        <section>
          <p>Kişisel İlgi Alanlarınız: Yüzme, Müzik dinleme</p>
          <p>Hobileriniz: Kitap okuma, Yürüyüş yapma</p>
        </section>
      )}
    </div>
  );
};

export default App;
