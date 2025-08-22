import React, { useState, useEffect } from "react";
import "./PHome.css";
import userIcon from "./assets/pngwing.com.png";
import { useNavigate } from "react-router-dom";

const parkingSpots = [
  {
    name: "kalaiyarasan parking area",
    location: "4th Cross, Saibaba Colony, Coimbatore - 13",
    image: "/image/parking1.jpg",
    rating: 4.2,
    phone: "919876543210",
  },
  {
    name: "sugan parking area",
    location: "10th Street, Gandhipuram, Coimbatore - 12",
    image: "/image/parking2.jpg",
    rating: 4.7,
    phone: "919123456789",
  },
  {
    name: "kavitha parking area",
    location: "Peelamedu Main Road, Coimbatore - 04",
    image: "/image/parking3.jpg",
    rating: 3.8,
    phone: "919234567890",
  },
  {
    name: "sri dharshini parking area",
    location: "R.S. Puram, Coimbatore - 02",
    image: "/image/parking4.jpg",
    rating: 4.9,
    phone: "919345678901",
  },
  {
    name: "kavin parking area",
    location: "Kovaipudur, Coimbatore - 21",
    image: "/image/parking5.jpg",
    rating: 4.3,
    phone: "919876543210",
  },
  {
    name: "rejesh parking area",
    location: "Race Course, Coimbatore - 18",
    image: "/image/parking6.jpg",
    rating: 4.6,
    phone: "919876543210",
  },
  {
    name: "iyan parking area",
    location: "Hope College, Coimbatore - 07",
    image: "/image/parking7.jpg",
    rating: 4.1,
    phone: "919876543210",
  },
  {
    name: "ram parking area",
    location: "Ganapathy, Coimbatore - 09",
    image: "/image/parking8.jpg",
    rating: 3.9,
    phone: "919876543210",
  },
  {
    name: "subash parking area",
    location: "Peelamedu Road, Coimbatore - 05",
    image: "/image/parking9.jpg",
    rating: 4.8,
    phone: "919876543210",
  },
  {
    name: "suriya parking area",
    location: "Ukkadam, Coimbatore - 01",
    image: "/image/parking10.jpg",
    rating: 4.0,
    phone: "919876543210",
  },
  {
    name: "kali parking area",
    location: "Singanallur, Coimbatore - 14",
    image: "/image/parking11.jpg",
    rating: 4.4,
    phone: "919876543210",
  },
  {
    name: "ragul parking area",
    location: "Sundarapuram, Coimbatore - 08",
    image: "/image/parking12.jpg",
    rating: 4.7,
    phone: "919876543210",
  },
  {
    name: "nathan parking area",
    location: "Town Hall, Coimbatore - 03",
    image: "/image/parking13.jpg",
    rating: 4.2,
    phone: "919876543210",
  },
  {
    name: "sowmiya parking area",
    location: "Saravanampatti, Coimbatore - 35",
    image: "/image/parking14.jpg",
    rating: 3.7,
    phone: "919876543210",
  },
  {
    name: "iravan parking area",
    location: "Thudiyalur, Coimbatore - 34",
    image: "/image/parking15.jpg",
    rating: 4.5,
    phone: "919876543210",
  },
  {
    name: "isan parking area",
    location: "Mettupalayam, Coimbatore - 34",
    image: "/image/parking16.jpg",
    rating: 4.5,
    phone: "919876543210",
  },
];

export default function PHome() {
  const [activeTab, setActiveTab] = useState("All");
  const [userLocation, setUserLocation] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeTab === "High Traffic" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          setUserLocation({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
          }),
        (err) => alert("Please enable location to see High Traffic parkings.")
      );
    }
  }, [activeTab]);

  // Filter data based on tab + search
  const getFilteredData = () => {
    let data = parkingSpots;

    // Filter by tab
    if (activeTab === "Top Rating")
      data = data.filter((spot) => spot.rating >= 4.5);
    else if (activeTab === "Parking Nearby") data = data.slice(0, 5);
    else if (activeTab === "High Traffic" && userLocation)
      data = data.slice(0, 5);

    // Filter by search term
    if (searchTerm.trim() !== "") {
      data = data.filter((spot) =>
        spot.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
    }

    return data;
  };

  const filteredData = getFilteredData();

  // Search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = parkingSpots
        .filter((spot) =>
          spot.name.toLowerCase().startsWith(value.toLowerCase())
        )
        .map((spot) => spot.name);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  // Click suggestion
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
  };

  const handleLogout = () => {
    setShowProfile(false);
    navigate("/login");
  };

  return (
    <div className="phome">
      {/* User Icon */}
      <div className="user-icon" onClick={() => setShowProfile(true)}>
        <img src={userIcon} alt="User" />
      </div>

      {/* Profile Panel */}
      {showProfile && (
        <div className="profile-panel">
          <div className="profile-header">
            <button onClick={() => setShowProfile(false)}>←</button>
            <h2>Profile</h2>
          </div>
          <div className="profile-info">
            <div className="avatar"></div>
            <h3>Iyappan K</h3>
            <p>iyappan1234@gmail.com</p>
            <p>
              <strong>Vehicle Number:</strong> TN-01 GA-1245
            </p>
          </div>
          <div className="recent-parking">
            <h4>Recent Areas Parked</h4>
            <ul>
              <li>
                <span>1</span> Iyappan Car & Bike Parking - Saibaba Colony
              </li>
              <li>
                <span>2</span> Iyappan Car & Bike Parking - Saibaba Colony
              </li>
              <li>
                <span>3</span> Iyappan Car & Bike Parking - Saibaba Colony
              </li>
            </ul>
            <a href="#">View All</a>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Log Out
          </button>
        </div>
      )}

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero">
          <h1>
            Find & Reserve Parking Instantly <br /> Anytime, Anywhere
          </h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by places"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button>Search</button>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <ul className="suggestions">
              {suggestions.map((s, idx) => (
                <li key={idx} onClick={() => handleSuggestionClick(s)}>
                  {s}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {["All", "Parking Nearby", "Top Rating", "High Traffic"].map(
          (tab, idx) => (
            <button
              key={idx}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Parking Cards */}
      <div className="cards">
        {filteredData.map((spot, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={spot.image} alt={spot.name} />
              <div className="rating">★ {spot.rating}</div>
            </div>
            <div className="card-details">
              <h3>{spot.name}</h3>
              <p>{spot.location}</p>
            </div>
            <div className="card-buttons">
              {spot.phone && (
                <>
                  <a href={`tel:${spot.phone}`}>
                    <button>Call</button>
                  </a>
                  <a
                    href={`https://wa.me/${
                      spot.phone
                    }?text=Hi,%20I%20want%20to%20know%20about%20${encodeURIComponent(
                      spot.name
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>Message</button>
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
