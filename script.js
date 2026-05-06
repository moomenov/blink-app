body { background-color: #121212; color: #fff; font-family: -apple-system, sans-serif; margin: 0; padding: 15px; }
.app-container { max-width: 450px; margin: auto; padding-bottom: 110px; }

header h1 { font-size: 24px; margin: 0; letter-spacing: 1px; }
.address { color: #888; font-size: 13px; margin-bottom: 20px; }

.field-selection select, .time-selection, .payment-section {
    width: 100%; background: #1e1e1e; padding: 15px; border-radius: 12px; 
    margin-bottom: 15px; box-sizing: border-box; border: none; color: white;
}

.timetable { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px; }
.time-slot { 
    background: #2c2c2c; padding: 12px 5px; text-align: center; border-radius: 8px; 
    cursor: pointer; font-size: 13px; transition: 0.2s;
}
.time-slot.selected { background: #ffffff; color: #000; font-weight: bold; }

.card-box { background: #252525; padding: 10px; border-radius: 8px; margin-bottom: 10px; border-left: 4px solid #fff; }
.total-text { font-size: 18px; margin: 15px 0; }

.file-label, .confirm-btn { 
    background: #fff; color: #000; padding: 10px 18px; border-radius: 8px; 
    font-weight: bold; cursor: pointer; font-size: 13px; border: none;
}

.upload-area { display: flex; justify-content: space-between; align-items: center; }

.jarvis-chat { 
    position: fixed; bottom: 0; left: 0; width: 100%; background: #181818; 
    padding: 15px; border-top: 1px solid #333; box-sizing: border-box; z-index: 100;
}
.jarvis-title { font-size: 12px; color: #aaa; margin: 0 0 8px 0; }
.input-group { display: flex; gap: 10px; }
#chat-input { flex: 1; background: #252525; border: 1px solid #444; color: #fff; padding: 10px; border-radius: 8px; outline: none; }
#send-chat { background: #fff; border: none; padding: 0 15px; border-radius: 8px; cursor: pointer; }
