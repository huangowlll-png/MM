export type ConceptId = 'tiktok' | 'luxury' | 'minimal' | 'genz' | 'premium';

export interface ConceptData {
  id: ConceptId;
  name: string;
  mood: string;
  typography: string;
  colors: string[];
  ctaStrategy: string;
  uiuxExplanation: string;
  shopifySections: string[];
}

export const CONCEPTS: Record<ConceptId, ConceptData> = {
  tiktok: {
    id: 'tiktok',
    name: 'TikTok Viral Beauty',
    mood: 'High-energy, Viral, Fast-paced',
    typography: 'Bold, tight sans-serif (Inter Extra Bold)',
    colors: ['#FF0050', '#00F2EA', '#000000'],
    ctaStrategy: 'Hyper-urgent, "As Seen on TikTok", "Add to Bag" sticky button',
    uiuxExplanation: 'Focus on vertical video content and social proof. Fast interaction cycles and mobile-optimized swipe elements.',
    shopifySections: ['Video Hero', 'Shoppable Reels', 'Flash Reviews', 'Product Hotspots', 'Split-Screen Collection']
  },
  luxury: {
    id: 'luxury',
    name: 'Luxury Salon Beauty',
    mood: 'Sophisticated, Elevated, Exclusive',
    typography: 'Elegant Serif (Playfair Display) + Wide Sans',
    colors: ['#1A1A1A', '#C5A059', '#F9F6F1'],
    ctaStrategy: 'Soft, invitation-style CTAs like "Discover the Ritual"',
    uiuxExplanation: 'High whitespace, large high-fashion imagery, and subtle transitions. Focus on the sensory experience and professional results.',
    shopifySections: ['Editorial Hero', 'Brand Heritage Story', 'Featured Ritual', 'High-Res Carousel', 'Client Portfolio']
  },
  minimal: {
    id: 'minimal',
    name: 'Minimal Clean Skincare',
    mood: 'Pure, Honest, Effortless',
    typography: 'Geometric Sans-serif (Space Grotesk)',
    colors: ['#E9EBE4', '#3E4B43', '#FFFFFF'],
    ctaStrategy: 'Transparent and direct, "Shop the Essentials"',
    uiuxExplanation: 'Clutter-free layout. Focus on ingredients, sustainability, and ease of use. Soft natural lighting in imagery.',
    shopifySections: ['Soft Focus Hero', 'Ingredient Highlight', 'Sustainable Commitment', 'Minimal Grid', 'Transparency Table']
  },
  genz: {
    id: 'genz',
    name: 'Gen Z Playful Aesthetic',
    mood: 'Vibrant, Expressive, Community-driven',
    typography: 'Rounded, friendly (Outfit) + Brutalist accents',
    colors: ['#FDFF00', '#BF40BF', '#FFFFFF'],
    ctaStrategy: 'Casual, personality-led like "Get the Glow" or "Join the Club"',
    uiuxExplanation: 'Interactive elements, bold outlines, stickers, and mixed media. Focus on self-expression and community vibes.',
    shopifySections: ['Sticker-Bomb Hero', 'User-Gen Gallery', 'Interactive Quiz', 'Drop Countdown', 'Community Feed']
  },
  premium: {
    id: 'premium',
    name: 'Premium Feminine Lifestyle',
    mood: 'Warm, Relatable, Self-care focus',
    typography: 'Modern Serif + Soft Sans mix',
    colors: ['#D2B48C', '#F5F5DC', '#8B4513'],
    ctaStrategy: 'Routine-focused, "Start Your Morning"',
    uiuxExplanation: 'Lifestyle integration shots. Focus on how the product fits into a beautiful, organized life. Warm and inviting.',
    shopifySections: ['Lifestyle Hero', 'Morning Routine Walkthrough', 'Press Mentions', 'Soft Category Grid', 'Newsletter Invite']
  }
};
