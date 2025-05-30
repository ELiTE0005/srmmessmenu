

# What-s-in-Mess index11 better pc version


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Mess Menu - January 2025</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        html {
            box-sizing: border-box;
            font-size: 16px;
        }
        *, *:before, *:after {
            box-sizing: inherit;
        }
        body {
            font-family: 'Segoe UI', Arial, sans-serif;
            background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
            min-height: 100vh;
            margin: 0;
            padding: 0;
            color: #333;
            overflow-x: hidden;
        }
        @keyframes gradientShift {
            0% {background-position:0% 50%;}
            50% {background-position:100% 50%;}
            100% {background-position:0% 50%;}
        }
        .social-bar {
            width: 100%;
            background: rgba(255,255,255,0.92);
            padding: 10px 0;
            text-align: center;
            font-size: 1.1rem;
            font-weight: 500;
            z-index: 1001;
            position: relative;
            letter-spacing: 1px;
            margin-bottom: 15px;
        }
        .social-bar a {
            margin: 0 10px;
            color: inherit;
            text-decoration: none;
            transition: color 0.2s;
            font-size: 1.3em;
            vertical-align: middle;
        }
        .social-bar a[aria-label="Twitter"] { color: #1da1f2; }
        .social-bar a[aria-label="LinkedIn"] { color: #0077b5; }
        .social-bar a[aria-label="GitHub"] { color: #333; }
        .social-bar a:hover { opacity: 0.7; }
        .container {
            max-width: 900px;
            margin: 0 auto;
            background: rgba(255, 255, 255, 0.97);
            border-radius: 18px;
            box-shadow: 0 12px 40px rgba(0,0,0,0.13);
            padding: 32px 18px 18px 18px;
            position: relative;
            z-index: 1;
        }
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
            text-align: center;
            padding: 40px;
            color: white;
            position: relative;
            overflow: hidden;
        }
        .header h1 {
            font-size: 2.2rem;
            font-weight: 800;
            margin-bottom: 15px;
            text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            position: relative;
            z-index: 1;
        }
        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }
        .day-selector {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            padding: 22px 0 18px 0;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            border-bottom: 1px solid #e9ecef;
            position: relative;
        }
        .day-btn {
            padding: 12px 24px;
            border: none;
            border-radius: 50px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
        }
        .day-btn.active, .day-btn:hover {
            background: linear-gradient(135deg, #ff9a9e, #fecfef);
            color: #333;
            transform: translateY(-2px) scale(1.03);
            box-shadow: 0 8px 25px rgba(255, 154, 158, 0.2);
        }
        .menu-content {
            padding: 32px 0 0 0;
        }
        .day-menu {
            display: none;
        }
        .day-menu.active {
            display: block;
            animation: menuSlideIn 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        @keyframes menuSlideIn {
            0% { opacity: 0; transform: translateX(-30px);}
            100% { opacity: 1; transform: translateX(0);}
        }
        .day-title {
            text-align: center;
            font-size: 2rem;
            background: linear-gradient(135deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 28px;
            font-weight: 700;
        }
        .meals-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 24px;
        }
        .meal-card {
            background: rgba(255, 255, 255, 0.9);
            border-radius: 18px;
            padding: 24px;
            position: relative;
            transition: box-shadow 0.3s;
            border: 1px solid rgba(255, 255, 255, 0.6);
            box-shadow: 0 2px 10px rgba(30,144,255,0.07);
        }
        .meal-title {
            font-size: 1.15rem;
            font-weight: 700;
            color: #495057;
            margin-bottom: 16px;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
            z-index: 1;
        }
        .meal-items {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .meal-items li {
            padding: 10px 0 10px 28px;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            color: #666;
            line-height: 1.5;
            position: relative;
            transition: color 0.2s;
        }
        .meal-items li:last-child {
            border-bottom: none;
        }
        .meal-items li::before {
            content: '🍽️';
            position: absolute;
            left: 0;
            font-size: 1rem;
        }
        .special-item {
            color: #dc3545;
            font-weight: 600;
            position: relative;
        }
        .footer {
            background: linear-gradient(135deg, #2c3e50, #34495e);
            color: white;
            text-align: center;
            padding: 24px;
            font-size: 1em;
        }
        .note {
            background: linear-gradient(135deg, #fff3cd, #ffeaa7);
            border: 2px solid #ffd93d;
            border-radius: 12px;
            padding: 16px;
            margin: 28px 0 0 0;
            color: #856404;
            text-align: center;
            font-weight: 500;
            font-size: 1em;
        }
        /* Floating food emojis */
        .floating-food {
            position: fixed;
            font-size: 2em;
            opacity: 0.14;
            pointer-events: none;
            animation: float 18s linear infinite;
            z-index: 0;
        }
        @keyframes float {
            0% { top: -40px;}
            100% { top: 110vh;}
        }
        /* Particle Effect */
        .particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 0;
        }
        .particle {
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: rgba(30,144,255,0.13);
            animation: particle-float 17s linear infinite;
        }
        @keyframes particle-float {
            0% {transform: translateY(0);}
            100% {transform: translateY(100vh);}
        }
        /* ---------- MOBILE OPTIMIZATION ---------- */
        @media (max-width: 700px) {
            html { font-size: 15px; }
            .container { padding: 10px 2vw; }
            .header { padding: 22px 5px;}
            .header h1 { font-size: 1.3em; }
            .day-title { font-size: 1.1em; }
            .day-selector { gap: 6px; padding: 10px 0 10px 0;}
            .day-btn { padding: 10px 12px; font-size: 0.93em; min-width: 44px;}
            .menu-content { padding: 10px 0 0 0;}
            .meals-grid { grid-template-columns: 1fr; gap: 12px;}
            .meal-card { padding: 14px; }
            .note { font-size: 0.97em; padding: 10px;}
        }
        @media (max-width: 500px) {
            html { font-size: 14px; }
            .container { padding: 2px 1vw;}
            .header { padding: 12px 2px;}
            .footer { padding: 14px; font-size: 0.95em;}
            .note { padding: 8px; font-size: 0.93em;}
        }
        /* Reduce floating emojis and particles on mobile for performance */
        @media (max-width: 700px) {
            .floating-food:nth-child(n+4) { display: none !important; }
            .particles { display: none !important; }
        }
    </style>
</head>
<body>
    <!-- Social Handles Section -->
    <div class="social-bar">
        made by <span style="font-weight:600;">Rajbir</span>:
        <a href="https://x.com/rangoliagt" target="_blank" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/rajbirbiswas" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://github.com/ELiTE0005" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
    </div>

    <!-- Floating Background Elements -->
    <div class="floating-food" style="left: 5%; animation-delay: 0s;">🍕</div>
    <div class="floating-food" style="left: 15%; animation-delay: 2s;">🍔</div>
    <div class="floating-food" style="left: 25%; animation-delay: 4s;">🍜</div>
    <div class="floating-food" style="left: 35%; animation-delay: 6s;">🍛</div>
    <div class="floating-food" style="left: 45%; animation-delay: 8s;">🍳</div>
    <div class="floating-food" style="left: 55%; animation-delay: 10s;">🥗</div>
    <div class="floating-food" style="left: 65%; animation-delay: 12s;">🍰</div>
    <div class="floating-food" style="left: 75%; animation-delay: 14s;">🧁</div>
    <div class="floating-food" style="left: 85%; animation-delay: 16s;">🍎</div>
    <div class="floating-food" style="left: 95%; animation-delay: 18s;">🥤</div>

    <!-- Particle System -->
    <div class="particles" id="particles"></div>

    <div class="container">
        <div class="header">
            <h1>🍽️ Student Mess Menu</h1>
            <p>✨ January - June 2025  Daily Meal Schedule ✨</p>
        </div>

        <div class="day-selector">
            <button class="day-btn active" onclick="showDay('monday')">🌟 Monday</button>
            <button class="day-btn" onclick="showDay('tuesday')">🔥 Tuesday</button>
            <button class="day-btn" onclick="showDay('wednesday')">⚡ Wednesday</button>
            <button class="day-btn" onclick="showDay('thursday')">🌈 Thursday</button>
            <button class="day-btn" onclick="showDay('friday')">🎉 Friday</button>
            <button class="day-btn" onclick="showDay('saturday')">🌺 Saturday</button>
            <button class="day-btn" onclick="showDay('sunday')">🎊 Sunday</button>
        </div>

        <div class="menu-content">
            <!-- Monday Menu -->
            <div class="day-menu active" id="monday">
                <h2 class="day-title">Monday Menu</h2>
                <div class="meals-grid">
                    <div class="meal-card">
                        <h3 class="meal-title">🌅 Breakfast</h3>
                        <ul class="meal-items">
                            <li>Bread, Butter, Jam, Set Dosa, Vadacurry, Idly Podi, Oil, Chapathi</li>
                            <li>Soya aalo Kasha</li>
                            <li>Tea/Coffee/Milk</li>
                            <li>Boiled Egg, Banana</li>
                        </ul>
                    </div>
                    <div class="meal-card">
                        <h3 class="meal-title">🍛 Lunch</h3>
                        <ul class="meal-items">
                            <li><span class="special-item">Kori Chapganti</span>, Veg Chettinad Curry, Jeera Pulao</li>
                            <li>Mint Chapathi, Steamed Rice, Arachivita Sambar, Panchratna Dal</li>
                            <li><span class="special-item">Raw Banana Fry</span>, Pineapple Rasam, Pickle, Butter Milk</li>
                            <li>Fryums, Boiled Vegetable</li>
                        </ul>
                    </div>
                    <div class="meal-card">
                        <h3 class="meal-title">🍪 Snacks</h3>
                        <ul class="meal-items">
                            <li>Pav Baji</li>
                            <li>Tea/Coffee</li>
                        </ul>
                    </div>
                    <div class="meal-card">
                        <h3 class="meal-title">🌙 Dinner</h3>
                        <ul class="meal-items">
                            <li>Madras/Wheat Chappathi, Mutton/Paneer</li>
                            <li>Masala Vegetable Idly, Idly Podi Oil, Special Chutney</li>
                            <li>Steamed Rice, <span class="special-item">Moong Dal Tadka</span></li>
                            <li>Sambar, Rasam, Pickle Fryums, Veg Salad, Milk</li>
                            <li>Fish Gravy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Tuesday Menu -->
            <div class="day-menu" id="tuesday">
                <h2 class="day-title">Tuesday Menu</h2>
                <div class="meals-grid">
                    <div class="meal-card">
                        <h3 class="meal-title">🌅 Breakfast</h3>
                        <ul class="meal-items">
                            <li>Bread, Butter, Jam, Poori, Dal Aloo Masala</li>
                            <li>Semla Veg Kichadi, Chutney</li>
                            <li>Tea/Coffee/Milk</li>
                        </ul>
                    </div>
                    <div class="meal-card">
                        <h3 class="meal-title">🍛 Lunch</h3>
                        <ul class="meal-items">
                            <li>Sweet, <span class="special-item">Bahara Pulao</span>, Chappathi, <span class="special-item">Meal Maker Curry</span></li>
                            <li>Steamed Rice, <span class="special-item">Pesalu Garelu</span>, Dal Fry</li>
                            <li>Tomato Rasam, Juntial Peas Roasted, Fryums</li>
                            <li>Pickle, <span class="special-item">Butter Milk</span></li>
                        </ul>
                    </div>
                    <div class="meal-card">
                        <h3 class="meal-title">🍪 Snacks</h3>
                        <ul class="meal-items">
                            <li>Mysore Bonda/Drigha Pakoda</li>
                            <li>Chutney</li>
                            <li>Tea/Coffee</li>
                        </ul>
                    </div>
                    <div class="meal-card">
                        <h3 class="meal-title">🌙 Dinner</h3>
                        <ul class="meal-items">
                            <li>Ghee Chappathi, Black Chana, Steamed Rice</li>
                            <li>Vegetable Dal</li>
                            <li><span class="special-item">Veg/Chilly Gobi Dry</span>, Millet Dosa, Idly Podi Oil</li>
                            <li>Pepper Rasam, Pickle Fryums, Veg Salad, Milk</li>
                            <li>Chicken Gravy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Wednesday Menu -->
            <div class="day-menu" id="wednesday">
                <h2 class="day-title">Wednesday Menu</h2>
                <div class="meals-grid">
                    <div class="meal-card">
                        <h3 class="meal-title">🌅 Breakfast</h3>
                        <ul class="meal-items">
                            <li>Bread, Butter, Jam, Idly, Idly Podi Oil</li>
                            <li><span class="special-item">Kourma Sambal</span>, Chutney, Dosa, Mint Chutney</li>
                            <li>Tea/Coffee/Milk, Masala Omelet</li>
                            <li>Banana</li>
                        </ul>
                    </div>
                    <div class="meal-card">
                        <h3 class="meal-title">🍛 Lunch</h3>
                        <ul class="meal-items">
                            <li>Chappathi, <span class="special-item">Muttar Masala</span>, <span class="special-item">Spinach Aloo</span>, Veg Pulao</li>
                            <li>Steamed Rice, Tomato Sambar, Dal Tadka, Garlic Rasam</li>
                            <li>Pickle, Butter Milk, Fryums</li>
                            <li>Boiled Vegetable</li>
                        </ul>
                    </div>
                    <div class="meal-card">
                        <h3 class="meal-title">🍪 Snacks</h3>
                        <ul class="meal-items">
                            <li>Veg Puff(or)</li>
                            <li><span class="special-item">Aloo Bonda</span></li>
                            <li>Tea/Coffee</li>
                        </ul>
                    </div>
                    <div class="meal-card">
                        <h3 class="meal-title">🌙 Dinner</h3>
                        <ul class="meal-items">
                            <li>Chappathi, Steamed Rice, Dal Tadka, Chicken Masala</li>
                            <li>(Non-Veg)/Capsicum Butter Masala/Butter Masala</li>
                            <li>Tomato Pepper, Rasam, Pickle Fryums</li>
                            <li>Veg Salad Milk</li>
                            <li>Chicken Gravy</li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- Thursday Menu -->
            <div class="day-menu" id="thursday">
                <h2 class="day-title">Thursday Menu</h2>
                <div class="meals-grid">
                    <div class="meal-card">
                        <h3 class="meal-title">🌅 Breakfast</h3>
                        <ul class="meal-items">
                            <li>Bread, Butter, Jam, Idiyappam (Lemon for)</li>
                            <li>Masala) Or Millet Idiyappam, Chappathi, White Peas Masala</li>
                            <li>Chutney</li>
                            <li>Tea/Coffee/Milk</li>
                        </ul>
                    </div>
                    <div class="meal-card">
                        <h3 class="meal-title">🍛 Lunch</h3>
                        <ul class="meal-items">
                            <li><span class="special-item">Beetroot Chappathi</span>, <span class="special-item">Gobi Capsicum</span>, <span class="special-item">Onion Pulao</span></li>
                            <li>Steamed Rice, <span class="special-item">Mysore Dal Fry</span>, Kadi Pakoda</li>
                            <li>Rasam, Pickle, Vam Fryums, Butter Milk</li>
                            <li>Fryums</li>
                        </ul>
                    </div>
                    <div class="meal-card">
                        <h3 class="meal-title">🍪 Snacks</h3>
                        <ul class="meal-items">
                            <li>Pani Poori (or)</li>
                            <li>Chenna Sundal</li>
                            <li>Tea/Coffee</li>
                        </ul>
                    </div>
                    <div class="meal-card">
                        <h3 class="meal-title">🌙 Dinner</h3>
                        <ul class="meal-items">
                            <li><span class="special-item">Veg Soup</span>, Ghee Poori, Steamed Rice</li>
                            <li>Tomato Dal, Veg Upma, Coconut Chutney</li>
                          
