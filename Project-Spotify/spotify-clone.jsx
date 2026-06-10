import { useState, useRef, useEffect } from "react";

// ── SVG ICONS (inline from uploaded assets) ──────────────────────────────────
const LogoSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 78 24" height="24" style={{fill:"#1DB954"}}>
    <path d="M31.8234 11.0782C29.8042 10.5836 29.4444 10.2376 29.4444 9.50832C29.4444 8.8202 30.077 8.35677 31.0159 8.35677C31.9262 8.35677 32.8296 8.70885 33.7765 9.43308C33.8051 9.45515 33.8407 9.46318 33.8763 9.45816C33.8937 9.45541 33.9104 9.4491 33.9253 9.43962C33.9403 9.43013 33.9532 9.41767 33.9633 9.40299L34.9496 7.97659C34.9691 7.9483 34.9774 7.91361 34.9728 7.87941C34.9682 7.84522 34.9511 7.81402 34.9249 7.79203C33.7982 6.86416 32.5291 6.41378 31.0456 6.41378C28.8653 6.41378 27.3422 7.75591 27.3422 9.67684C27.3422 11.7372 28.6567 12.4654 30.927 13.0292C32.8592 13.4856 33.1854 13.8688 33.1854 14.5529C33.1854 15.3102 32.5262 15.7817 31.4647 15.7817C30.2855 15.7817 29.3239 15.3744 28.2485 14.4185L26.9547 15.7837C28.2199 17.1188 29.7587 17.7236 31.4192 17.7236C33.7695 17.7236 35.2877 16.4066 35.2877 14.3683C35.2877 12.645 34.2845 11.6921 31.8234 11.0782ZM42.31 13.3873C42.31 14.8418 41.4363 15.8579 40.185 15.8579C38.9496 15.8579 38.0165 14.7966 38.0165 13.3873C38.0165 11.9789 38.9486 10.9177 40.186 10.9177C41.4165 10.9177 42.31 11.9559 42.31 13.3873ZM40.6041 9.03385C39.5861 9.03385 38.7499 9.44613 38.061 10.2897V9.3408H36.1209V19.8873H38.061V16.5581C38.7509 17.3515 39.5861 17.7387 40.6041 17.7387C42.4968 17.7387 44.4123 16.2441 44.4123 13.3873C44.4123 10.5295 42.4968 9.03385 40.6041 9.03385ZM49.3235 15.8729C48.0267 15.8729 47.0502 14.8046 47.0502 13.3873C47.0502 11.9649 47.9931 10.9317 49.2938 10.9317C50.5985 10.9317 51.5819 12.001 51.5819 13.4194C51.5819 14.8408 50.6331 15.8729 49.3235 15.8729ZM49.3235 9.03486C46.8862 9.03486 44.9766 10.9608 44.9766 13.4184C44.9766 15.8499 46.8733 17.7557 49.2938 17.7557C51.739 17.7557 53.6545 15.8368 53.6545 13.3873C53.6545 10.9468 51.7529 9.03385 49.3235 9.03385V9.03486ZM19.0985 10.6382C15.2302 8.34115 8.85004 8.13001 5.15734 9.25061C4.56443 9.4307 3.93745 9.09586 3.75774 8.50285C3.57803 7.90967 3.91237 7.283 4.50579 7.10274C8.74454 5.81575 15.7911 6.06437 20.244 8.70775C20.7776 9.02438 20.9524 9.71333 20.6363 10.2458C20.3199 10.7793 19.6303 10.9549 19.0985 10.6382ZM17.6847 14.3488C14.4602 12.3664 9.54258 11.7923 5.72724 12.9502C5.23257 13.0996 4.71006 12.8208 4.55976 12.327C4.41084 11.8322 4.68965 11.3109 5.1838 11.1605C9.54206 9.83755 14.9602 10.4784 18.6638 12.7544C19.1038 13.0254 19.2424 13.6014 18.9717 14.0407C18.7003 14.481 18.1247 14.6191 17.6847 14.3488ZM16.475 17.5571C13.657 15.8349 10.1104 15.446 5.93306 16.4002C5.53058 16.4923 5.12966 16.2401 5.03782 15.8377C4.94546 15.4352 5.19677 15.0339 5.60011 14.9421C10.1715 13.8972 14.0923 14.3469 17.2554 16.2796C17.6079 16.4949 17.7191 16.9557 17.5034 17.3084C17.2879 17.6619 16.8275 17.7727 16.475 17.5571ZM0 11.9998C0 18.6277 5.37285 24 12 24C18.6277 24 24 18.6277 24 11.9998C24 5.37264 18.6277 0 12 0C5.37285 0 0 5.37264 0 11.9998Z"/>
  </svg>
);

const HomeIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill={active ? "#fff" : "#b3b3b3"}>
    <path d="M13.5 1.515a3 3 0 0 0-3 0L3 5.845a2 2 0 0 0-1 1.732V21a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6h4v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V7.577a2 2 0 0 0-1-1.732l-7.5-4.33z"/>
  </svg>
);

const SearchIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill={active ? "#fff" : "#b3b3b3"}>
    <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"/>
  </svg>
);

const LibraryIcon = ({ active }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill={active ? "#fff" : "#b3b3b3"}>
    <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"/>
  </svg>
);

const MusicIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6.5" cy="18.5" r="3.5"/><circle cx="18" cy="16" r="3"/>
    <path d="M10 18.5L10 7C10 6.07655 10 5.61483 10.2635 5.32794C10.5269 5.04106 11.0175 4.9992 11.9986 4.91549C16.022 4.57222 18.909 3.26005 20.3553 2.40978C20.6508 2.236 20.7986 2.14912 20.8993 2.20672C21 2.26432 21 2.4315 21 2.76587V16"/>
    <path d="M10 10C15.8667 10 19.7778 7.66667 21 7"/>
  </svg>
);

const PlayIcon = ({ size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M5 20V4L19 12L5 20Z"/>
  </svg>
);
const PauseIcon = ({ size = 24, color = "#000" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
    <path d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z"/>
    <path d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z"/>
  </svg>
);
const PrevIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M20 19V5L8 12L20 19Z"/><path d="M4 4V20"/>
  </svg>
);
const NextIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" strokeWidth="1.5" strokeLinejoin="round">
    <path d="M4 19V5L16 12L4 19Z"/><path d="M20 4V20"/>
  </svg>
);
const VolumeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M13.9998 4H14.7498C14.7498 3.72564 14.6 3.47317 14.3592 3.34171C14.1183 3.21024 13.825 3.22076 13.5942 3.36913L13.9998 4ZM13.9998 20L13.5942 20.6309C13.825 20.7792 14.1183 20.7898 14.3592 20.6583C14.6 20.5268 14.7498 20.2744 14.7498 20H13.9998ZM2.00049 8.5V7.75C1.58627 7.75 1.25049 8.08579 1.25049 8.5H2.00049ZM2.00049 15.5H1.25049C1.25049 15.9142 1.58627 16.25 2.00049 16.25V15.5ZM7.00049 8.5V9.25H7.22078L7.40609 9.13087L7.00049 8.5ZM7.00049 15.5L7.40609 14.8691L7.22078 14.75H7.00049V15.5ZM13.2498 4V20H14.7498V4H13.2498ZM1.25049 8.5V15.5H2.75049V8.5H1.25049ZM2.00049 9.25H7.00049V7.75H2.00049V9.25ZM2.00049 16.25H7.00049V14.75H2.00049V16.25ZM7.40609 9.13087L14.4054 4.63087L13.5942 3.36913L6.59489 7.86913L7.40609 9.13087ZM6.59489 16.1309L13.5942 20.6309L14.4054 19.3691L7.40609 14.8691L6.59489 16.1309Z" fill="#b3b3b3"/>
    <path d="M17 9C17.6254 9.81968 18 10.8634 18 12C18 13.1366 17.6254 14.1803 17 15" stroke="#b3b3b3" strokeWidth="1.5"/>
    <path d="M20 7C21.2508 8.36613 22 10.1057 22 12C22 13.8943 21.2508 15.6339 20 17" stroke="#b3b3b3" strokeWidth="1.5"/>
  </svg>
);
const HeartIcon = ({ liked }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill={liked ? "#1DB954" : "none"} stroke={liked ? "#1DB954" : "#b3b3b3"} strokeWidth="1.5">
    <path d="M12 21C12 21 3 15.5 3 9.5C3 7.01 5.01 5 7.5 5C9.24 5 10.91 5.97 12 7.5C13.09 5.97 14.76 5 16.5 5C18.99 5 21 7.01 21 9.5C21 15.5 12 21 12 21Z"/>
  </svg>
);
const ShuffleIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#1DB954" : "#b3b3b3"} strokeWidth="1.5" strokeLinecap="round">
    <path d="M16 3h5v5M4 20l5.5-5.5M21 3l-5.5 5.5M16 21h5v-5M4 4l5.5 5.5"/>
  </svg>
);
const RepeatIcon = ({ active }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? "#1DB954" : "#b3b3b3"} strokeWidth="1.5" strokeLinecap="round">
    <path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>
  </svg>
);
const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b3b3b3" strokeWidth="2" strokeLinecap="round">
    <path d="M12 5v14M5 12h14"/>
  </svg>
);
const DotsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#b3b3b3">
    <circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/>
  </svg>
);

// ── DATA ─────────────────────────────────────────────────────────────────────
const COVER = "/mnt/user-data/uploads/cover.jpg";

const SONGS = [
  { id: 1, title: "Blue in Green", artist: "Miles Davis", album: "Kind of Blue", duration: "5:37", liked: true,  color: "#1a3a5c" },
  { id: 2, title: "Take Five",     artist: "Dave Brubeck", album: "Time Out",    duration: "5:24", liked: false, color: "#3b1f5c" },
  { id: 3, title: "Autumn Leaves", artist: "Bill Evans",  album: "Portrait in Jazz", duration: "4:52", liked: true, color: "#1a4c3a" },
  { id: 4, title: "Misty",         artist: "Erroll Garner", album: "Contrasts",  duration: "3:44", liked: false, color: "#4c3a1a" },
  { id: 5, title: "So What",       artist: "Miles Davis", album: "Kind of Blue", duration: "9:22", liked: true,  color: "#1a2e5c" },
  { id: 6, title: "Round Midnight", artist: "Thelonious Monk", album: "Genius of Modern Music", duration: "5:10", liked: false, color: "#3a1a1a" },
  { id: 7, title: "My Funny Valentine", artist: "Chet Baker", album: "Chet Baker Sings", duration: "4:40", liked: true, color: "#1a4c4c" },
  { id: 8, title: "Moonlight in Vermont", artist: "Stan Getz", album: "Moonlight in Vermont", duration: "3:58", liked: false, color: "#2a1a4c" },
];

const PLAYLISTS = [
  { id: 1, name: "Jazz for Sleep",     cover: COVER,    desc: "Soft, slow jazz for drifting off" },
  { id: 2, name: "Late Night Vibes",   cover: null,     desc: "Moody, minimal jazz" },
  { id: 3, name: "Cafe Background",    cover: null,     desc: "Perfect for coffee shops" },
  { id: 4, name: "Classic Miles",      cover: null,     desc: "Miles Davis essentials" },
  { id: 5, name: "Piano Trio Masters", cover: null,     desc: "Evans, Garner, Peterson" },
];

const FEATURED_PLAYLISTS = [
  { id: 1, name: "Jazz for Sleep",      sub: "Peaceful · 3h 12m",   cover: COVER,  gradient: "linear-gradient(135deg,#1a3a5c,#0d1f33)" },
  { id: 2, name: "Late Night Vibes",    sub: "Moody · 2h 48m",      cover: null,   gradient: "linear-gradient(135deg,#3b1f5c,#1a0d2e)" },
  { id: 3, name: "Morning Coffee Jazz", sub: "Bright · 1h 55m",     cover: null,   gradient: "linear-gradient(135deg,#1a4c3a,#0d261d)" },
  { id: 4, name: "Miles Davis Essentials", sub: "Legend · 4h 20m",  cover: null,   gradient: "linear-gradient(135deg,#4c1a1a,#260d0d)" },
  { id: 5, name: "Piano Trio Masters",  sub: "Intimate · 2h 30m",   cover: null,   gradient: "linear-gradient(135deg,#1a3a1a,#0d1f0d)" },
  { id: 6, name: "Bossa Nova Grooves",  sub: "Sunny · 2h 10m",      cover: null,   gradient: "linear-gradient(135deg,#4c3a1a,#261d0d)" },
];

const RECENTLY_PLAYED = [
  { id: 1, name: "Kind of Blue",    artist: "Miles Davis",   gradient: "linear-gradient(135deg,#1a3a5c,#0d1f33)", cover: COVER },
  { id: 2, name: "Time Out",        artist: "Dave Brubeck",  gradient: "linear-gradient(135deg,#3b1f5c,#1a0d2e)", cover: null },
  { id: 3, name: "Jazz for Sleep",  artist: "Playlist",      gradient: "linear-gradient(135deg,#1a4c3a,#0d261d)", cover: COVER },
  { id: 4, name: "Chet Baker Sings",artist: "Chet Baker",    gradient: "linear-gradient(135deg,#4c1a1a,#260d0d)", cover: null },
  { id: 5, name: "My Favorites",    artist: "Liked Songs",   gradient: "linear-gradient(135deg,#1a2e5c,#0d1733)", cover: null },
  { id: 6, name: "Portrait in Jazz",artist: "Bill Evans",    gradient: "linear-gradient(135deg,#2a3a1a,#151d0d)", cover: null },
];

// ── HELPERS ───────────────────────────────────────────────────────────────────
function fmtTime(secs) {
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function AlbumArt({ cover, gradient, size = 48, radius = 4 }) {
  if (cover) {
    return (
      <img src={cover} alt="" style={{
        width: size, height: size, borderRadius: radius, objectFit: "cover", flexShrink: 0
      }} />
    );
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: radius, background: gradient || "linear-gradient(135deg,#333,#555)",
      flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <MusicIcon />
    </div>
  );
}

// ── MAIN APP ─────────────────────────────────────────────────────────────────
export default function SpotifyClone() {
  const [activePage, setActivePage]       = useState("home");
  const [currentSong, setCurrentSong]     = useState(SONGS[0]);
  const [isPlaying, setIsPlaying]         = useState(false);
  const [progress, setProgress]           = useState(0);
  const [volume, setVolume]               = useState(70);
  const [liked, setLiked]                 = useState({1:true, 3:true, 5:true, 7:true});
  const [shuffle, setShuffle]             = useState(false);
  const [repeat, setRepeat]               = useState(false);
  const [songs, setSongs]                 = useState(SONGS);
  const [activePlaylist, setActivePlaylist] = useState(null);
  const [searchQuery, setSearchQuery]     = useState("");
  const [hoverRow, setHoverRow]           = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const timerRef = useRef(null);
  const totalDuration = 337; // seconds (demo)

  // Simulate progress when playing
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setProgress(p => {
          if (p >= 100) { setIsPlaying(false); return 0; }
          return p + (100 / totalDuration);
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  const playSong = (song) => {
    if (currentSong.id === song.id) {
      setIsPlaying(p => !p);
    } else {
      setCurrentSong(song);
      setProgress(0);
      setIsPlaying(true);
    }
  };

  const skipNext = () => {
    const idx = songs.findIndex(s => s.id === currentSong.id);
    const next = songs[(idx + 1) % songs.length];
    setCurrentSong(next); setProgress(0); setIsPlaying(true);
  };
  const skipPrev = () => {
    const idx = songs.findIndex(s => s.id === currentSong.id);
    const prev = songs[(idx - 1 + songs.length) % songs.length];
    setCurrentSong(prev); setProgress(0); setIsPlaying(true);
  };

  const toggleLike = (id, e) => {
    e.stopPropagation();
    setLiked(l => ({...l, [id]: !l[id]}));
  };

  const filteredSongs = searchQuery
    ? songs.filter(s =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.artist.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : songs;

  const currentProgress = progress;
  const elapsedSecs = (progress / 100) * totalDuration;

  // ── SIDEBAR ─────────────────────────────────────────────────────────────────
  const Sidebar = () => (
    <div style={{
      width: 240, flexShrink: 0, background: "#000", display: "flex", flexDirection: "column",
      height: "100%", overflow: "hidden", transition: "transform 0.3s ease",
    }}>
      {/* Logo */}
      <div style={{padding: "24px 24px 18px"}}>
        <LogoSVG />
      </div>

      {/* Nav */}
      <nav style={{padding: "0 8px"}}>
        {[
          { id: "home",   label: "Home",   Icon: HomeIcon },
          { id: "search", label: "Search", Icon: SearchIcon },
          { id: "library",label: "Your Library", Icon: LibraryIcon },
        ].map(({ id, label, Icon }) => (
          <button key={id} onClick={() => setActivePage(id)} style={{
            display: "flex", alignItems: "center", gap: 16, width: "100%", padding: "8px 16px",
            background: "none", border: "none", cursor: "pointer", borderRadius: 4,
            color: activePage === id ? "#fff" : "#b3b3b3",
            fontWeight: activePage === id ? 700 : 400, fontSize: 14, letterSpacing: ".02em",
            transition: "color .15s",
          }}
          onMouseEnter={e => { if (activePage !== id) e.currentTarget.style.color = "#fff"; }}
          onMouseLeave={e => { if (activePage !== id) e.currentTarget.style.color = "#b3b3b3"; }}
          >
            <Icon active={activePage === id} />
            {label}
          </button>
        ))}
      </nav>

      <div style={{height: 1, background: "#282828", margin: "16px 24px"}} />

      {/* Playlists */}
      <div style={{padding: "0 8px 8px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <span style={{color: "#b3b3b3", fontSize: 12, fontWeight: 700, letterSpacing: ".08em", padding: "0 16px", textTransform: "uppercase"}}>Playlists</span>
        <button style={{background: "none", border: "none", cursor: "pointer", padding: "0 16px"}} title="Create playlist">
          <PlusIcon />
        </button>
      </div>

      <div style={{overflowY: "auto", flex: 1, padding: "0 8px"}}>
        {PLAYLISTS.map(pl => (
          <button key={pl.id} onClick={() => { setActivePlaylist(pl); setActivePage("playlist"); }} style={{
            display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "8px 16px",
            background: activePlaylist?.id === pl.id && activePage === "playlist" ? "#1a1a1a" : "none",
            border: "none", cursor: "pointer", borderRadius: 4, transition: "background .15s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#1a1a1a"}
          onMouseLeave={e => e.currentTarget.style.background = activePlaylist?.id === pl.id && activePage === "playlist" ? "#1a1a1a" : "none"}
          >
            <AlbumArt cover={pl.cover} gradient="linear-gradient(135deg,#333,#555)" size={40} radius={3} />
            <div style={{textAlign: "left"}}>
              <div style={{color: activePlaylist?.id === pl.id && activePage === "playlist" ? "#1DB954" : "#fff", fontSize: 13, fontWeight: 500}}>{pl.name}</div>
              <div style={{color: "#b3b3b3", fontSize: 11}}>{pl.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  // ── HOME PAGE ────────────────────────────────────────────────────────────────
  const HomePage = () => {
    const hour = new Date().getHours();
    const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
    return (
      <div style={{padding: "24px 32px", overflowY: "auto", height: "100%", boxSizing: "border-box"}}>
        <h1 style={{color: "#fff", fontSize: 28, fontWeight: 700, marginBottom: 24, margin: "0 0 24px"}}>{greeting}</h1>

        {/* Recently Played Grid */}
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 8, marginBottom: 40}}>
          {RECENTLY_PLAYED.map(item => (
            <button key={item.id} onClick={() => playSong(SONGS[item.id-1] || SONGS[0])} style={{
              display: "flex", alignItems: "center", gap: 12, background: "#2a2a2a",
              border: "none", cursor: "pointer", borderRadius: 6, padding: 8, transition: "background .15s",
              position: "relative", overflow: "hidden",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#3a3a3a"}
            onMouseLeave={e => e.currentTarget.style.background = "#2a2a2a"}
            >
              <AlbumArt cover={item.cover} gradient={item.gradient} size={56} radius={4} />
              <span style={{color: "#fff", fontSize: 13, fontWeight: 600, textAlign: "left", flex: 1}}>{item.name}</span>
              {currentSong && SONGS[item.id-1] && currentSong.id === SONGS[item.id-1]?.id && isPlaying && (
                <span style={{
                  position: "absolute", right: 8, bottom: 8,
                  background: "#1DB954", borderRadius: "50%", width: 28, height: 28,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <PauseIcon size={14} color="#000" />
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Featured Playlists */}
        <section style={{marginBottom: 40}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16}}>
            <h2 style={{color: "#fff", fontSize: 22, fontWeight: 700, margin: 0}}>Featured Playlists</h2>
            <span style={{color: "#b3b3b3", fontSize: 13, cursor: "pointer", fontWeight: 700}}
              onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="#b3b3b3"}
            >Show all</span>
          </div>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16}}>
            {FEATURED_PLAYLISTS.map(pl => (
              <div key={pl.id} onClick={() => { setActivePlaylist(pl); setActivePage("playlist"); }}
                style={{background: "#181818", borderRadius: 8, padding: 16, cursor: "pointer", transition: "background .2s"}}
                onMouseEnter={e=>e.currentTarget.style.background="#282828"}
                onMouseLeave={e=>e.currentTarget.style.background="#181818"}
              >
                <AlbumArt cover={pl.id === 1 ? COVER : null} gradient={pl.gradient} size="100%" radius={6} />
                <div style={{marginTop: 12}}>
                  <div style={{color: "#fff", fontSize: 13, fontWeight: 600, marginBottom: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{pl.name}</div>
                  <div style={{color: "#b3b3b3", fontSize: 11}}>{pl.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Songs Section */}
        <section>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16}}>
            <h2 style={{color: "#fff", fontSize: 22, fontWeight: 700, margin: 0}}>Jazz Picks</h2>
            <span style={{color: "#b3b3b3", fontSize: 13, cursor: "pointer", fontWeight: 700}}
              onMouseEnter={e=>e.target.style.color="#fff"} onMouseLeave={e=>e.target.style.color="#b3b3b3"}
            >Show all</span>
          </div>
          <SongList songs={SONGS.slice(0, 5)} />
        </section>
      </div>
    );
  };

  // ── SONG LIST COMPONENT ──────────────────────────────────────────────────────
  const SongList = ({ songs: songList }) => (
    <div>
      <div style={{display: "grid", gridTemplateColumns: "32px 1fr 1fr 60px 32px", gap: 8, padding: "4px 16px", borderBottom: "1px solid #282828", marginBottom: 8}}>
        {["#","TITLE","ALBUM","TIME",""].map((h,i) => (
          <span key={i} style={{color: "#b3b3b3", fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase"}}>{h}</span>
        ))}
      </div>
      {songList.map((song, idx) => {
        const isActive = currentSong.id === song.id;
        const isHovered = hoverRow === song.id;
        return (
          <div key={song.id}
            onMouseEnter={() => setHoverRow(song.id)}
            onMouseLeave={() => setHoverRow(null)}
            onClick={() => playSong(song)}
            style={{
              display: "grid", gridTemplateColumns: "32px 1fr 1fr 60px 32px", gap: 8,
              padding: "6px 16px", borderRadius: 4, cursor: "pointer", alignItems: "center",
              background: isHovered ? "#2a2a2a" : "none", transition: "background .1s",
            }}
          >
            <span style={{color: isActive ? "#1DB954" : "#b3b3b3", fontSize: 14, textAlign: "center", fontWeight: isActive ? 700 : 400}}>
              {isHovered ? (isActive && isPlaying ? <PauseIcon size={16} color="#fff" /> : <PlayIcon size={16} color="#fff" />) : (isActive ? (isPlaying ? "▶" : idx+1) : idx+1)}
            </span>
            <div style={{display: "flex", alignItems: "center", gap: 12, overflow: "hidden"}}>
              <AlbumArt cover={song.id === 1 || song.id === 5 ? COVER : null} gradient={`linear-gradient(135deg,${song.color},#111)`} size={40} radius={3} />
              <div style={{overflow: "hidden"}}>
                <div style={{color: isActive ? "#1DB954" : "#fff", fontSize: 14, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{song.title}</div>
                <div style={{color: "#b3b3b3", fontSize: 12, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{song.artist}</div>
              </div>
            </div>
            <span style={{color: "#b3b3b3", fontSize: 13, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{song.album}</span>
            <span style={{color: "#b3b3b3", fontSize: 13}}>{song.duration}</span>
            <button onClick={(e) => toggleLike(song.id, e)} style={{background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", opacity: isHovered || liked[song.id] ? 1 : 0}}>
              <HeartIcon liked={liked[song.id]} />
            </button>
          </div>
        );
      })}
    </div>
  );

  // ── SEARCH PAGE ──────────────────────────────────────────────────────────────
  const SearchPage = () => (
    <div style={{padding: "24px 32px", overflowY: "auto", height: "100%", boxSizing: "border-box"}}>
      <h1 style={{color: "#fff", fontSize: 28, fontWeight: 700, margin: "0 0 20px"}}>Search</h1>
      <div style={{position: "relative", maxWidth: 400, marginBottom: 32}}>
        <div style={{position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", pointerEvents: "none"}}>
          <SearchIcon active={false} />
        </div>
        <input
          type="text"
          placeholder="What do you want to listen to?"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{
            width: "100%", padding: "12px 16px 12px 44px", borderRadius: 500,
            background: "#fff", border: "none", outline: "none", fontSize: 14, color: "#000",
            boxSizing: "border-box",
          }}
        />
      </div>
      {searchQuery ? (
        <div>
          <h2 style={{color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 12}}>Results</h2>
          <SongList songs={filteredSongs} />
        </div>
      ) : (
        <div>
          <h2 style={{color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 16}}>Browse Categories</h2>
          <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12}}>
            {["Jazz","Chill","Sleep","Focus","Classical","Blues","Soul","R&B","Ambient","Piano","Acoustic","World"].map((cat, i) => {
              const colors = ["#1a3a5c","#3b1f5c","#1a4c3a","#4c3a1a","#1a2e5c","#4c1a1a","#1a4c4c","#2a1a4c","#1a3a1a","#3a2a1a","#1a1a4c","#2a3a1a"];
              return (
                <div key={cat} style={{
                  background: colors[i], borderRadius: 8, padding: "20px 16px", cursor: "pointer",
                  fontWeight: 700, fontSize: 16, color: "#fff", height: 80,
                  display: "flex", alignItems: "flex-end", transition: "filter .2s",
                }}
                onMouseEnter={e=>e.currentTarget.style.filter="brightness(1.2)"}
                onMouseLeave={e=>e.currentTarget.style.filter="brightness(1)"}
                >{cat}</div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  // ── LIBRARY PAGE ─────────────────────────────────────────────────────────────
  const LibraryPage = () => (
    <div style={{padding: "24px 32px", overflowY: "auto", height: "100%", boxSizing: "border-box"}}>
      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24}}>
        <h1 style={{color: "#fff", fontSize: 28, fontWeight: 700, margin: 0}}>Your Library</h1>
        <button style={{background: "none", border: "none", cursor: "pointer"}}><PlusIcon /></button>
      </div>
      <div>
        {PLAYLISTS.map(pl => (
          <button key={pl.id} onClick={() => { setActivePlaylist(pl); setActivePage("playlist"); }} style={{
            display: "flex", alignItems: "center", gap: 16, width: "100%", padding: "8px 0",
            background: "none", border: "none", cursor: "pointer", borderBottom: "1px solid #282828",
          }}>
            <AlbumArt cover={pl.id === 1 ? COVER : null} gradient="linear-gradient(135deg,#333,#555)" size={56} radius={4} />
            <div style={{textAlign: "left"}}>
              <div style={{color: "#fff", fontSize: 15, fontWeight: 600}}>{pl.name}</div>
              <div style={{color: "#b3b3b3", fontSize: 12}}>Playlist · {pl.desc}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  // ── PLAYLIST PAGE ─────────────────────────────────────────────────────────────
  const PlaylistPage = () => {
    const pl = activePlaylist || PLAYLISTS[0];
    return (
      <div style={{overflowY: "auto", height: "100%"}}>
        {/* Hero */}
        <div style={{
          background: pl.gradient || "linear-gradient(135deg,#1a3a5c,#121212)",
          padding: "48px 32px 32px", display: "flex", alignItems: "flex-end", gap: 24,
          minHeight: 240,
        }}>
          <AlbumArt cover={pl.id === 1 ? COVER : null} gradient={pl.gradient || "linear-gradient(135deg,#333,#555)"} size={200} radius={4} />
          <div>
            <div style={{color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", marginBottom: 8}}>Playlist</div>
            <h1 style={{color: "#fff", fontSize: 42, fontWeight: 900, margin: "0 0 8px", lineHeight: 1.1}}>{pl.name}</h1>
            <p style={{color: "#ffffffb3", fontSize: 14, margin: "0 0 8px"}}>{pl.desc || pl.sub}</p>
            <span style={{color: "#ffffffb3", fontSize: 13}}>{songs.length} songs</span>
          </div>
        </div>

        {/* Controls */}
        <div style={{padding: "24px 32px 0", display: "flex", alignItems: "center", gap: 16}}>
          <button onClick={() => { setCurrentSong(SONGS[0]); setProgress(0); setIsPlaying(true); }} style={{
            width: 56, height: 56, borderRadius: "50%", background: "#1DB954",
            border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "transform .1s, background .1s",
          }}
          onMouseEnter={e=>{ e.currentTarget.style.transform="scale(1.05)"; e.currentTarget.style.background="#1ed760"; }}
          onMouseLeave={e=>{ e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.background="#1DB954"; }}
          >
            <PlayIcon size={24} color="#000" />
          </button>
          <HeartIcon liked={liked[1]} />
          <button style={{background: "none", border: "none", cursor: "pointer"}}><DotsIcon /></button>
        </div>

        {/* Song list */}
        <div style={{padding: "16px 16px 32px"}}>
          <SongList songs={songs} />
        </div>
      </div>
    );
  };

  // ── PLAYER ────────────────────────────────────────────────────────────────────
  const Player = () => (
    <div style={{
      height: 90, background: "#181818", borderTop: "1px solid #282828",
      display: "flex", alignItems: "center", padding: "0 16px", gap: 8, flexShrink: 0,
    }}>
      {/* Track info */}
      <div style={{display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0}}>
        <AlbumArt
          cover={currentSong.id === 1 || currentSong.id === 5 ? COVER : null}
          gradient={`linear-gradient(135deg,${currentSong.color},#111)`}
          size={56} radius={4}
        />
        <div style={{minWidth: 0}}>
          <div style={{color: "#fff", fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{currentSong.title}</div>
          <div style={{color: "#b3b3b3", fontSize: 11, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{currentSong.artist}</div>
        </div>
        <button onClick={(e) => toggleLike(currentSong.id, e)} style={{background: "none", border: "none", cursor: "pointer", marginLeft: 4}}>
          <HeartIcon liked={liked[currentSong.id]} />
        </button>
      </div>

      {/* Controls */}
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 8, flex: 2}}>
        <div style={{display: "flex", alignItems: "center", gap: 20}}>
          <button onClick={() => setShuffle(s=>!s)} style={{background: "none", border: "none", cursor: "pointer"}}><ShuffleIcon active={shuffle} /></button>
          <button onClick={skipPrev} style={{background: "none", border: "none", cursor: "pointer"}}><PrevIcon /></button>
          <button onClick={() => setIsPlaying(p=>!p)} style={{
            width: 40, height: 40, borderRadius: "50%", background: "#fff",
            border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "transform .1s",
          }}
          onMouseEnter={e=>e.currentTarget.style.transform="scale(1.06)"}
          onMouseLeave={e=>e.currentTarget.style.transform="scale(1)"}
          >
            {isPlaying ? <PauseIcon size={18} color="#000" /> : <PlayIcon size={18} color="#000" />}
          </button>
          <button onClick={skipNext} style={{background: "none", border: "none", cursor: "pointer"}}><NextIcon /></button>
          <button onClick={() => setRepeat(r=>!r)} style={{background: "none", border: "none", cursor: "pointer"}}><RepeatIcon active={repeat} /></button>
        </div>

        {/* Progress bar */}
        <div style={{display: "flex", alignItems: "center", gap: 8, width: "100%", maxWidth: 480}}>
          <span style={{color: "#b3b3b3", fontSize: 11, minWidth: 32, textAlign: "right"}}>{fmtTime(elapsedSecs)}</span>
          <div
            style={{flex: 1, height: 4, background: "#535353", borderRadius: 2, cursor: "pointer", position: "relative"}}
            onClick={e => {
              const rect = e.currentTarget.getBoundingClientRect();
              const pct = ((e.clientX - rect.left) / rect.width) * 100;
              setProgress(Math.max(0, Math.min(100, pct)));
            }}
          >
            <div style={{width: `${currentProgress}%`, height: "100%", background: "#fff", borderRadius: 2, transition: "width .1s linear", position: "relative"}}>
              <div style={{
                position: "absolute", right: -5, top: "50%", transform: "translateY(-50%)",
                width: 12, height: 12, borderRadius: "50%", background: "#fff",
              }} />
            </div>
          </div>
          <span style={{color: "#b3b3b3", fontSize: 11, minWidth: 32}}>{currentSong.duration}</span>
        </div>
      </div>

      {/* Volume */}
      <div style={{display: "flex", alignItems: "center", gap: 8, flex: 1, justifyContent: "flex-end"}}>
        <VolumeIcon />
        <div
          style={{width: 100, height: 4, background: "#535353", borderRadius: 2, cursor: "pointer"}}
          onClick={e => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = ((e.clientX - rect.left) / rect.width) * 100;
            setVolume(Math.max(0, Math.min(100, pct)));
          }}
        >
          <div style={{width: `${volume}%`, height: "100%", background: "#fff", borderRadius: 2}} />
        </div>
      </div>
    </div>
  );

  // ── RENDER ────────────────────────────────────────────────────────────────────
  const renderPage = () => {
    switch (activePage) {
      case "search":  return <SearchPage />;
      case "library": return <LibraryPage />;
      case "playlist":return <PlaylistPage />;
      default:        return <HomePage />;
    }
  };

  return (
    <div style={{
      display: "flex", flexDirection: "column", height: "100vh", background: "#121212",
      fontFamily: "'Circular', 'Helvetica Neue', Helvetica, Arial, sans-serif", color: "#fff",
      overflow: "hidden", userSelect: "none",
    }}>
      <div style={{display: "flex", flex: 1, overflow: "hidden"}}>
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <div style={{flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", background: "#121212"}}>
          {/* Topbar gradient overlay */}
          <div style={{
            position: "relative", flex: 1, overflow: "hidden",
            background: "linear-gradient(180deg, #1a1a2e 0%, #121212 300px)",
          }}>
            {renderPage()}
          </div>
        </div>
      </div>

      {/* Player Bar */}
      <Player />
    </div>
  );
}
