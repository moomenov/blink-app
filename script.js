:root {
    --gold: #D4AF37;
    --dark: #121212;
    --glass: rgba(255, 255, 255, 0.1);
}

body {
    background-color: var(--dark);
    color: white;
    font-family: 'Poppins', sans-serif;
    margin: 0;
}

.container { padding: 20px; }

.stadium-card {
    background: var(--glass);
    border-radius: 20px;
    overflow: hidden;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 20px;
}

.stadium-image { height: 250px; background-size: cover; }

.stadium-info { padding: 20px; text-align: center; }

.primary-btn {
    background: linear-gradient(45deg, var(--gold), #f3cf58);
    border: none; padding: 12px 30px; border-radius: 25px;
    font-weight: bold; cursor: pointer; transition: 0.3s;
}

/* Jadval slotlari */
.time-slots {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px; margin-top: 20px;
}

.slot {
    padding: 10px; border: 1px solid var(--gold);
    border-radius: 8px; text-align: center; cursor: pointer;
}

.slot.booked { background: #444; color: #888; cursor: not-allowed; border-color: #555; }
.slot.selected { background: var(--gold); color: black; }

/* Chat Widget */
.chat-widget {
    position: fixed; bottom: 20px; right: 20px;
    width: 300px; background: #1e1e1e; border-radius: 15px; overflow: hidden;
}
