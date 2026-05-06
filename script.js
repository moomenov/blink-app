document.addEventListener('DOMContentLoaded', () => {
    const timetable = document.getElementById('timetable');
    const totalPriceDisplay = document.getElementById('total-price');
    const fieldTypeSelect = document.getElementById('field-type');
    
    const times = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00"];
    let selectedSlots = [];

    function calculatePrice() {
        let total = 0;
        // 0 = Yakshanba, 6 = Shanba
        const dayOfWeek = new Date().getDay();
        const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
        const fieldType = fieldTypeSelect.value;

        selectedSlots.forEach(() => {
            let price = (fieldType === 'suniy') ? 160000 : 110000;
            
            // Ish kunlari 10,000 so'm arzon
            if (!isWeekend) {
                price -= 10000;
            }
            total += price;
        });
        
        totalPriceDisplay.innerText = total.toLocaleString();
    }

    // Vaqt katakchalarini yaratish
    times.forEach(time => {
        const slot = document.createElement('div');
        slot.className = 'time-slot';
        slot.innerText = time;
        
        slot.onclick = () => {
            slot.classList.toggle('selected');
            if(slot.classList.contains('selected')) {
                selectedSlots.push(time);
            } else {
                selectedSlots = selectedSlots.filter(t => t !== time);
            }
            calculatePrice();
        };
        timetable.appendChild(slot);
    });

    // Maydon turi o'zgarganda narxni qayta hisoblash
    fieldTypeSelect.onchange = calculatePrice;

    // Jarvis Chat logikasi
    document.getElementById('send-chat').onclick = () => {
        const msg = document.getElementById('chat-input').value;
        if(msg) {
            alert("Jarvis: Xabaringiz yuborildi. Tez orada javob beraman.");
            document.getElementById('chat-input').value = '';
        }
    };
});
