/**
 * Sneakers (1992) Text Decryption Effect
 * 
 * Logic to simulate the character cycling and locking effect.
 */

export function decryptText(element, text, speed = 30) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
    let iterations = 0;
    
    // Split the final text into an array
    const originalText = text.split('');
    
    // Create an array to hold the currently displayed characters
    let currentText = new Array(originalText.length).fill('');
    
    // Track which characters are "locked" (decrypted)
    let locked = new Array(originalText.length).fill(false);
    
    // Clear any existing interval to prevent overlapping animations if called repeatedly
    if (element.dataset.intervalId) {
        clearInterval(parseInt(element.dataset.intervalId));
    }

    const interval = setInterval(() => {
        let completed = 0;

        // Update the text
        const output = currentText.map((char, index) => {
            if (locked[index]) {
                completed++;
                return originalText[index];
            }
            
            // Random chance to lock this character
            // Increase chance as iterations grow to ensure it finishes
            if (Math.random() > 0.9 + (Math.random() * 0.05)) { 
                locked[index] = true;
            }
            
            // Return a random character for the "encrypted" look
            return chars[Math.floor(Math.random() * chars.length)];
        }).join('');
        
        element.innerText = output;

        // Stop when all characters are locked
        if (completed === originalText.length) {
            clearInterval(interval);
            element.dataset.intervalId = '';
        }
        
        iterations++;
    }, speed);

    element.dataset.intervalId = interval.toString();
}

/**
 * Initializes the decryption effect on all elements with class 'encrypted-text'.
 * Expects elements to have a 'data-text' attribute containing the final text.
 */
export function initDecryptionEffect() {
    const elements = document.querySelectorAll('.encrypted-text, [data-macro-scramble]');
    elements.forEach(el => {
        const finalText = el.getAttribute('data-text') || el.innerText;
        // Optionally set the final text as innerText initially if you want it visible before animation
        // or clear it if you want it to build from scratch. Using existing innerText usually causes a flash.
        // We'll trust the caller provided data-text.
        if(finalText) {
             decryptText(el, finalText);
        }
    });
}
