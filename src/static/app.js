/* test_styles.css */

/* Test: Universal selector (*) should reset box-sizing, margin, padding, and set font-family */
* {
    /* Expect: box-sizing: border-box */
    /* Expect: margin: 0 */
    /* Expect: padding: 0 */
    /* Expect: font-family: Arial, sans-serif */
}

/* Test: Body styles */
body {
    /* Expect: font-family: Arial, sans-serif */
    /* Expect: line-height: 1.6 */
    /* Expect: color: #333 */
    /* Expect: max-width: 1200px */
    /* Expect: margin: 0 auto */
    /* Expect: padding: 20px */
    /* Expect: background-color: #f5f5f5 */
}

/* Test: Header styles */
header {
    /* Expect: text-align: center */
    /* Expect: padding: 20px 0 */
    /* Expect: margin-bottom: 30px */
    /* Expect: background-color: #1a237e */
    /* Expect: color: white */
    /* Expect: border-radius: 5px */
}

/* Test: Header h1 margin */
header h1 {
    /* Expect: margin-bottom: 10px */
}

/* Test: Main layout (flex) */
main {
    /* Expect: display: flex */
    /* Expect: flex-wrap: wrap */
    /* Expect: gap: 30px */
    /* Expect: justify-content: center */
}

/* Test: Main layout (grid on min-width: 768px) */
@media (min-width: 768px) {
    main {
        /* Expect: display: grid */
        /* Expect: grid-template-columns: 2fr 1fr */
        /* Expect: gap: 30px */
        /* Expect: justify-content: center */
    }
}

/* Test: Section styles */
section {
    /* Expect: background-color: white */
    /* Expect: padding: 20px */
    /* Expect: border-radius: 5px */
    /* Expect: box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) */
    /* Expect: width: 100% */
    /* Expect: max-width: 500px */
}

/* Test: Section h3 styles */
section h3 {
    /* Expect: margin-bottom: 20px */
    /* Expect: padding-bottom: 10px */
    /* Expect: border-bottom: 1px solid #ddd */
    /* Expect: color: #1a237e */
}

/* Test: Activity card styles */
.activity-card {
    /* Expect: margin-bottom: 15px */
    /* Expect: padding: 15px */
    /* Expect: border: 1px solid #ddd */
    /* Expect: border-radius: 5px */
    /* Expect: background-color: #f9f9f9 */
}

.activity-card h4 {
    /* Expect: margin-bottom: 10px */
    /* Expect: color: #0066cc */
}

.activity-card p {
    /* Expect: margin-bottom: 8px */
}

/* Test: Form group styles */
.form-group {
    /* Expect: margin-bottom: 15px */
}

.form-group label {
    /* Expect: display: block */
    /* Expect: margin-bottom: 5px */
    /* Expect: font-weight: bold */
}

.form-group input,
.form-group select {
    /* Expect: width: 100% */
    /* Expect: padding: 10px */
    /* Expect: border: 1px solid #ddd */
    /* Expect: border-radius: 4px */
    /* Expect: font-size: 16px */
}

/* Test: Button styles */
button {
    /* Expect: background-color: #1a237e */
    /* Expect: color: white */
    /* Expect: border: none */
    /* Expect: padding: 10px 15px */
    /* Expect: font-size: 16px */
    /* Expect: border-radius: 5px */
    /* Expect: cursor: pointer */
    /* Expect: transition: background-color 0.2s */
}

button:hover {
    /* Expect: background-color: #3949ab */
}

/* Test: Message styles */
.message {
    /* Expect: margin-top: 20px */
    /* Expect: padding: 10px */
    /* Expect: border-radius: 4px */
}

/* Test: Success message */
.success {
    /* Expect: background-color: #e8f5e9 */
    /* Expect: color: #2e7d32 */
    /* Expect: border: 1px solid #a5d6a7 */
}

/* Test: Error message */
.error {
    /* Expect: background-color: #ffebee */
    /* Expect: color: #c62828 */
    /* Expect: border: 1px solid #ef9a9a */
}

/* Test: Info message */
.info {
    /* Expect: background-color: #d1ecf1 */
    /* Expect: color: #0c5460 */
    /* Expect: border: 1px solid #bee5eb */
}

/* Test: Hidden class */
.hidden {
    /* Expect: display: none */
}

/* Test: Footer styles */
footer {
    /* Expect: text-align: center */
    /* Expect: margin-top: 30px */
    /* Expect: padding: 20px */
    /* Expect: color: #666 */
}

/* Additional Tests */

/* Test: Section max-width should not exceed 500px */
section {
    /* Expect: max-width: 500px */
}

/* Test: Responsive main layout switches from flex to grid at 768px */
@media (min-width: 768px) {
    main {
        /* Expect: display: grid */
        /* Expect: grid-template-columns: 2fr 1fr */
    }
}

/* Test: All form-group inputs and selects should have consistent padding and border */
.form-group input,
.form-group select {
    /* Expect: padding: 10px */
    /* Expect: border: 1px solid #ddd */
}

/* Test: Button hover state changes background color */
button:hover {
    /* Expect: background-color: #3949ab */
}

/* Test: .message, .success, .error, .info, .hidden classes are mutually exclusive in usage */
.message,
.success,
.error,
.info,
.hidden {
    /* Expect: only one of these classes applied at a time for messages */
}
  /* Expect: padding: 20px 0 */
  /* Expect: margin-bottom: 30px */
  /* Expect: background-color: #1a237e */
  /* Expect: color: white */
  /* Expect: border-radius: 5px */
}

/* Test: Header h1 margin */
header h1 {
  /* Expect: margin-bottom: 10px */
}

/* Test: Main layout (flex) */
main {
  /* Expect: display: flex */
  /* Expect: flex-wrap: wrap */
  /* Expect: gap: 30px */
  /* Expect: justify-content: center */
}

/* Test: Main layout (grid on min-width: 768px) */
@media (min-width: 768px) {
  main {
    /* Expect: display: grid */
    /* Expect: grid-template-columns: 2fr 1fr */
    /* Expect: gap: 30px */
    /* Expect: justify-content: center */
  }
}

/* Test: Section styles */
section {
  /* Expect: background-color: white */
  /* Expect: padding: 20px */
  /* Expect: border-radius: 5px */
  /* Expect: box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1) */
  /* Expect: width: 100% */
  /* Expect: max-width: 500px */
}

/* Test: Section h3 styles */
section h3 {
  /* Expect: margin-bottom: 20px */
  /* Expect: padding-bottom: 10px */
  /* Expect: border-bottom: 1px solid #ddd */
  /* Expect: color: #1a237e */
}

/* Test: Activity card styles */
.activity-card {
  /* Expect: margin-bottom: 15px */
  /* Expect: padding: 15px */
  /* Expect: border: 1px solid #ddd */
  /* Expect: border-radius: 5px */
  /* Expect: background-color: #f9f9f9 */
}

.activity-card h4 {
  /* Expect: margin-bottom: 10px */
  /* Expect: color: #0066cc */
}

.activity-card p {
  /* Expect: margin-bottom: 8px */
}

/* Test: Form group styles */
.form-group {
  /* Expect: margin-bottom: 15px */
}

.form-group label {
  /* Expect: display: block */
  /* Expect: margin-bottom: 5px */
  /* Expect: font-weight: bold */
}

.form-group input,
.form-group select {
  /* Expect: width: 100% */
  /* Expect: padding: 10px */
  /* Expect: border: 1px solid #ddd */
  /* Expect: border-radius: 4px */
  /* Expect: font-size: 16px */
}

/* Test: Button styles */
button {
  /* Expect: background-color: #1a237e */
  /* Expect: color: white */
  /* Expect: border: none */
  /* Expect: padding: 10px 15px */
  /* Expect: font-size: 16px */
  /* Expect: border-radius: 5px */
  /* Expect: cursor: pointer */
  /* Expect: transition: background-color 0.2s */
}

button:hover {
  /* Expect: background-color: #3949ab */
}

/* Test: Message styles */
.message {
  /* Expect: margin-top: 20px */
  /* Expect: padding: 10px */
  /* Expect: border-radius: 4px */
}

/* Test: Success message */
.success {
  /* Expect: background-color: #e8f5e9 */
  /* Expect: color: #2e7d32 */
  /* Expect: border: 1px solid #a5d6a7 */
}

/* Test: Error message */
.error {
  /* Expect: background-color: #ffebee */
  /* Expect: color: #c62828 */
  /* Expect: border: 1px solid #ef9a9a */
}

/* Test: Info message */
.info {
  /* Expect: background-color: #d1ecf1 */
  /* Expect: color: #0c5460 */
  /* Expect: border: 1px solid #bee5eb */
}

/* Test: Hidden class */
.hidden {
  /* Expect: display: none */
}

/* Test: Footer styles */
footer {
  /* Expect: text-align: center */
  /* Expect: margin-top: 30px */
  /* Expect: padding: 20px */
  /* Expect: color: #666 */
}