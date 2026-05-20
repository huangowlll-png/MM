export interface ShopifyThemeFile {
  path: string;
  category: 'layout' | 'templates' | 'sections' | 'snippets' | 'config' | 'assets';
  description: string;
  code: string;
}

export const shopifyThemeStructure: ShopifyThemeFile[] = [
  {
    path: 'layout/theme.liquid',
    category: 'layout',
    description: 'The master template. Modified from Shopify Dawn with custom web fonts (Bricolage Grotesque, Outfit) and global CSS variables loaded for the ModMingle styling palette (pink glossy, hot, soft, brand-yellow).',
    code: `<!doctype html>
<html class="no-js" lang="{{ request.locale.iso_code }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="theme-color" content="">
    <link rel="canonical" href="{{ canonical_url }}">

    {%- if settings.favicon != blank -%}
      <link rel="icon" type="image/png" href="{{ settings.favicon | image_url: width: 32, height: 32 }}">
    {%- endif -%}

    <title>
      {{ page_title }}
      {%- if current_tags %} &ndash; tagged "{{ current_tags | join: ', ' }}"{% endif -%}
      {%- if current_page != 1 %} &ndash; Page {{ current_page }}{% endif -%}
      {%- unless page_title contains shop.name %} &ndash; {{ shop.name }}{% endunless -%}
    </title>

    {% if page_description %}
      <meta name="description" content="{{ page_description | escape }}">
    {% endif %}

    {% render 'meta-tags' %}

    <!-- ModMingle Custom Font Loaders -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=Outfit:wght@400;700;800&display=swap" rel="stylesheet">

    {{ content_for_header }}

    <!-- Tailwind / ModMingle Theme Variables -->
    <style>
      :root {
        --font-heading: 'Bricolage Grotesque', sans-serif;
        --font-body: 'Outfit', sans-serif;

        --color-pink-gloss: #FF7EB9;
        --color-pink-hot: #FF0050;
        --color-pink-soft: #FFE4E1;
        --color-brand-yellow: #FDFF00;
        --color-neutral-dark: #121212;
      }

      body {
        font-family: var(--font-body);
        background-color: #FAFAFA;
        color: var(--color-neutral-dark);
        margin: 0;
        padding: 0;
      }

      h1, h2, h3, h4, h5, .brand-logo {
        font-family: var(--font-heading);
        font-weight: 800;
      }
    </style>
  </head>

  <body>
    <a class="skip-to-content-link button visually-hidden" href="#MainContent">
      {{ "accessibility.skip_to_text" | t }}
    </a>

    {% sections 'header-group' %}

    <main id="MainContent" class="content-for-layout focus-none" role="main" tabindex="-1">
      {{ content_for_layout }}
    </main>

    {% sections 'footer-group' %}

    <!-- Sticky Add To Cart Global Snippet -->
    {% if template.name == 'product' %}
      {% render 'sticky-cart-button', product: product %}
    {% endif %}

    <script src="{{ 'global.js' | asset_url }}" defer="defer"></script>
  </body>
</html>`
  },
  {
    path: 'templates/index.json',
    category: 'templates',
    description: 'The standard JSON template format required in OS 2.0. This config file dynamically builds ModMingle\'s high-energy homepage using custom configurable sections designed for maximum conversion engagement.',
    code: `{
  "sections": {
    "announcement_bar": {
      "type": "announcement-bar",
      "settings": {
        "text_speed": 15,
        "marquee_text": "🚨 ULTRA FINE MIST • ZERO WHITE CAST • LAZY GIRL CONFIDENCE RESET 🚨"
      }
    },
    "hero_banner": {
      "type": "hero-section",
      "settings": {
        "heading": "Instant Confidence Reset.",
        "highlight_word": "Reset.",
        "description": "The ultimate Lazy Girl Hack. Ultra-fine mist for a last-minute rescue. No white residue, just instant volume.",
        "primary_cta_text": "Grab the Fix — $24",
        "cta_link": "shopify://products/modmingle-dry-shampoo"
      }
    },
    "benefits_grid": {
      "type": "benefits-grid",
      "settings": {
        "title": "Why Besties Love It",
        "subtitle": "Confidence in 30 seconds"
      }
    },
    "tiktok_ugc": {
      "type": "tiktok-ugc-carousel",
      "settings": {
        "section_title": "As Seen On The FYP",
        "button_text": "Join the Lazy Girl Club 💖"
      }
    },
    "faq_accordion": {
      "type": "faq-accordion",
      "settings": {
        "heading": "Got Questions, Bestie?",
        "subheading": "We got answers"
      }
    },
    "reviews_grid": {
      "type": "reviews-grid",
      "settings": {
        "heading": "Real Hair. Real Trust.",
        "average_score": "4.9/5"
      }
    }
  },
  "order": [
    "announcement_bar",
    "hero_banner",
    "benefits_grid",
    "tiktok_ugc",
    "faq_accordion",
    "reviews_grid"
  ]
}`
  },
  {
    path: 'templates/product.json',
    category: 'templates',
    description: 'Product page architecture specifying the location of custom product blocks, user reviews, dynamic recommendation layouts, and custom description blocks.',
    code: `{
  "sections": {
    "main": {
      "type": "main-product",
      "blocks": {
        "title": {
          "type": "title",
          "settings": {}
        },
        "price": {
          "type": "price",
          "settings": {}
        },
        "description": {
          "type": "description",
          "settings": {}
        },
        "buy_buttons": {
          "type": "buy_buttons",
          "settings": {
            "show_gift_card_recipient": false
          }
        }
      },
      "block_order": [
        "title",
        "price",
        "description",
        "buy_buttons"
      ],
      "settings": {
        "enable_sticky_info": true,
        "media_layout": "grid-2"
      }
    },
    "recommendations": {
      "type": "product-recommendations",
      "settings": {
        "heading": "Frequently Bought Together"
      }
    }
  },
  "order": [
    "main",
    "recommendations"
  ]
}`
  },
  {
    path: 'sections/announcement-bar.liquid',
    category: 'sections',
    description: 'High-visibility ticker section with custom scroll animations and speed modifiers inside the Shopify Theme Editor. Displays confidence tags dynamically.',
    code: `{{ 'section-announcement-bar.css' | asset_url | stylesheet_tag }}

<div class="announcement-marquee" style="background-color: var(--color-brand-yellow); border-bottom: 3px solid #000;">
  <div class="marquee-track" style="animation-duration: {{ section.settings.text_speed }}s">
    <span class="marquee-content">
      {{ section.settings.marquee_text }} &nbsp; • &nbsp;
      {{ section.settings.marquee_text }} &nbsp; • &nbsp;
      {{ section.settings.marquee_text }} &nbsp; • &nbsp;
    </span>
  </div>
</div>

<style>
  .announcement-marquee {
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  .marquee-track {
    display: flex;
    width: max-content;
    animation: marquee_scroll linear infinite;
  }
  .marquee-content {
    font-family: 'Bricolage Grotesque', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.05em;
    color: #000;
  }
  @keyframes marquee_scroll {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-33.33%); }
  }
</style>

{% schema %}
{
  "name": "Announcement Bar",
  "settings": [
    {
      "type": "text",
      "id": "marquee_text",
      "label": "Marquee Text",
      "default": "🚨 ULTRA FINE MIST • ZERO WHITE CAST • LAZY GIRL CONFIDENCE RESET 🚨"
    },
    {
      "type": "range",
      "id": "text_speed",
      "min": 5,
      "max": 30,
      "step": 1,
      "unit": "s",
      "label": "Scroll Animation Duration",
      "default": 15
    }
  ],
  "presets": [
    {
      "name": "Announcement Bar"
    }
  ]
}
{% endschema %}`
  },
  {
    path: 'sections/tiktok-ugc-carousel.liquid',
    category: 'sections',
    description: 'Vertical 9:16 mobile-first video grid showcasing interactive, high-impact social proof widgets complete with mock like counts, custom usernames, and user interactions.',
    code: `<div class="tiktok-ugc-container py-12 px-4" style="background-color: {{ section.settings.bg_color }};">
  <div class="max-w-7xl mx-auto">
    <div class="flex justify-between items-end mb-8">
      <div>
        <span class="bg-pink-hot text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rotate-2 mb-2 inline-block">Real Results</span>
        <h2 class="text-4xl font-extrabold uppercase italic leading-none font-heading">{{ section.settings.section_title }}</h2>
      </div>
      <a href="{{ section.settings.button_link }}" class="font-extrabold uppercase text-xs tracking-wider border-b-2 border-pink-hot pb-1 flex items-center gap-1">
        {{ section.settings.button_text }} &rarr;
      </a>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      {%- for block in section.blocks -%}
        <div class="relative aspect-[9/16] rounded-3xl overflow-hidden border-2 border-white shadow-lg group" {{ block.shopify_attributes }}>
          {%- if block.settings.thumbnail_image != blank -%}
            <img src="{{ block.settings.thumbnail_image | img_url: '400x' }}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="TikTok thumbnail">
          {%- else -%}
            <img src="https://picsum.photos/seed/tiktok-{{ block.id }}/600/800" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="TikTok placeholder">
          {%- endif -%}
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div class="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20">
            <!-- TikTok UI emulation overlay -->
            <div class="absolute right-3 top-[30%] flex flex-col items-center gap-4 text-white text-center">
              <div class="w-8 h-8 rounded-full border border-white overflow-hidden bg-neutral-200">
                <img src="https://i.pravatar.cc/100?u={{ block.id }}" class="w-full h-full object-cover" alt="User avatar">
              </div>
              <div class="flex flex-col items-center mt-2">
                <span class="text-pink-hot">❤️</span>
                <span class="text-[10px] font-bold">{{ block.settings.likes }}</span>
              </div>
            </div>
          </div>

          <div class="absolute bottom-4 left-4 right-12 text-white z-10">
            <p class="font-bold text-sm mb-1 truncate">@{{ block.settings.username }}</p>
            <p class="text-xs opacity-90 leading-snug line-clamp-3">{{ block.settings.review_quote }}</p>
          </div>
        </div>
      {%- endfor -%}
    </div>
  </div>
</div>

{% schema %}
{
  "name": "TikTok UGC Grid",
  "max_blocks": 4,
  "settings": [
    {
      "type": "text",
      "id": "section_title",
      "label": "Section Title",
      "default": "As Seen On The FYP"
    },
    {
      "type": "text",
      "id": "button_text",
      "label": "Button Text",
      "default": "Join the Lazy Girl Club"
    },
    {
      "type": "url",
      "id": "button_link",
      "label": "Button Link"
    },
    {
      "type": "color",
      "id": "bg_color",
      "label": "Background Color",
      "default": "#FFE4E1"
    }
  ],
  "blocks": [
    {
      "type": "video_card",
      "name": "UGC Video Card",
      "settings": [
        {
          "type": "image_picker",
          "id": "thumbnail_image",
          "label": "Thumbnail Image"
        },
        {
          "type": "text",
          "id": "username",
          "label": "Username",
          "default": "beautyhacks"
        },
        {
          "type": "text",
          "id": "likes",
          "label": "Likes Display",
          "default": "12.5k"
        },
        {
          "type": "text",
          "id": "review_quote",
          "label": "Review Quote",
          "default": "Literally saved my 3rd day hair in seconds! No whitecast at all."
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "TikTok UGC Grid"
    }
  ]
}
{% endschema %}`
  },
  {
    path: 'sections/faq-accordion.liquid',
    category: 'sections',
    description: 'A dedicated OS 2.0 section to answer frequent "lazy girl" queries about 3rd-day hair resets, white residue concerns, and ingredients.',
    code: `<div class="faq-accordion py-16 px-4 bg-white" id="faq-section">
  <div class="max-w-3xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-extrabold font-heading">{{ section.settings.heading }}</h2>
      <p class="text-neutral-500 mt-2">{{ section.settings.subheading }}</p>
    </div>

    <div class="faq-list space-y-4">
      {%- for block in section.blocks -%}
        <div class="faq-item border-2 border-black rounded-2xl p-6 bg-neutral-50 shadow-sm" x-data="{ open: false }">
          <button @click="open = !open" class="w-full flex justify-between items-center text-left">
            <span class="font-extrabold text-lg uppercase tracking-tight">{{ block.settings.question }}</span>
            <span class="text-xl font-black font-heading" x-text="open ? '−' : '+'">+</span>
          </button>
          <div x-show="open" x-collapse class="mt-4 text-neutral-600 font-medium leading-relaxed">
            {{ block.settings.answer }}
          </div>
        </div>
      {%- endfor -%}
    </div>
  </div>
</div>

{% schema %}
{
  "name": "FAQ Accordion",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Got Questions, Bestie?"
    },
    {
      "type": "text",
      "id": "subheading",
      "label": "Subheading",
      "default": "We've got you covered 💖"
    }
  ],
  "blocks": [
    {
      "type": "faq_item",
      "name": "FAQ Item",
      "settings": [
        {
          "type": "text",
          "id": "question",
          "label": "Question",
          "default": "Will it leave a white cast on dark hair?"
        },
        {
          "type": "textarea",
          "id": "answer",
          "label": "Answer",
          "default": "Absolutely not! ModMingle features proprietary ultra-fine mist formulation that absorbs oil and instantly disappears."
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "FAQ Accordion"
    }
  ]
}
{% endschema %}`
  },
  {
    path: 'sections/reviews-grid.liquid',
    category: 'sections',
    description: 'Rating grid styled with confidence scores, custom client review cards, and social media icons.',
    code: `<div class="reviews-section py-20 px-4 bg-neutral-50">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <div class="flex justify-center items-center gap-1 mb-2">
        {%- for i in (1..5) -%}
          <span class="text-pink-hot">★</span>
        {%- endfor -%}
        <span class="font-extrabold ml-2">Rating {{ section.settings.average_score }}</span>
      </div>
      <h2 class="text-5xl font-extrabold font-heading">{{ section.settings.heading }}</h2>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      {%- for block in section.blocks -%}
        <div class="review-card p-8 bg-white border-4 border-black rounded-[2rem] shadow-[4px_4px_0px_#000]">
          <div class="flex gap-1 mb-4">
            {%- for i in (1..block.settings.star_rating) -%}
              <span class="text-pink-hot">★</span>
            {%- endfor -%}
          </div>
          <p class="italic text-neutral-800 font-bold mb-4">"{{ block.settings.review_quote }}"</p>
          <div class="flex justify-between items-center text-xs">
            <span class="font-bold opacity-60">Verified Buyer / {{ block.settings.hair_type }}</span>
            <span class="font-extrabold text-[#FF0050] bg-pink-soft px-2 py-1 rounded">{{ block.settings.hair_day }}</span>
          </div>
        </div>
      {%- endfor -%}
    </div>
  </div>
</div>

{% schema %}
{
  "name": "Reviews Grid",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading",
      "default": "Real Hair. Real Trust."
    },
    {
      "type": "text",
      "id": "average_score",
      "label": "Average Score",
      "default": "4.9/5"
    }
  ],
  "blocks": [
    {
      "type": "review_item",
      "name": "Review Item",
      "settings": [
        {
          "type": "range",
          "id": "star_rating",
          "min": 1,
          "max": 5,
          "step": 1,
          "label": "Star Rating",
          "default": 5
        },
        {
          "type": "textarea",
          "id": "review_quote",
          "label": "Review Quote",
          "default": "This actually saved my 3rd-day hair before a last-minute brunch."
        },
        {
          "type": "text",
          "id": "hair_type",
          "label": "Hair Type",
          "default": "Thick & Brunette"
        },
        {
          "type": "text",
          "id": "hair_day",
          "label": "Hair Day Status",
          "default": "3rd Day Hair Approved"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Reviews Grid"
    }
  ]
}
{% endschema %}`
  },
  {
    path: 'snippets/sticky-cart-button.liquid',
    category: 'snippets',
    description: 'Floating add-to-cart layout configured to detect scrolls on mobile platforms and slide upwards globally when buying options disappear from view.',
    code: `{%- if product != blank -%}
<div id="sticky-shampoo-cart" class="sticky-cart-container hidden lg:flex justify-between items-center bg-white border-t-2 border-black p-4 fixed bottom-0 left-0 right-0 z-[100] transition-transform duration-300">
  <div class="flex items-center gap-4 max-w-7xl mx-auto w-full justify-between">
    <div class="flex items-center gap-3">
      <div class="w-12 h-12 bg-[#FF7EB9]/30 rounded-lg overflow-hidden">
        {%- if product.featured_image != blank -%}
          <img src="{{ product.featured_image | img_url: '100x' }}" class="w-full h-full object-cover" alt="{{ product.title | escape }}">
        {%- else -%}
          <div class="w-full h-full bg-neutral-200"></div>
        {%- endif -%}
      </div>
      <div>
        <p class="font-extrabold uppercase text-sm font-heading">{{ product.title }}</p>
        <p class="text-xs text-neutral-500 font-bold">{{ product.price | money }}</p>
      </div>
    </div>

    <div class="flex items-center gap-4">
      <button id="sticky-cart-submit-btn" class="glossy-button-sticky px-8 py-3 rounded-full text-white font-extrabold uppercase text-sm tracking-wider">
        Instant Rescue ({{ product.price | money }})
      </button>
    </div>
  </div>
</div>

<style>
  .sticky-cart-container {
    transform: translateY(100%);
  }
  .glossy-button-sticky {
    background: linear-gradient(135deg, #FF7EB9 0%, #FF0050 100%);
    box-shadow: 0 4px 15px rgba(255, 0, 80, 0.3);
    border: none;
    cursor: pointer;
  }
  .sticky-cart-container.active {
    transform: translateY(0);
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const nativeBtn = document.querySelector('[name="add"]');
    const stickyCart = document.getElementById('sticky-shampoo-cart');
    if (!nativeBtn || !stickyCart) return;

    // 使用 Intersection Observer 替代 scroll 事件
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        stickyCart.classList.toggle('active', !entry.isIntersecting);
      });
    }, { threshold: 0 });
    observer.observe(nativeBtn);

    // 提交时触发原生按钮的点击（保留变体逻辑）
    const stickyBtn = document.getElementById('sticky-cart-submit-btn');
    if (stickyBtn) {
      stickyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nativeBtn.click();
      });
    }
  });
</script>
{%- endif -%}`
  },
  {
    path: 'config/settings_schema.json',
    category: 'config',
    description: 'Shopify architecture config for theme customizations including custom styling definitions and palette parameters.',
    code: `[
  {
    "name": "theme_info",
    "theme_name": "ModMingle Theme",
    "theme_author": "ModMingle Creative Studio",
    "theme_version": "1.0.0"
  },
  {
    "name": "ModMingle Palettes",
    "settings": [
      {
        "type": "header",
        "content": "Palette Accents"
      },
      {
        "type": "color",
        "id": "color_pink_gloss",
        "label": "Glossy Accent Pink",
        "default": "#FF7EB9"
      },
      {
        "type": "color",
        "id": "color_pink_hot",
        "label": "High-Energy Pink",
        "default": "#FF0050"
      },
      {
        "type": "color",
        "id": "color_brand_yellow",
        "label": "Bold Brand Yellow",
        "default": "#FDFF00"
      }
    ]
  }
]`
  },
  {
    path: 'config/settings_data.json',
    category: 'config',
    description: 'Initial JSON content values and section parameters. Auto-populates standard configurations when the theme is first uploaded or assigned.',
    code: `{
  "current": {
    "sections": {
      "announcement_bar": {
        "type": "announcement-bar",
        "settings": {
          "marquee_text": "🚨 ULTRA FINE MIST • ZERO WHITE CAST • LAZY GIRL CONFIDENCE RESET 🚨",
          "text_speed": 15
        }
      }
    }
  }
}`
  },
  {
    path: 'assets/global.js',
    category: 'assets',
    description: 'Standard global assets handler for custom UI/UX interactions, TikTok emulation behaviors, and scroll transitions.',
    code: `// ModMingle Dawn Customizations Active
document.addEventListener('DOMContentLoaded', () => {
  console.log('ModMingle Shopify Theme loaded successfully!');
});`
  },
  {
    path: 'assets/section-announcement-bar.css',
    category: 'assets',
    description: 'Ticker layout container and infinite loop scrolling transitions CSS styles for the OS 2.0 marquee bar.',
    code: `/* Announcement Bar Scrolling Marquee Styles */
.announcement-marquee {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding: 10px 0;
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee_scroll linear infinite;
}
.marquee-content {
  font-family: 'Bricolage Grotesque', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.05em;
  color: #000;
}
@keyframes marquee_scroll {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-33.33%); }
}`
  }
];
