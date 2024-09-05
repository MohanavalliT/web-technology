document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmiForm');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiValue = document.getElementById('bmiValue');
    const bmiCategory = document.getElementById('bmiCategory');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const heightCm = parseFloat(heightInput.value);
        const weightKg = parseFloat(weightInput.value);
        
        if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
            bmiValue.textContent = 'Please enter valid numbers for height and weight.';
            bmiCategory.textContent = '';
            return;
        }

        // Convert height from cm to meters
        const heightM = heightCm / 100;
        const bmi = weightKg / (heightM * heightM);
        
        let category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }

        bmiValue.textContent = `Your BMI is ${bmi.toFixed(2)}`;
        bmiCategory.textContent = `Category: ${category}`;
    });
});
