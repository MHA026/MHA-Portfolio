# Quick Start Guide

## 🚀 View Your Portfolio Now!

### Method 1: Double-Click (Easiest)
1. Navigate to `d:\Portfolio`
2. Double-click `index.html`
3. Your default browser will open the portfolio

### Method 2: Local Server (Recommended for Best Experience)

**Using Python:**
```powershell
cd d:\Portfolio
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Using Node.js:**
```powershell
cd d:\Portfolio
npx http-server -p 8000
```
Then open: `http://localhost:8000`

### Method 3: VS Code Live Server
1. Open `d:\Portfolio` in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## ✅ What to Check

Once opened, verify:
- ✅ Hero section with "Securing the Digital Frontier" headline
- ✅ Role text cycles every 3 seconds
- ✅ Scrolling threat feed in background
- ✅ All sections load: About, Experience, Skills, Certifications, Contact
- ✅ Hover effects on project cards
- ✅ Skills reveal on hover
- ✅ Smooth scrolling navigation
- ✅ Mobile menu (resize browser to < 968px width)

## 📝 Next Steps

1. **Add Your Resume**
   - Place `Mohammed_Hasan_Ali_Resume.pdf` in `d:\Portfolio\assets\`
   - The download button will automatically work

2. **Update Social Links**
   - Edit `index.html`
   - Search for `linkedin.com/in/` and `github.com/`
   - Replace with your actual profile URLs

3. **Customize Content**
   - Update email in Contact section
   - Modify project descriptions if needed
   - Add more projects or certifications

4. **Deploy**
   - GitHub Pages (free)
   - Netlify (free)
   - Vercel (free)
   - See README.md for detailed deployment instructions

## 🎨 Features to Explore

- **Dynamic Role Cycling**: Watch the hero subtitle change
- **Threat Feed**: Subtle scrolling security messages in background
- **Interactive Timeline**: Hover over the HACKTOBER 2025 entry
- **Project Status**: Note the "Active" indicator on the Phishing Detector
- **Skills Matrix**: Hover over any skill to see specific tools
- **Smooth Animations**: Scroll down to see elements fade in
- **Mobile View**: Resize browser to see responsive design

## 🐛 Troubleshooting

**If styles don't load:**
- Make sure all files are in the same directory
- Check that `styles.css` and `script.js` are in `d:\Portfolio`

**If animations don't work:**
- Try using a local server instead of opening the file directly
- Ensure JavaScript is enabled in your browser

**If fonts look different:**
- Check your internet connection (Google Fonts need to load)
- Fonts will fall back to system fonts if unavailable

## 📚 Documentation

- **README.md**: Complete project documentation
- **walkthrough.md**: Detailed feature walkthrough
- **assets/README.md**: Resume instructions

---

**Enjoy your new portfolio! 🎉**
