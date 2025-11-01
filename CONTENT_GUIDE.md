# Portfolio Content Management Guide

This guide shows you exactly where to add and edit all your portfolio content.

## 📍 Where to Find Everything

Open `client/src/pages/Portfolio.tsx` and look at the top of the file (lines 2-96). You'll see a clearly marked section:

```javascript
// ========================================
// CONFIGURATION - EDIT ALL CONTENT HERE
// ========================================
const CONFIG = { ... }
```

## 📝 How to Edit Content

### 1. Personal Information

Edit your basic contact details:

```javascript
personalInfo: {
  name: 'Your Name',
  tagline: 'Your Job Title',
  address: 'Your Address',
  phone: '+1234567890',
  email: 'your@email.com',
  cvUrl: 'https://link-to-your-cv.pdf',
  linkedinUrl: 'https://linkedin.com/in/yourprofile',
  githubProjectUrl: 'https://github.com/yourusername/yourproject',
}
```

### 2. About Me Section

Edit your bio and skills:

```javascript
aboutMe: {
  bio: `Write your bio here. You can write multiple lines.
  Talk about your experience, passion, and what you do.`,
  skills: [
    'Skill 1',
    'Skill 2',
    'Skill 3',
    // Add as many skills as you want
  ]
}
```

### 3. Projects

Add or edit your projects with enhanced showcase options:

```javascript
projects: [
  {
    id: 1,
    title: 'Project Name',
    description: 'Detailed description of what you built, the problem solved, and key features',
    category: 'Web Development',  // or 'Mobile', 'Healthcare', 'Government', etc.
    
    // Optional fields (include what you have):
    projectUrl: 'https://github.com/youruser/project',  // GitHub or live demo link
    snapshots: [  // 4 screenshots showing different pages/features
      'https://link-to-screenshot1.jpg',
      'https://link-to-screenshot2.jpg',
      'https://link-to-screenshot3.jpg',
      'https://link-to-screenshot4.jpg'
    ],
    imageUrl: 'https://link-to-main-preview.jpg'  // Main preview image
  },
  // Add more projects by copying this format
]
```

**Showcase Options:**
- **With GitHub Link**: Add `projectUrl` to link to your code repository
- **With Snapshots**: Add `snapshots` array with 4 screenshots of your project pages
- **With Both**: Include both link and snapshots for maximum showcase
- **Simple**: Just use `imageUrl` for a single preview image

The portfolio will intelligently display whatever you provide!

### 4. Certificates ⭐

**This is what you asked for!** Add your certificates with links to Google Drive:

```javascript
certificates: [
  {
    id: 1,
    name: 'Certificate Name',
    organization: 'Organization Name',
    issueDate: 'Month Year',
    category: 'Professional', // 'Academic' or 'Professional'
    
    // 👉 THIS IS WHERE YOU ADD YOUR GOOGLE DRIVE LINK
    credentialUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view',
    
    // Optional: Add a thumbnail image of the certificate
    thumbnailUrl: 'https://link-to-certificate-preview.jpg',
    
    // Optional: Organization logo
    organizationLogoUrl: 'https://link-to-org-logo.png'
  },
  // Add more certificates by copying this format
]
```

**Categories:**
- Use `'Academic'` for university degrees, academic courses, and educational certifications
- Use `'Professional'` for industry certifications, professional development courses, and work-related credentials

## 🎯 Quick Example: Adding a New Certificate

Let's say you got a new AWS certification and uploaded it to Google Drive:

1. Go to `client/src/pages/Portfolio.tsx`
2. Find the `certificates:` array (around line 57)
3. Add a new entry:

```javascript
certificates: [
  // ... existing certificates ...
  {
    id: 4,  // Make sure this is unique
    name: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    issueDate: 'November 2024',
    category: 'Professional',  // This is a professional certification
    credentialUrl: 'https://drive.google.com/file/d/abc123xyz/view',
    thumbnailUrl: 'https://i.imgur.com/aws-cert.png',
    organizationLogoUrl: 'https://i.imgur.com/aws-logo.png'
  }
]
```

4. Save the file - the app will automatically reload!

## 🎯 Quick Example: Adding a New Project

Want to add another project with GitHub link and screenshots? Here's how:

1. Go to `client/src/pages/Portfolio.tsx`
2. Find the `projects:` array (around line 38)
3. Add a new entry:

```javascript
projects: [
  // ... existing projects ...
  {
    id: 4,
    title: 'E-Commerce Platform',
    description: 'Built a full-featured e-commerce platform with product management, shopping cart, payment integration, and admin dashboard. Includes inventory tracking, order management, and customer analytics.',
    category: 'Web Development',
    projectUrl: 'https://github.com/youruser/ecommerce-platform',
    snapshots: [
      'https://i.imgur.com/product-page.jpg',
      'https://i.imgur.com/shopping-cart.jpg',
      'https://i.imgur.com/checkout.jpg',
      'https://i.imgur.com/admin-dashboard.jpg'
    ]
  }
]
```

4. Save the file - done!

**Real Examples in Your Portfolio:**
- **Drone Approval System**: Includes GitHub link + 4 snapshots
- **Clinic Management**: Includes 4 snapshots showing all key features
- **Portfolio Website**: Includes main image + 4 detailed snapshots

## 💡 Tips

### For Google Drive Links:
1. Upload your certificate to Google Drive
2. Right-click → Get link → Set to "Anyone with the link can view"
3. Copy the link (it will look like: `https://drive.google.com/file/d/1AbCdEfGhIjK/view`)
4. Paste it into the `credentialUrl` field

### For Images:
- You can use placeholder images: `https://via.placeholder.com/300x200?text=Your+Text`
- Or upload to image hosting sites like Imgur, Cloudinary, etc.
- Or use images from your Google Drive (make them public first)

### For Project Images:
- Use screenshots of your projects
- Or create preview images
- Recommended size: 400x300 pixels

## 🚀 That's It!

Everything is in one place at the top of `client/src/pages/Portfolio.tsx`. 

No database, no external services - just edit the CONFIG object and you're done!
